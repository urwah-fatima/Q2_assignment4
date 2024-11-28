import React from "react";
import Image from "next/image";
import FeaturedWorksBoxes from "./ContentBoxes";

// Object containing paths to featured work images
const featuredWorksImages = {
  img1: "/images/featuredimgs1.png",
  img2: "/images/featuredimgs2.png",
  img3: "/images/featuredimgs3.png",
};

// FeaturedWorks component to display a list of featured works
const FeaturedWorks = () => {
  return (
    <>
      {/* Main container for featured works */}
      <div className="flex flex-col justify-between bg-bodyColor p-[200px] space-y-10">
        {/* First featured work item */}
        <div className="flex flex-row items-center p-5">
          {/* Featured work image */}
          <div className="relative w-[300px] h-[200px]"> {/* Set dimensions for the image */}
            <Image
              src={featuredWorksImages.img1}
              alt="Featured Image 1"
              layout="fill" // Make the image fill its parent container
              objectFit="cover" // Adjust how the image fits
              className="rounded-md" // Optional: Add styling
            />
          </div>
          {/* Content box for the featured work */}
          <FeaturedWorksBoxes />
        </div>

        {/* Second featured work item */}
        <div className="flex flex-row items-center p-5">
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={featuredWorksImages.img2}
              alt="Featured Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <FeaturedWorksBoxes />
        </div>

        {/* Third featured work item */}
        <div className="flex flex-row items-center p-5">
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={featuredWorksImages.img3}
              alt="Featured Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <FeaturedWorksBoxes />
        </div>
      </div>
    </>
  );
};

export default FeaturedWorks;
