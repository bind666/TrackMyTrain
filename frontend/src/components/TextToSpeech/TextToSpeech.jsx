import { useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US"; // Change language if needed
      speech.rate = 1; // Adjust speed (0.1 to 10)
      speech.pitch = 1; // Adjust pitch (0 to 2)
      window.speechSynthesis.speak(speech);
    } else {
      alert("Your browser does not support text-to-speech!");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <textarea
        className="border p-2 w-80 h-32"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={speakText}
      >
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;
