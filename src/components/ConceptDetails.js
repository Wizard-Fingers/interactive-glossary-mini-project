import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ConceptDetails({ concept }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    const shuffleOptions = () => {
      const options = [...concept.quizOptions];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setShuffledOptions(options);
    };

    shuffleOptions();
  }, [concept]);

  const handleCheckAnswer = () => {
    const isAnswerCorrect =
      selectedOption.toLowerCase() === concept.quizAnswer.toLowerCase();
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    setTimeout(() => {
      setIsCorrect(null); // Clear the message after 2 seconds
    }, 2000);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mx-auto max-w-lg p-8 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">{concept.name}</h1>
      <Image
        src="https://via.placeholder.com/500x300"
        alt={concept.name}
        className="mb-6 rounded-md"
        width={500}
        height={300}
      />
      <p className="mb-6">{concept.description}</p>
      <div>
        <h2 className="text-lg font-bold mb-4">Quiz</h2>
        <p className="mb-4">{concept.quizQuestion}</p>
        <div>
          {shuffledOptions.map((option, index) => (
            <label key={index} className="flex items-center mb-2">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleCheckAnswer}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
        >
          Check Answer
        </button>
        {isCorrect !== null && (
          <p
            className={`mt-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}
          >
            {isCorrect ? "Correct!" : "Incorrect! Try again."}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-between">
        <div>Correct: {correctCount}</div>
        <div>Wrong: {wrongCount}</div>
      </div>
    </div>
  );
}
