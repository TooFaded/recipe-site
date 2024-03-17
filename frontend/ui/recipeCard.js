import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { lato } from "@/ui/fonts";

const placeholderImage = "/images/image-placeholder.png";

export default function RecipeCard({ recipe }) {
  function calculateStars(score) {
    const rating = (score / 100) * 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return { fullStars, halfStar, emptyStars };
  }

  const { fullStars, halfStar, emptyStars } = calculateStars(
    recipe.spoonacularScore
  );

  // Ensure fullStars is not negative, correcting invalid array length error
  const validFullStars = Math.max(0, fullStars);
  const validEmptyStars = Math.max(0, emptyStars);

  return (
    <div className="m-2.5 border border-gray-300 shadow-md rounded-lg p-3.5 w-[22rem] bg-white flex flex-col items-center justify-between h-[24rem] overflow-hidden">
      <img
        src={recipe.image || placeholderImage}
        alt={recipe.title}
        className="w-full h-52 rounded-lg"
        loading="lazy"
      />
      <h2 className={`${lato.className} font-bold p-1`}>{recipe.title}</h2>

      <div
        className="flex text-yellow-300"
        aria-label={`${fullStars + halfStar * 0.5} out of 5 stars`}
      >
        {[...Array(validFullStars)].map((_, index) => (
          <IoStarSharp key={`full-${index}`} aria-hidden="true" />
        ))}
        {halfStar > 0 && <IoStarHalfSharp key="half" aria-hidden="true" />}
        {[...Array(validEmptyStars)].map((_, index) => (
          <IoStarOutline key={`empty-${index}`} aria-hidden="true" />
        ))}
      </div>

      <p>
        Health Score <span className="text-rose-500">{recipe.healthScore}</span>
      </p>

      <div className="flex items-center mt-1">
        <FaRegClock className="mr-2" />
        <span>{recipe.readyInMinutes} minutes</span>
      </div>
      {/* Add more recipe details here */}
    </div>
  );
}
