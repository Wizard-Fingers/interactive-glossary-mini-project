"use client";
import { useState } from "react";
import ConceptList from "../components/ConceptList";
import ConceptDetails from "../components/ConceptDetails";

const conceptsData = [
  {
    id: 1,
    name: "Variables",
    description:
      "Variables are used to store data that can be referenced and manipulated in a program.",
    // image: "/variable.jpg",
    quizQuestion: "What is a variable?",
    quizOptions: ["A value that can change", "A constant value", "A function"],
    quizAnswer: "A value that can change",
  },
  {
    id: 2,
    name: "Functions",
    description:
      "Functions are blocks of reusable code that perform a specific task.",
    // image: "/function.jpg",
    quizQuestion: "What are functions?",
    quizOptions: ["Variables", "Loops", "Blocks of reusable code"],
    quizAnswer: "Blocks of reusable code",
  },
  // Add more concepts as needed
];

export default function Home() {
  const [selectedConcept, setSelectedConcept] = useState(conceptsData[0]);

  const handleConceptSelect = (concept) => {
    setSelectedConcept(concept);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/3 bg-gray-200 overflow-y-auto">
        <ConceptList concepts={conceptsData} onSelect={handleConceptSelect} />
      </div>
      <div className="w-2/3 p-8">
        <ConceptDetails concept={selectedConcept} />{" "}
        {/* Passing concept as a prop */}
      </div>
    </div>
  );
}
