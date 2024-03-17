"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-lg text-center p-2 font-semibold text-sky-600 hover:text-sky-700 transition duration-300 ease-in-out cursor-pointer"
    >
      ← Back
    </button>
  );
}
