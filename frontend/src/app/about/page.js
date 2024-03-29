import React from "react";
import Image from "next/image";

import NavbarComponent from "../../../ui/navbar";
import FooterComponent from "../../../ui/footer";
import { pacifico, inter } from "@/ui/fonts";

function About() {
  return (
    <>
      <NavbarComponent />
      <div className="container mx-auto px-4 mb-[12rem]">
        <h1
          className={`${pacifico.className} text-4xl font-bold text-center my-6 mb-10 drop-shadow-md`}
        >
          About Us
        </h1>
        <div className="flex flex-wrap mx-10">
          <div className="w-full md:w-1/2 sm:px-6 px-2 mb-8 animate-slideInFromLeft">
            <Image
              src="/images/about-yumify.png"
              alt="About Us"
              width={800}
              height={600}
              className="rounded-xl shadow-xl"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 sm:px-4 px-0 animate-slideInFromRight">
            <p className="text-sm sm:text-2xl font-light">
              Welcome to Yumify, the ultimate destination for culinary
              enthusiasts! We are dedicated to sharing delicious recipes,
              cooking tips, and culinary wisdom with our community of food
              lovers.
            </p>
            <p className="text-sm sm:text-2xl font-light my-4">
              Founded in 2024 by Melvin Torres, Yumify has grown into a
              comprehensive resource for anyone looking to improve their cooking
              skills or discover new and exciting dishes.
            </p>
            <p className="text-sm sm:text-2xl font-light">
              We believe that cooking should be accessible and enjoyable for
              everyone. That is why our recipes range from quick and easy meals
              to elaborate and exotic dishes, ensuring there is something for
              every taste and skill level.
            </p>
          </div>
          <div className="mt-10 mb-[-6rem] w-full flex justify-center items-start sm:items-center">
            <Image
              src="/images/yumify-mascot-image.png"
              alt="Yumify Mascot"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default About;
