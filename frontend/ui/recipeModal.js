"use client";

import { useRouter } from "next/navigation";

export default function RecipeModal({ children }) {
  const router = useRouter();
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      onClick={handleClose}
      className="lg:flex fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white  shadow-xl rounded-lg max-w-4xl m-4"
        style={{ maxHeight: "90vh" }}
      >
        {children}
      </div>
    </div>
  );
}
