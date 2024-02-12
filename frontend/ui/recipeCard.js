import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { lato } from "@/ui/fonts";

const placeholderImage = "/images/image-placeholder.png";

function calculateStars(score) {
  const rating = (score / 100) * 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return { fullStars, halfStar, emptyStars };
}

export default function RecipeCard({ recipe }) {
  const { fullStars, halfStar, emptyStars } = calculateStars(
    recipe.spoonacularScore
  );
  return (
    <div className="m-2.5 border border-gray-300 shadow-md rounded-lg p-3.5 w-72 bg-white flex flex-col items-center justify-between h-[24rem] overflow-hidden">
      <img
        src={recipe.image || placeholderImage}
        alt={recipe.title}
        className="w-full h-52 rounded-lg"
      />
      <h2 className={`${lato.className} font-bold p-1`}>{recipe.title}</h2>
      <div className="flex text-yellow-300">
        {[...Array(fullStars)].map((_, index) => (
          <IoStarSharp key={`full-${index}`} />
        ))}
        {halfStar > 0 && <IoStarHalfSharp key="half" />}
        {[...Array(emptyStars)].map((_, index) => (
          <IoStarOutline key={`empty-${index}`} />
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
