export default function ConceptList({ concepts, onSelect }) {
  return (
    <div className="p-4 w-full h-full">
      <h2 className="text-3xl font-bold mb-8">JS Concepts</h2>
      <div className="flex-col w-full p-2">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="cursor-pointer bg-gray-100 rounded-md overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center min-w-full my-4"
            style={{ width: "10rem", height: "5rem" }}
            onClick={() => onSelect(concept)}
          >
            <div className="text-xl">{concept.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
