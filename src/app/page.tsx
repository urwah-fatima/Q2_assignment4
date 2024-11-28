import Navbar from "./component/Navbar";
import HeroSection from "./sections/hero-section/page";
import RecentPost from "./sections/recent-posts/page";
import FeaturedWorks from "./sections/featured-works/page";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <div className="max-w-screen"><Navbar /></div>
    <div className="max-w-screen"><HeroSection /></div>
    <div className="max-w-screen"><RecentPost /></div>
    <div className="max-w-screen"><FeaturedWorks /></div>
    <div className="max-w-screen"><Footer /></div>
    </>
  );
};