// "use client";
import Link from "next/link";
import Image from "next/image";
import { fetchRecipeById } from "../../../../lib/fetchRecipes";

export default async function RecipeDetailsPage({ params }) {
  const recipe = await fetchRecipeById(params.id);
  recipe.summary = recipe.summary.replace(/\n/g, "<br />");

  console.log(recipe);
  if (!recipe) return <p>Loading...</p>;

  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link href="/recipes">
            <h1 className="font-semibold italic text-sky-600 underline">
              Back to recipes
            </h1>
          </Link>
        </div>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={120}
            height={100}
            className="w-full max-w-md mb-4"
          />
          <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          {/* More details as needed */}
        </div>
      </div>
    </section>
  );
}
