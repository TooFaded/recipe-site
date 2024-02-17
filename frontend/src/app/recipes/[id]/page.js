import Link from "next/link";
import ViewButton from "@/ui/viewButton";
import Image from "next/image";
import { lato } from "@/ui/fonts";
import { fetchRecipeById } from "../../../../lib/fetchRecipes";

export default async function RecipeDetailsPage({ params }) {
  const recipe = await fetchRecipeById(params.id);

  if (!recipe) return <p>Loading...</p>;

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-3xl px-4">
        <Link href="/recipes">
          <h3 className="text-lg text-center font-semibold text-sky-600 hover:text-sky-700 transition duration-300 ease-in-out underline">
            ← Back to recipes
          </h3>
        </Link>
        <div className="text-center"></div>
        <div className="bg-white shadow-lg rounded-lg sm:h-full  overflow-hidden">
          <div className="relative h-56 md:h-96 w-full overflow-hidden">
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
          <div className="p-4 md:p-8">
            <h1
              className={`${lato.className} text-xl md:text-3xl font-bold mb-4`}
            >
              {recipe.title}
            </h1>
            <div
              className="prose prose-sm md:prose-base max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            ></div>
            <ViewButton recipeId={params.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
