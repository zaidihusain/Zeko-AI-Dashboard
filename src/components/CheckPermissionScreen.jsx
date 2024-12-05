
"use client"; // Add this line at the top

export default function CheckPermissionScreen({ onNext }) {
    const checkPermissions = async () => {
      try {
        // Audio & Video Permission
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        // Screen Sharing Permission
        await navigator.mediaDevices.getDisplayMedia({ video: true });
        alert("Permissions granted!");
        onNext();
      } catch (error) {
        alert("Permissions denied or not supported!");
      }
    };
  
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Permission Check</h1>
        <p className="mt-4">We need access to your camera, microphone, and screen.</p>
        <button
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded"
          onClick={checkPermissions}
        >
          Grant Permissions
        </button>
      </div>
    );
  }
  