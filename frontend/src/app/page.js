import RootLayout from "./layout";
import { pacifico, inter, lato } from "@/ui/fonts";
import { Button } from "flowbite-react";
import Link from "next/link";
import NavbarComponent from "@/ui/navbar";
import FooterComponent from "@/ui/footer";

const Home = () => {
  return (
    <RootLayout>
      <NavbarComponent className="z-10" />

      <div
        style={{ backgroundImage: "url('/images/yumify-hero-image.png')" }}
        className=" relative h-screen bg-cover bg-center opacity-95"
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-screen">
          <h1
            className={`${lato.className} font-medium antialiased md:text-7xl text-5xl text-white text-center`}
          >
            Welcome to{" "}
            <span
              className={`${pacifico.className} font-medium antialiased md:text-7xl text-white`}
            >
              Yumify
            </span>
            !
          </h1>
          <p
            className={`${lato.className} font-light text-center px-10 my-4 sm:text-base text-sm md:text-xl lg:mx-6 lg:my-8 text-white`}
          >
            Save your favorites, share your creations, and enjoy a world of
            <br className="sm:block hidden" />
            flavors with Yumify – where your ingredients meet imagination!"
          </p>

          <Link href="/recipes">
            <Button
              gradientDuoTone="pinkToOrange"
              className={`${inter.className} antialiased font-bold h-[4vh] shadow-lg transition ease-in-out duration-400 hover:-translate-y-1 hover:scale-110   `}
            >
              GET STARTED
            </Button>
          </Link>
        </div>
      </div>
      <FooterComponent />
    </RootLayout>
  );
};

export default Home;
