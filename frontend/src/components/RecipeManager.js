import React, { useState } from "react";

const recipes = [
  {
    title: "Spaghetti Bolognese",
    steps: [
      "Boil water",
      "Cook pasta",
      "Prepare sauce",
      "Mix pasta with sauce",
      "Serve"
    ]
  },
  {
    title: "Omelette",
    steps: [
      "Crack eggs",
      "Whisk eggs",
      "Heat pan",
      "Cook eggs in pan",
      "Serve with toast"
    ]
  }
];

export default function RecipeManager() {
  const [search, setSearch] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes((search || "").toLowerCase())
  );

  const startRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (selectedRecipe && currentStep < selectedRecipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <h2>Recipe Manager</h2>
      <input
        type="text"
        placeholder="Search recipe"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            {recipe.title}{" "}
            <button onClick={() => startRecipe(recipe)}>Start</button>
          </li>
        ))}
      </ul>

      {selectedRecipe && (
        <div>
          <h3>{selectedRecipe.title}</h3>
          <p>Step {currentStep + 1}: {selectedRecipe.steps[currentStep]}</p>
          <button onClick={nextStep}>Next Step</button>
        </div>
      )}
    </div>
  );
}
