// "use client"; // Ensure Next.js compatibility

// export default function InterviewSetupScreen() {
//   // Functions to handle permissions
//   const handleCheckCamera = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ video: true });
//       alert("Camera permissions granted!");
//     } catch (error) {
//       alert("Camera permissions denied or not supported!");
//     }
//   };

//   const handleCheckMicrophone = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//       alert("Microphone permissions granted!");
//     } catch (error) {
//       alert("Microphone permissions denied or not supported!");
//     }
//   };

//   const handleCheckSpeaker = () => {
//     // Speaker check functionality can involve playing a sample audio
//     const audio = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");
//     audio.play().then(() => alert("Speaker is working!")).catch(() => alert("Speaker check failed!"));
//   };

//   const handleEnableScreenShare = async () => {
//     try {
//       await navigator.mediaDevices.getDisplayMedia({ video: true });
//       alert("Screen sharing enabled!");
//     } catch (error) {
//       alert("Screen sharing permissions denied or not supported!");
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
//         <img
//           src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
//           alt="Zeko AI Logo"
//           className="h-8"
//         />
//         <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
//           Login / Sign Up
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-8 flex justify-center items-center">
//         <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl w-full">
//           <h1 className="text-2xl font-bold mb-4">Ready to join?</h1>
//           <p className="text-gray-400 mb-6">
//             Please make sure your device is properly configured.
//           </p>
//           <div className="space-y-4">
//             <button
//               className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               onClick={handleCheckCamera}
//             >
//               <span>📷 Check Camera</span>
//               <span className="text-blue-400">▶</span>
//             </button>
//             <button
//               className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               onClick={handleCheckMicrophone}
//             >
//               <span>🎤 Check Microphone</span>
//               <span className="text-blue-400">▶</span>
//             </button>
//             <button
//               className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               onClick={handleCheckSpeaker}
//             >
//               <span>🔊 Check Speaker</span>
//               <span className="text-blue-400">▶</span>
//             </button>
//             <button
//               className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               onClick={handleEnableScreenShare}
//             >
//               <span>🖥 Enable Screen Share</span>
//               <span className="text-blue-400">▶</span>
//             </button>
//           </div>
//           <button
//             className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold"
//           >
//             Start Interview
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client"; // Ensure Next.js compatibility

export default function InterviewSetupScreen({ onNext }) {
  const handleCheckCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      alert("Camera permissions granted!");
    } catch (error) {
      alert("Camera permissions denied or not supported!");
    }
  };

  const handleCheckMicrophone = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      alert("Microphone permissions granted!");
    } catch (error) {
      alert("Microphone permissions denied or not supported!");
    }
  };

  const handleCheckSpeaker = () => {
    const audio = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");
    audio.play().then(() => alert("Speaker is working!")).catch(() => alert("Speaker check failed!"));
  };

  const handleEnableScreenShare = async () => {
    try {
      await navigator.mediaDevices.getDisplayMedia({ video: true });
      alert("Screen sharing enabled!");
    } catch (error) {
      alert("Screen sharing permissions denied or not supported!");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <img
          src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
          alt="Zeko AI Logo"
          className="h-8"
        />
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600">
          Login / Sign Up
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8 flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xl w-full">
          <h1 className="text-2xl font-bold mb-4">Ready to join?</h1>
          <p className="text-gray-400 mb-6">
            Please make sure your device is properly configured.
          </p>
          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleCheckCamera}
            >
              <span>📷 Check Camera</span>
              <span className="text-blue-400">▶</span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleCheckMicrophone}
            >
              <span>🎤 Check Microphone</span>
              <span className="text-blue-400">▶</span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleCheckSpeaker}
            >
              <span>🔊 Check Speaker</span>
              <span className="text-blue-400">▶</span>
            </button>
            <button
              className="w-full flex items-center justify-between bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={handleEnableScreenShare}
            >
              <span>🖥 Enable Screen Share</span>
              <span className="text-blue-400">▶</span>
            </button>
          </div>
          <button
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-semibold"
            onClick={onNext} // This triggers moving to the QuestionScreen
          >
            Start Interview
          </button>
        </div>
      </main>
    </div>
  );
}
