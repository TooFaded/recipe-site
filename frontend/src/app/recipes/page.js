import { pacifico, inter } from "@/ui/fonts";
import { getRecipes } from "../../../lib/fetchRecipes";
import RecipeCard from "../../../ui/recipeCard";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import Link from "next/link";

export const revalidate = 86400;

export default async function RandomRecipes() {
  const data = await getRecipes();
  const recipes = data.recipes;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />

      <div className="flex flex-wrap justify-center gap-2 p-5 mt-5">
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
            <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-2">
              <RecipeCard recipe={recipe} />
            </div>
          </Link>
        ))}
      </div>

      <FooterComponent />
    </div>
  );
}
