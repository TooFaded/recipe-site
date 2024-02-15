import RecipeModal from "@/ui/recipeModal.js";
import { lato } from "@/ui/fonts";
import { fetchRecipeById } from "../../../../../../lib/fetchRecipes";
import Image from "next/image.js";

export default async function Modal({ params }) {
  const recipe = await fetchRecipeById(params.id);
  return (
    <RecipeModal>
      <div
        className="container sm:max-h-max
       sm:max-w-4xl max-w-lg mx-auto"
      >
        <div className="text-center"></div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={120}
              height={100}
              layout="responsive"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-8 sm:p-12">
            <h1
              className={`${lato.className} sm:text-3xl text-xl font-bold mb-4`}
            >
              {recipe.title}
            </h1>
            <div
              className="prose max-w-none sm:text-xl text-sm text-gray-600"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          </div>
        </div>
      </div>
    </RecipeModal>
  );
}
