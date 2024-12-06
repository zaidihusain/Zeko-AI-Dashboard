


"use client"; // Ensure compatibility with Next.js

import { useState } from "react";
import InterviewSetupScreen from "./InterviewSetupScreen"; // Import the InterviewSetupScreen component

export default function CheckPermissionScreen({ onNext }) {
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  const checkPermissions = async () => {
    try {
      // Audio & Video Permission
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      // Screen Sharing Permission
      await navigator.mediaDevices.getDisplayMedia({ video: true });

      // If permissions are granted, update the state to render InterviewSetupScreen
      alert("Permissions granted!");
      setPermissionsGranted(true);
    } catch (error) {
      alert("Permissions denied or not supported!");
    }
  };

  // If permissions are granted, render InterviewSetupScreen
  if (permissionsGranted) {
    return <InterviewSetupScreen />;
  }

  // Default UI when permissions are not granted
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-lg w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Permission Check</h1>
        <p className="text-gray-300 text-center">
          To proceed, we need access to your camera, microphone, and screen.
          This ensures a seamless experience during the interview process.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-blue-400 focus:outline-none"
            onClick={checkPermissions}
          >
            Grant Permissions
          </button>
        </div>
        <div className="mt-6 text-sm text-gray-400 text-center">
          <p>
            By granting permissions, you agree to our{" "}
            <a
              href="#"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
