"use client"; // Add this line at the top


// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
//       <h1 className="text-3xl font-bold mb-6">Welcome to the AI Interview Platform</h1>
//       <p className="text-lg text-center max-w-xl mb-6">
//         Please follow the instructions to complete your interview successfully:
//       </p>
//       <ol className="list-decimal list-inside text-left max-w-md space-y-2 mb-8">
//         <li>Ensure you are in a quiet environment.</li>
//         <li>Make sure your camera and microphone are working.</li>
//         <li>Prepare to share your screen when requested.</li>
//         <li>Listen carefully to the questions before responding.</li>
//       </ol>
//       <button
//         className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//         onClick={() => window.location.href = "/check-permissions"}
//       >
//         Start Test
//       </button>
//     </div>
//   );
// }


import { useState } from "react";
import InstructionScreen from "../components/InstructionScreen";
import CheckPermissionScreen from "../components/CheckPermissionScreen";
import QuestionScreen from "../components/QuestionScreen";
import RecordingScreen from "../components/RecordingScreen";

export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <>
      {step === 1 && <InstructionScreen onNext={nextStep} />}
      {step === 2 && <CheckPermissionScreen onNext={nextStep} />}
      {step === 3 && <QuestionScreen question="Tell us about yourself." onNext={nextStep} />}
      {step === 4 && <RecordingScreen onComplete={nextStep} />}
      {step === 5 && <div>Test Complete! Thank you!</div>}
    </>
  );
}
