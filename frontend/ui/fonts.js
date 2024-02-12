import { Inter, Pacifico, Lato } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
