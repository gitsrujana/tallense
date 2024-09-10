import './App.css';
import Navbar from './components/Navbar';
import IndividualSignup from './components/features/auth/signup-form/IndividualSignup';
import Companies from './pages/Companies';
import Jobs from './pages/Jobs';
import LandingPage from './pages/LandingPage';
import {Route,Routes} from 'react-router-dom'
import Services from './pages/Services';
import RegistePage from './pages/RegistePage';
import LoginPage from './pages/LoginPage';
import OtpInput from './components/OtpInput';
import VerifyMobileNumber from './components/VerifyMobileNumber';
import EducationDetails from './components/EducationDetails';
import Forms from './components/features/auth/Forms';
import AddExperiance from './components/AddExperiance';
import ExperianceForm from './components/ExperianceForm';
import AddEducation from './components/AddEducation';
import AddSkills from './components/AddSkills';
import EducationForm from './components/EducationForm';
import AddMoreDetails from './components/AddMoreDetails';
import AddSummary from './components/AddSummary';
import AdditionalDetails from './components/AdditionalDetails';
import HeaderForm from './components/HeaderForm';
import { StepContext } from '@mui/material';
import EmployerLoginForm from './components/EmployerLoginForm';
import CompanyForm from './components/CompanyForm';
import EmployeeMobileVerification from './components/EmployeeMobileVerification';
import EmployeeCreateAccount from './components/EmployeeCreateAccount';
import EmployerOtpInput from './components/EmployerOtpInput';

import EmployerCardPage from './pages/EmployerCardPage';



function App() {
  return (
    <>
             <Navbar/> 
            
         <Routes>
          <Route path='/Register' element={<RegistePage/>}></Route>
          <Route path='/VerifyMobileNumber' element={<VerifyMobileNumber/>}/>
         <Route path='EducationDetails' element={<EducationDetails/>}/>
         <Route path='LandingPage' element={<LandingPage/>}/>
          <Route path='/Login' element={<LoginPage/>}> </Route>
         <Route path='Forms' element={<Forms/>}></Route>
         <Route path='OtpInput' element={<OtpInput/>}></Route>
         <Route path='LandingPage' element={<LandingPage/>}></Route>
         <Route path='RegistePage' element={<RegistePage/>}/>
          <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/jobs' element={<Jobs/>}></Route>
    <Route path='/companies' element={<Companies/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
   
         <Route path='Individuals' element={<IndividualSignup/>}/>
         <Route path='/AddExperiance' element={<AddExperiance/>}/>
         <Route path='/ExperianceForm' element={<ExperianceForm/>}/>
         <Route path='/AddEducation' element={<AddEducation/>}/>
         <Route path='/EducationForm' element={<EducationForm/>}/>
         <Route path='/AddSkills' element={<AddSkills/>}/>
         <Route path='/AddSummary' element={<AddSummary/>}></Route>
         <Route path='/AdditionalDetails' element={<AdditionalDetails/>}></Route>
         <Route path='/AddMoreDetails' element={<AddMoreDetails/>}/>
         <Route path='/AdditionalDetails' element={<AdditionalDetails/>}/>
         <Route path='/AddSummary' element={<AddSummary/>}/>
         <Route path='/AddSkills' element={<AddSkills/>}/>
         <Route path='/EducationForm' element={<EducationForm/>}/>
         <Route path='/ExperianceForm' element={<ExperianceForm/>}/>
         <Route path='/HeaderForm' element={<HeaderForm/>}/>
         <Route path='/AddEducation' element={<AddEducation/>}/>
         <Route path='/AddExperiance' element={<AddExperiance/>}/>
         <Route path='/EmployerLoginForm' element={<EmployerLoginForm/>}/>
         <Route path='/CompanyForm' element={<CompanyForm/>}/>
         <Route path='/EmployerOtpInput' element={<EmployerOtpInput/>}/>
         <Route path='/EmployeeCreateAccount' element={<EmployeeCreateAccount/>}/>
         <Route path='/EmployeeMobileVerification' element={<EmployeeMobileVerification/>}/>
         <Route path='/EmployerCard' element={<EmployerCardPage/>}/>
        
          </Routes>           
    </>
  );
}

export default App;
