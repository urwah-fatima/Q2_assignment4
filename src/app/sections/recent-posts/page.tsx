// Import necessary modules
import React from "react";
import Image from "next/image";
import { Heebo } from 'next/font/google'

// Define the content for the post
const postContent = {
  title: "Making a design system from scratch",
  text1: "12 Feb 2020 ",
  text2: "Design, Pattern",
  details:
    "Amet minim mollit non deserunt ullamco est sit aliqua " +
    "dolor do amet sint. Velit officia consequat duis enim" +
    "velit mollit.Exercitation veniam consequat sunt " +
    "nostrud amet. ",
};

// Define the RecentPost component
const recentPost = () => {
  return (
    <>
      {/* Main container for recent posts section */}
      <div className="bg-recentPostColor px-[200px] py-[30px]">
        {/* Header row with "Recent Post" and "View all" */}
        <div className="flex flex-row justify-between py-[50px]">
          <div className="text-lg font-heebo">Recent Post</div>
          <div className="text-heroButtonPink text-lg font-heebo">View all</div>
        </div>
        {/* Container for post cards */}
        <div className="flex flex-row justify-between">
          {/* First post card */}
          <div className="bg-white p-[70px]">
            <h1 className="font-extrabold text-xl font-heebo">{postContent.title}</h1>
            <h5 className="pt-5 text-gray-700 font-heebo">{postContent.text1} {"  "}{"|"}{"  "}{postContent.text2}</h5>
            <h5 className="text-left pt-5 text-gray-700 font-heebo">{postContent.details}</h5>
          </div>
          {/* Second post card (identical to the first) */}
          <div className="bg-white p-[70px] ml-[20px]">
            <h1 className="font-extrabold text-xl font-heebo">{postContent.title}</h1>
            <h5 className="pt-5 text-gray-700 font-heebo">{postContent.text1}{"  "}{"|"}{"  "}{postContent.text2}</h5>
            <h5 className="text-left pt-5 text-gray-700 font-heebo">{postContent.details}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the RecentPost component
export default recentPost;