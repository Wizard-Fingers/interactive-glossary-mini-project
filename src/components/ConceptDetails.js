// import Image from "next/image";

export default function ConceptDetails({ concept }) {
  //   const [answer, setAnswer] = useState("");
  //   const [isCorrect, setIsCorrect] = useState(null);

  //   const handleCheckAnswer = () => {
  //     if (answer.toLowerCase() === concept.quizAnswer.toLowerCase()) {
  //       setIsCorrect(true);
  //     } else {
  //       setIsCorrect(false);
  //     }
  //   };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{concept.name}</h1>
      {/* Ensure that concept.image is a valid path */}
      {/* <Image
        src={concept.image}
        alt={concept.name}
        width={500}
        height={300}
        className="mb-4"
      /> */}
      <p>{concept.description}</p>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Quiz</h2>
        <p>{concept.quizQuestion}</p>
        <input
          type="text"
          //   value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2 mt-2 mb-4"
        />
        <button
          //   onClick={handleCheckAnswer}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Check Answer
        </button>
        {/* {isCorrect !== null && (
          <p
            className={`mt-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}
          >
            {isCorrect ? "Correct!" : "Incorrect! Try again."}
          </p>
        )} */}
      </div>
    </div>
  );
}
