export default function QuestionScreen({ question, onNext }) {
    const playAudio = () => {
      const audio = new Audio("/sample-question.mp3"); // Ensure the path to the audio file is correct
      audio.play();
    };
  
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Question</h1>
        <p className="mt-4">{question}</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded" onClick={playAudio}>
          Play Question Audio
        </button>
        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded" onClick={onNext}>
          Record Answer
        </button>
      </div>
    );
  }
  