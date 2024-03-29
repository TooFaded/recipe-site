"use client";

import { Spinner } from "flowbite-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <Spinner color="pink" aria-label="Loading" size="xl" />
    </div>
  );
}
