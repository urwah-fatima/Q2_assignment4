// Import necessary modules
import React from "react";
import Image from "next/image";
import ProfilePic from "/public/images/herosec-img.png"

// Define the content for the hero section
const heroContent = {
  title: "Hi, I am John, Creative Technologist",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  image: "/images/herosec-image.png",
};

// Define the HeroSection component
const HeroSection = () => {
  return (
    // Main container for the hero section
    <div className="flex flex-row justify-between bg-bodyColor p-[200px]">
      {/* Left side content container */}
      <div className="w-[521px] h-[305px]">
        {/* Hero title */}
        <h1 className="w-[521px] h-[124px] font-heebo text-[40px] font-extrabold leading-[61px] tracking-[2px] text-left text-[#21243D]">
          {heroContent.title}
        </h1>
        {/* Hero description */}
        <p className="text-justify mt-[24px] mb-[24px]">{heroContent.description}</p>

        {/* Download Resume button */}
        <button className="font-heebo font-medium text-[18px] text-white bg-[#F98585] w-[205px] h-[50px] rounded-none drop-shadow-lg">
          Download Resume
        </button>
      </div>
      {/* Right side image container */}
      <div className="relative h-[300px] w-[500px]"> {/* Add `relative` here */}
        {/* Hero image */}
        <Image
          className="rounded-full"
          src={ProfilePic}
          alt="Picture of author"
          layout="fill" // Use 'fill' to make the image fill the container
          //objectFit="cover" // Adjust the objectFit property as needed
        />
      </div>
    </div>
  );
};

// Export the HeroSection component
export default HeroSection;
