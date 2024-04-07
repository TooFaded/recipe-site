import { lato, pacifico } from "@/ui/fonts";
import { fetchRecipeById } from "../../../../../lib/fetchRecipes";
import Image from "next/image";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import DOMPurify from "isomorphic-dompurify";
import BackButton from "@/ui/backButton";

export default async function RecipeInstructions({ params }) {
  const recipe = await fetchRecipeById(params.id);

  if (!recipe) {
    return <p>Recipe not found or loading...</p>;
  }

  const sanitizedInstructions = DOMPurify.sanitize(recipe.instructions);
  const renderIngredient = (ingredient) => {
    return `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
  };

  return (
    <>
      <NavbarComponent />
      <div className="bg-white-400 flex flex-col justify-center container mx-auto pt-4 pb-10 max-w-full px-4 mb-[12rem]">
        <BackButton />
        <div className="prose flex items-center justify-between flex-col sm:px-2 px-10 max-w-none bg-white shadow rounded-lg p-6">
          <h1
            className={`${pacifico.className} text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg`}
          >
            Instructions
          </h1>
          <div className="my-10 flex sm:flex-nowrap flex-wrap justify-center item-center">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={200}
              style={{
                objectFit: "fill",
              }}
              className="transition-transform duration-500 hover:scale-105 rounded-xl"
            />
            <div className="ml-4">
              <div className="text-center">
                <h2 className={`${lato.className} text-2xl font-bold pt-4`}>
                  Ingredients
                </h2>
              </div>
              <ul className="marker:text-black list-disc pl-6 ml-2 mb-4 bg-yellow-100 rounded-lg p-4">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <li key={index} className={`${lato.className} `}>
                    {renderIngredient(ingredient)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="text-xl mb-2 font-semibold underline">
            {recipe.title}
          </h2>

          <div
            className="sm:text-lg text-base lg:prose-xl h-fit max-w-none bg-white shadow rounded-lg mx-auto sm:p-10 sm:px-32 p-4"
            dangerouslySetInnerHTML={{ __html: sanitizedInstructions }}
          />
          <div>
            <p className="p-4">
              Ready in{" "}
              {recipe.readyInMinutes >= 60
                ? `${Math.floor(recipe.readyInMinutes / 60)} hr `
                : ""}
              {`${recipe.readyInMinutes % 60} mins`}
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
