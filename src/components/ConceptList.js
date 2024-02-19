export default function ConceptList({ concepts, onSelect }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Concepts</h2>
      <ul>
        {concepts.map((concept) => (
          <li
            key={concept.id}
            className="cursor-pointer mb-2"
            onClick={() => onSelect(concept)}
          >
            {concept.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
