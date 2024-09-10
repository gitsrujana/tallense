import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../components/features/auth/authSlice'
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7001/v1/api',
    //credentials: 'include',
    
    //withCredentials:true,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        console.log("token",token)
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
    credentials:'include',
    mode:'cors',
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    console.log("baseQueryWithReauth")
    console.log("args",args) // request url, method, body
    console.log("api",api) // signal, dispatch, getState()
    console.log(extraOptions) //custom like {shout: true}

    let result = await baseQuery(args, api, extraOptions)
    console.log("args in basequery",args)
    console.log("api in basequery",api)
    console.log('sending refresh token',result)
    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
       

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
        console.log("refresh result",refreshResult)
        if (refreshResult?.data) {

            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data }))

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {

            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired."
            }
            return refreshResult
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['User'],
    endpoints: builder => ({})
})