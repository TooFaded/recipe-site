"use client";
import { useState } from "react";
import { searchRecipes } from "../../../lib/fetchRecipes";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";
import SearchBar from "@/ui/searchBar";

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setHasSearched(true);
    if (results && results.results) {
      setRecipes(results.results); // Assuming the API returns an object with a `results` array
    } else {
      // Handle the case where no results are found or an error occurs
      setRecipes([]);
    }
  };

  return (
    <>
      <NavbarComponent />
      <SearchBar onSearch={handleSearch} />
      <main className="h-screen flex flex-col items-center">
        <div className="mt-8 w-full px-4">
          {hasSearched ? (
            recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{recipe.title}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">
                No recipes found. Try a different search!
              </p>
            )
          ) : null}
        </div>
      </main>
      <FooterComponent />
    </>
  );
}
