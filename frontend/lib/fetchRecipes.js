export async function getRecipes() {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=24&apiKey=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

export async function fetchRecipeById(recipeId) {
  let data = null;
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
  }

  return data;
}

export async function searchRecipes(query) {
  const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
  // Encode the query to ensure it's in a format that can be included in a URL
  const encodedQuery = encodeURIComponent(query);

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodedQuery}&number=24&apiKey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to search recipes with status: ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to search for recipes:", error);
    return null;
  }
}
