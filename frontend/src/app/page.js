import Layout from "./layout";
import { pacifico, inter } from "@/app/ui/fonts";
import NavbarComponent from "@/app/ui/navbar";
import FooterComponent from "@/app/ui/footer";
import { Button } from "flowbite-react";
import Image from "next/image";

const Page = () => {
  return (
    <Layout>
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
        <Image
          src="/images/yumify-logo-removebg.png"
          alt="Yumify Logo"
          width={420}
          height={420}
          className="mb-[-60px]"
        />
        <p
          className={`${inter.className} font-normal mx-4 my-6 text-base md:text-xl lg:mx-8 lg:my-8`}
        >
          Discover recipes that cater to your taste and skill level. Our unique
          feature allows you to enter ingredients from your fridge, and Yumify
          suggests recipes to match what you have on hand. Save your favorites,
          share your creations, and enjoy a world of flavors with Yumify – where
          your ingredients meet imagination!"
        </p>
        <Button
          gradientDuoTone="pinkToOrange"
          className={`${inter.className}antialiased font-bold h-[6vh] `}
        >
          Get Started
        </Button>
      </div>
      <FooterComponent />
    </Layout>
  );
};

export default Page;
