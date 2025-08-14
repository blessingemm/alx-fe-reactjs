import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function HomePage(){
  const handleAddRecipe = (recipe) => {
    console.log("New Recipe:", recipe);
  };
  const[recipes, setRecipes] = useState([]);
  useEffect(() =>{
    setRecipes(recipesData);
  }, []);

  return(
  <div className="p-6">
      <div className="mb-6">
        <Link
          to="/add"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition ml-253"
        >
          Add New Recipe
        </Link>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {recipes.map((recipes) =>(
      <Link to={`/recipe/${recipes.id}`} key={recipes.id}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover-shadow-xl transition-shadow ">
        <img src={recipes.image} alt={recipes.title} className="w-full h-50 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{recipes.title}</h2>
          <p className="text-gray-600 text-sm">{recipes.summary}</p>
        </div>
      </div>
      </Link>
    ))}
    </div>
  </div>
  );
}

export default HomePage;