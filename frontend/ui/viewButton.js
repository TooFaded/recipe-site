"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ViewButton({ recipeId }) {
  const router = useRouter();

  const handleOnClick = () => {
    router.replace(`/recipes/${recipeId}/instructions`);
  };

  return (
    <div className="mt-2">
      <h1
        onClick={handleOnClick}
        className="text-lg text-center p-2 font-semibold text-sky-600 hover:text-sky-700 cursor-pointer"
      >
        {/* {isFetching ? "Fetching Instructions..." : "View Instructions"} */}
        View Instructions
      </h1>
    </div>
  );
}
