export default function ConceptList({ concepts, onSelect }) {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">JS Concepts</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept) => (
          <div
            key={concept.id}
            className="cursor-pointer bg-gray-100 rounded-md overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center"
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
