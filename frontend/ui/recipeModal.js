"use client";

import { useRouter } from "next/navigation";

export default function RecipeModal({ children }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-gray-600 bg-opacity-75 h-full w-full flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white  shadow-xl rounded-lg max-w-4xl m-4 h-fit mx-4 my-8 overflow-hidden"
      >
        <h3
          onClick={handleClose}
          className="text-lg text-center p-2 font-semibold text-sky-600 hover:text-sky-700 transition duration-300 ease-in-out cursor-pointer"
        >
          ← Back to recipes
        </h3>
        <div className="overflow-y-auto max-h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
