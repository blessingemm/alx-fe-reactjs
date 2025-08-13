import { useParams } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail(){
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id.toString() === id);

  if(!recipe) {
    return <p>Recipe not found</p>
  }
  return(
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-70 object-cover" />
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 mt-10">Ingredients</h2>
        <ul className="pl-6 space-y-2  mb-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li className="list-disc " key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}
export default RecipeDetail;