// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";
// import StepContent from "@material-ui/core/StepContent";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import { useForm, FormProvider } from "react-hook-form";
// import HeaderForm from "./HeaderForm";
// import ExperianceForm from "./ExperianceForm";
// import EducationForm from "./EducationForm";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%"
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing(2)
//   },
//   resetContainer: {
//     padding: theme.spacing(3)
//   }
// }));

// function getSteps() {
//   return ["Basic Form", "Contact Form", "Personal Form", "Payment Form"];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <HeaderForm />;
//     case 1:
//       return <ExperianceForm />;
//     case 2:
//       return <EducationForm />;
//     case 3:
//       return <ExperianceForm />;
//     default:
//       return "Unknown step";
//   }
// }

// function VerticalStepper() {
//   const classes = useStyles();

//   const methods = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       nickName: "",
//       emailAddress: "",
//       phoneNumber: "",
//       alternatePhone: "",
//       address1: "",
//       address2: "",
//       country: "",
//       cardNumber: "",
//       cardMonth: "",
//       cardYear: ""
//     }
//   });

//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const handleSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//             <StepContent>
//               <div className={classes.actionsContainer}>
//                 <div>
//                   <FormProvider {...methods}>
//                     <form onSubmit={methods.handleSubmit(handleSubmit)}>
//                       {getStepContent(activeStep)}
//                       <Button
//                         disabled={activeStep === 0}
//                         onClick={handleBack}
//                         className={classes.button}
//                       >
//                         Back
//                       </Button>

//                       <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={handleNext}
//                         className={classes.button}
//                       >
//                         {activeStep === steps.length - 1 ? "Finish" : "Next"}
//                       </Button>
//                     </form>
//                   </FormProvider>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} className={classes.resetContainer}>
//           <Typography>All steps completed - Thank you!</Typography>

//           <Button onClick={handleReset} className={classes.button}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//       {JSON.stringify(activeStep)}
//     </div>
//   );
// }

// export default VerticalStepper;
