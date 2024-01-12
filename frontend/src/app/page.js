import RootLayout from "./layout";
import { pacifico, inter } from "@/app/ui/fonts";
import { Button } from "flowbite-react";
import Image from "next/image";
import NavbarComponent from "@/app/ui/navbar";
import FooterComponent from "@/app/ui/footer";

const Home = () => {
  return (
    <RootLayout>
      <NavbarComponent />
      {/* page content */}
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className={`${inter.className} font-medium antialiased text-5xl`}>
          Welcome to{" "}
          <span
            className={`${pacifico.className} font-medium antialiased text-5xl`}
          >
            Yumify
          </span>
          !
        </h1>
        <p
          className={`${inter.className} font-thin mx-4 my-4 text-base md:text-xl lg:mx-8 lg:my-8`}
        >
          Save your favorites, share your creations, and enjoy a world of
          flavors with Yumify – where your ingredients meet imagination!"
        </p>
        <Image
          src="/images/yumify-logo-removebg.png"
          alt="Yumify Logo"
          width={620}
          height={620}
          className="mt-[-60px]"
        />

        <Button
          gradientDuoTone="pinkToOrange"
          className={`${inter.className} antialiased font-bolder h-[4vh] `}
        >
          GET STARTED
        </Button>
      </div>
      <FooterComponent />
    </RootLayout>
  );
};

export default Home;
