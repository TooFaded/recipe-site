import Link from "next/link";
import Image from "next/image";
import { lato } from "@/ui/fonts";
import { fetchRecipeById } from "../../../../lib/fetchRecipes";

export default async function RecipeDetailsPage({ params }) {
  const recipe = await fetchRecipeById(params.id);
  recipe.summary = recipe.summary.replace(/\n/g, "<br />");

  console.log(recipe);
  if (!recipe) return <p>Loading...</p>;

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Link href="/recipes">
            <h3 className="text-lg font-semibold text-sky-600 hover:text-sky-700 transition duration-300 ease-in-out underline">
              ← Back to recipes
            </h3>
          </Link>
        </div>
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
            <h1 className={`${lato.className} text-3xl font-bold mb-4`}>
              {recipe.title}
            </h1>
            <div
              className="prose max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
            {/* Consider adding more details here */}
          </div>
        </div>
      </div>
    </section>
  );
}
