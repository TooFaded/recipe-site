//import my fonts
import { pacifico, inter } from "@/app/ui/fonts";
import RecipeCard from "../ui/recipeCard";
import NavbarComponent from "@/app/ui/navbar";
import FooterComponent from "@/app/ui/footer";

export async function getRecipes() {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=24&apiKey=${apiKey}`
  );
  return res.json();
}

export default async function RandomRecipes() {
  const data = await getRecipes();
  const recipes = data.recipes; // Assuming the API returns an array of one recipe

  return (
    <div>
      <NavbarComponent />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
