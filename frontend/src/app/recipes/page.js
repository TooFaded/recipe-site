import { pacifico, inter } from "@/ui/fonts";
import RecipeCard from "../../../ui/recipeCard";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import Link from "next/link";

export async function getRecipes() {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
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
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
            <div>
              <RecipeCard recipe={recipe} />
            </div>
          </Link>
        ))}
      </div>

      <FooterComponent />
    </div>
  );
}
