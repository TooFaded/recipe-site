import React from "react";
import Image from "next/image";
import RootLayout from "../layout";
import NavbarComponent from "../../../ui/navbar";
import FooterComponent from "../../../ui/footer";
import { pacifico, inter } from "@/ui/fonts";

function About() {
  return (
    <RootLayout>
      <NavbarComponent />
      <div className="container mx-auto px-4 mb-[12rem]">
        <h1
          className={`${pacifico.className} text-4xl font-bold text-center my-6 mb-10 drop-shadow-md`}
        >
          About Us
        </h1>
        <div className="flex flex-wrap mx-10">
          <div className="w-full md:w-1/2 px-4 mb-8 animate-slideInFromLeft">
            <Image
              src="/images/about-yumify.png"
              alt="About Us"
              width={700}
              height={500}
              className="rounded-xl shadow-xl "
            />
          </div>
          <div className="w-full md:w-1/2 px-4 animate-slideInFromRight">
            <p className="text-2xl font-light">
              Welcome to Yumify, the ultimate destination for culinary
              enthusiasts! We are dedicated to sharing delicious recipes,
              cooking tips, and culinary wisdom with our community of food
              lovers.
            </p>
            <p className="text-2xl font-light my-4">
              Founded in 2024 by Melvin Torres, Yumify has grown into a
              comprehensive resource for anyone looking to improve their cooking
              skills or discover new and exciting dishes.
            </p>
            <p className="text-2xl font-light">
              We believe that cooking should be accessible and enjoyable for
              everyone. That's why our recipes range from quick and easy meals
              to elaborate and exotic dishes, ensuring there's something for
              every taste and skill level.
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </RootLayout>
  );
}

export default About;
