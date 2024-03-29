"use client";
import { useState, useEffect } from "react";
import { fetchRecipeById, searchRecipes } from "../../../lib/fetchRecipes";
import Link from "next/link";
import RecipeCard from "@/ui/recipeCard";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import SearchBar from "@/ui/searchBar";

import Loading from "./loading";
import LoadingSpinner from "@/ui/loadingSpinner";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    // Initial search to get recipes based on query
    const initialResults = await searchRecipes(query);
    setHasSearched(true);

    // Check if the initialResults contains a `results` property with an array
    if (initialResults && initialResults.results) {
      // Fetch detailed information for each recipe
      const detailedRecipes = await Promise.all(
        initialResults.results.map(async (recipe) => {
          // Assuming `fetchRecipeById` is designed to handle error gracefully and return null in case of failure
          const detailedInfo = await fetchRecipeById(recipe.id);
          return detailedInfo ? detailedInfo : recipe; // Fallback to initial recipe info if detailed fetch fails
        })
      );

      // Update state with the detailed recipes
      setRecipes(detailedRecipes);
    } else {
      // Handle the case where no initial results are found or an error occurs
      setRecipes([]);
    }
  };

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <NavbarComponent />
      <SearchBar onSearch={handleSearch} />
      <main className="min-h-screen flex flex-col items-center">
        <div className="mt-8 w-full px-4">
          {hasSearched ? (
            recipes.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-2 p-5 mt-5">
                {recipes.map((recipe) => (
                  <Link key={recipe.id} href={`/search/${recipe.id}`} passHref>
                    <RecipeCard recipe={recipe} />
                  </Link>
                ))}
              </div>
            ) : (
              <LoadingSpinner />
            )
          ) : null}
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
