import { Heebo } from 'next/font/google'

// Object containing the content for the Featured Works section
const featuredWorksContent = {
  smHead1: "Featured Works",
  lgHead2: "Designing Dashboards",
  p1: "2020",
  p2: "Dashboard",
  p3:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit" +
    "officia consequat duis enim velit mollit. Exercitation veniam consequat " +
    "sunt nostrud amet.",
};

// Functional component for rendering Featured Works content
const FeaturedWorksBoxes = () => {
  return (
    <>
      {/* Main container for the featured work item */}
      <div className="mr-6 ml-10">
        {/* Title of the featured work */}
        <h1 className="text-black font-semibold font-heebo text-lg">
          {featuredWorksContent.lgHead2}
        </h1>
        {/* Container for year and category */}
        <div className="flex justify-normal">
          {/* Year display with custom styling */}
          <span className="text-white font-bold font-heebo bg-heroButtonPink rounded-xl px-4 py-0">
            {featuredWorksContent.p1}</span>
          
          {/* Category display */}
          <h5 className="text-gray-700 ml-3">{featuredWorksContent.p2}</h5>
        </div>
        {/* Description of the featured work */}
        <p className="text-gray-700 font-heebo">{featuredWorksContent.p3}</p>
      </div>
    </>
  );
};

// Export the component for use in other parts of the application
export default FeaturedWorksBoxes;
