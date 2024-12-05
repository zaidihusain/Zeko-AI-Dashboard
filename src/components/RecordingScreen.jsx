"use client"; // Add this line at the top

import { useState, useRef } from "react";

export default function RecordingScreen({ onComplete }) {
  const [recording, setRecording] = useState(false);
  const videoRef = useRef();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setRecording(true);

      mediaRecorder.ondataavailable = (event) => {
        const chunks = [];
        chunks.push(event.data);

        // Send chunks to API here
      };

      mediaRecorder.onstop = () => {
        setRecording(false);
        stream.getTracks().forEach((track) => track.stop());
      };

      setTimeout(() => {
        mediaRecorder.stop();
        onComplete();
      }, 10000); // Stop after 10 seconds
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Recording Screen</h1>
      <video ref={videoRef} className="mt-4 mx-auto"></video>
      <button
        className="mt-6 bg-red-500 text-white py-2 px-4 rounded"
        onClick={startRecording}
        disabled={recording}
      >
        {recording ? "Recording..." : "Start Recording"}
      </button>
    </div>
  );
}
