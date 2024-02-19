"use client";
import { useState } from "react";
import ConceptList from "../components/ConceptList";
import ConceptDetails from "../components/ConceptDetails";
import conceptsData from "../Data/ConceptData"; // Corrected import statement

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
