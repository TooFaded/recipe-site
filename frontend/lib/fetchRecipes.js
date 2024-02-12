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