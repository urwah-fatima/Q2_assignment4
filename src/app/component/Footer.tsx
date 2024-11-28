import React from "react";
import Image from "next/image";

// Object containing paths to social media icons
const footerImages = {
  fb: "/images/fb.svg",
  twitter: "/images/twitter.svg",
  instagram: "/images/insta.svg",
  linkedin: "/images/linkedin.svg",
};

// Footer component
const Footer = () => {
  return (
    // Main footer container
    <div className="bg-bodyColor px-[200px] py-[30px]">
      {/* Social media icons container */}
      <div className="flex flex-row justify-center gap-5">
        {/* Facebook icon */}
        <div className="relative w-20 h-20">
          <Image
            src={footerImages.fb}
            alt="Facebook"
            layout="fill" // Ensure the image fills its container
            objectFit="contain" // Maintain aspect ratio
          />
        </div>
        {/* Twitter icon */}
        <div className="relative w-20 h-20">
          <Image
            src={footerImages.twitter}
            alt="Twitter"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Instagram icon */}
        <div className="relative w-20 h-20">
          <Image
            src={footerImages.instagram}
            alt="Instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* LinkedIn icon */}
        <div className="relative w-20 h-20">
          <Image
            src={footerImages.linkedin}
            alt="LinkedIn"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      {/* Copyright text container */}
      <div>
        <h1 className="flex flex-row font-bold justify-center pt-4">
          Copyright © 2020 All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
