"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RecipeDetailsPage() {
  const pathname = usePathname();
  const [searchParams] = useSearchParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeId = pathname.split("/").pop();
    const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    console.log("Fetching recipe with id:", recipeId);
    console.log("API Key:", apiKey);
    console.log("Current pathname:", pathname);
    console.log("Current searchParams:", searchParams);

    const fetchRecipeById = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
        );
        const data = await response.json();
        console.log("Fetched data:", data);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      }
    };

    if (recipeId) fetchRecipeById();
  }, [pathname, searchParams]);

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
            width={100}
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
