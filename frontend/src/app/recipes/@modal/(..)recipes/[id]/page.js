import RecipeModal from "@/ui/recipeModal.js";
import { lato } from "@/ui/fonts";
import { fetchRecipeById } from "../../../../../../lib/fetchRecipes";
import ViewButton from "@/ui/viewButton";

import Image from "next/image.js";

export default async function Modal({ params }) {
  const recipe = await fetchRecipeById(params.id);

  if (!recipe) {
    return <p>Recipe not found or loading...</p>;
  }

  return (
    <RecipeModal>
      <div className="container mx-auto max-w-3xl px-4 ">
        <div className="text-center"></div>
        <div className="bg-white sm:h-full sm:max-h-[80vh] overflow-auto-y">
          <div className="relative sm:h-56 h-28 md:h-96 w-full overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              style={{
                objectFit: "cover",
              }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-4 md:p-8 ">
            <h1
              className={`${lato.className} sm:text-xl text-base md:text-3xl font-bold mb-4`}
            >
              {recipe.title}
            </h1>
            <div
              className="prose prose-sm md:prose-base sm:text-xl text-xs max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            ></div>
            <ViewButton recipeId={params.id} />
          </div>
        </div>
      </div>
    </RecipeModal>
  );
}
