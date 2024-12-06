// "use client"; // Add this line at the top





// import { useState } from "react";
// import InstructionScreen from "../components/InstructionScreen";
// import CheckPermissionScreen from "../components/CheckPermissionScreen";
// import QuestionScreen from "../components/QuestionScreen";
// import RecordingScreen from "../components/RecordingScreen";

// export default function Home() {
//   const [step, setStep] = useState(1);

//   const nextStep = () => setStep(step + 1);

//   return (
//     <>
//       {step === 1 && <InstructionScreen onNext={nextStep} />}
//       {step === 2 && <CheckPermissionScreen onNext={nextStep} />}
//       {step === 3 && <QuestionScreen question="Tell us about yourself." onNext={nextStep} />}
//       {step === 4 && <RecordingScreen onComplete={nextStep} />}
//       {step === 5 && <div>Test Complete! Thank you!</div>}
//     </>
//   );
// }

"use client"; // Add this line at the top

import { useState } from "react";
import InstructionScreen from "../components/InstructionScreen";
import CheckPermissionScreen from "../components/CheckPermissionScreen";
import InterviewSetupScreen from "../components/InterviewSetupScreen"; // Import the InterviewSetupScreen
import QuestionScreen from "../components/QuestionScreen"; // Import the QuestionScreen
import RecordingScreen from "../components/RecordingScreen";

export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <>
      {step === 1 && <InstructionScreen onNext={nextStep} />}
      {step === 2 && <CheckPermissionScreen onNext={nextStep} />}
      {step === 3 && <InterviewSetupScreen onNext={nextStep} />}
      {step === 4 && <QuestionScreen question="Tell us about yourself." onNext={nextStep} />}
      {step === 5 && <RecordingScreen onComplete={nextStep} />}
      {step === 6 && <div>Test Complete! Thank you!</div>}
    </>
  );
}
