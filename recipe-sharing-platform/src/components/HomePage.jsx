import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage(){
  const[recipes, setRecipes] = useState([]);
  useEffect(() =>{
    setRecipes(recipesData);
  }, []);

  return(
    <div className="grid grid-colos-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
    {recipes.map((recipes) =>(
      <div key={recipes.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-shadow-xl transition-shadow ">
        <img src={recipes.image} alt={recipes.title} className="w-full h-50 object-cover"/>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{recipes.title}</h2>
          <p className="text-gray-600 text-sm">{recipes.summary}</p>
        </div>
      </div>
    ))}
    </div>
  );
}

export default HomePage;