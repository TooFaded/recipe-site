import { pacifico, inter } from "@/ui/fonts";
import { getRecipes } from "../../../lib/fetchRecipes";
import RecipeCard from "../../../ui/recipeCard";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import Link from "next/link";

export default async function RandomRecipes() {
  const data = await getRecipes();
  const recipes = data.recipes;

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
