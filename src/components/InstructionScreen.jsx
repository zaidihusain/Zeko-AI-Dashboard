
// // "use client"; // Ensure this for Next.js

// // export default function InstructionScreen({ onNext }) {
// //   return (
// //     <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
// //       {/* Header */}
// //       <div className="bg-gray-200 text-gray-900 p-4 flex justify-between items-center">
// //         {/* <h1 className="font-bold text-xl">ZEKO<span className="text-blue-500">AI</span></h1> */}
// //         <img src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
// //  alt=""/>
// //         <button className="bg-gray-100 text-blue-500 px-4 py-1 rounded-md">
// //           Login / SignUp
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-grow p-8">
// //         <h2 className="text-3xl font-bold mb-6">Trainee Interview</h2>
// //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
// //           <h3 className="font-semibold text-xl mb-4">Instructions</h3>
// //           <ol className="list-decimal list-inside space-y-3 text-sm">
// //             <li>Ensure stable internet and choose a clean, quiet location.</li>
// //             <li>Permission for access of camera, microphone, entire screen sharing is required.</li>
// //             <li>Be in professional attire and avoid distractions.</li>
// //             <li>Give a detailed response, providing as much information as you can.</li>
// //             <li>Answer the question with examples and projects you’ve worked on.</li>
// //           </ol>
// //           <p className="mt-4 text-blue-400">
// //             <a
// //               href="#"
// //               className="underline"
// //             >
// //               Click here
// //             </a>{" "}
// //             to try a mock interview with Avya, our AI interviewer, and build your confidence before the main interview!
// //           </p>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <div className="p-8 bg-gray-800 flex justify-center">
// //         <button
// //           className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg"
// //           onClick={onNext}
// //         >
// //           Start Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



// "use client"; // Ensure this for Next.js

// export default function InstructionScreen({ onNext }) {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-gray-200 text-gray-900 px-6 py-4 flex justify-between items-center shadow-md">
//         <img
//           src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
//           alt="Zeko AI Logo"
//           className="h-10 w-auto object-contain"
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
//           Login / SignUp
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow px-8 py-12 flex flex-col items-center">
//         <h2 className="text-4xl font-bold mb-8 text-center">Trainee Interview</h2>
//         <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full">
//           <h3 className="font-semibold text-2xl mb-6">Instructions</h3>
//           <ol className="list-decimal list-inside space-y-4 text-lg">
//             <li>Ensure stable internet and choose a clean, quiet location.</li>
//             <li>
//               Grant permissions for camera, microphone, and screen sharing access.
//             </li>
//             <li>Be in professional attire and avoid distractions.</li>
//             <li>
//               Provide detailed responses, sharing as much information as you can.
//             </li>
//             <li>
//               Use examples and projects you’ve worked on to support your answers.
//             </li>
//           </ol>
//           <p className="mt-6 text-blue-400 text-center">
//             <a
//               href="#"
//               className="underline hover:text-blue-300 transition"
//             >
//               Click here
//             </a>{" "}
//             to try a mock interview with Avya, our AI interviewer, and build your
//             confidence for the main interview!
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="p-6 bg-gray-800 flex justify-center">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg transition"
//           onClick={onNext}
//         >
//           Start Now
//         </button>
//       </footer>
//     </div>
//   );
// }



// "use client"; // Ensure this for Next.js
// import { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// export default function InstructionScreen({ onNext }) {
//   const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();

  

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
//       {/* Header */}
//       <div className="bg-gray-200 text-gray-900 p-4 flex justify-between items-center">
//         <img
//           src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
//           alt="Zeko AI Logo"
//           className="h-8"
//         />
//         {isAuthenticated ? (
//           <Button
//             className="bg-gray-100 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-200"
//             onClick={() => logout({ returnTo: window.location.origin })}
//           >
//             Logout
//           </Button>
//         ) : (
//           <Button
//             className=" bg-blue-500 rounded-md hover:bg-blue-600 text-white"
//             onClick={loginWithPopup}
//           >
//             Login / SignUp
//           </Button>
//         )}
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow p-8">
//         <h2 className="text-3xl font-bold mb-6">Trainee Interview</h2>
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h3 className="font-semibold text-xl mb-4">Instructions</h3>
//           <ol className="list-decimal list-inside space-y-3 text-sm">
//             <li>Ensure stable internet and choose a clean, quiet location.</li>
//             <li>Permission for access of camera, microphone, and screen sharing is required.</li>
//             <li>Be in professional attire and avoid distractions.</li>
//             <li>Give a detailed response, providing as much information as you can.</li>
//             <li>Answer the question with examples and projects you’ve worked on.</li>
//           </ol>
//           <p className="mt-4 text-blue-400">
//             <a href="#" className="underline">
//               Click here
//             </a>{" "}
//             to try a mock interview with Avya, our AI interviewer, and build your confidence before the main interview!
//           </p>
//         </div>
//       </div>

//       {/* Footer with Dialog */}
//       <div className="p-8 bg-gray-800 flex justify-center">
//         <Dialog>
//           <DialogTrigger asChild>
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out"
//             >
//               Start Now
//             </button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle className="text-lg font-bold">
//                 Ready to Start Your Career Journey?
//               </DialogTitle>
//               <DialogDescription className="text-sm mt-2">
//                 Please log in or sign up to proceed.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="mt-4 flex flex-col items-center space-y-4">
//               <Button
//                 onClick={loginWithPopup}
//                  className="w-full bg-blue-500 hover:bg-blue-600"
//               >
//                 Login with Auth0
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// }



"use client"; // Ensure this for Next.js

export default function InstructionScreen({ onNext }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gray-200 text-gray-900 p-4 flex justify-between items-center">
        <img
          src="https://zeko.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FzekoLogo.52f03e08.svg&w=256&q=75"
          alt="Zeko AI Logo"
          className="h-8"
        />
        <button className="bg-gray-100 text-blue-500 px-4 py-1 rounded-md hover:bg-gray-200">
          Login / SignUp
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h2 className="text-3xl font-bold mb-6">Trainee Interview</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl mb-4">Instructions</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm">
            <li>Ensure stable internet and choose a clean, quiet location.</li>
            <li>Permission for access of camera, microphone, and screen sharing is required.</li>
            <li>Be in professional attire and avoid distractions.</li>
            <li>Provide detailed responses, sharing as much information as you can.</li>
            <li>Answer the questions with examples and projects you’ve worked on.</li>
          </ol>
          <p className="mt-4 text-blue-400">
            <a href="#" className="underline">
              Click here
            </a>{" "}
            to try a mock interview with Avya, our AI interviewer, and build your confidence before the main interview!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 bg-gray-800 flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg"
          onClick={onNext} // Directly proceed without authentication
        >
          Start Now
        </button>
      </footer>
    </div>
  );
}

