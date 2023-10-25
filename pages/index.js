// import Testimonial from "../components/affiliate/Testimonial";
import Filter from "../components/common/Filter";
import Stape from "../components/common/Stape";
import VideoPopup from "../components/common/VideoPopup";
import AllProducts from "../components/home/AllProducts";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Hero from "../components/home/Hero";
import Market from "../components/home/Market";
import Numbers from "../components/home/Numbers";
import SmartInvestor from "../components/home/SmartInvestor";
import TestimonialSlider from "../components/sliders/TestimonialSlider";
import AboutCEE from "../components/home/AboutCEE";
import LatestPost from "../components/singleBlog/LatestPost";



export default function Home() {
  return (
    <>
      {/* Hero start here */}
      <Hero />

      {/* Filter start here */}
      <Filter />

      {/* Featured Properties start here */}
      <FeaturedProperties />

      {/* All Products start here */}
      {/* <AllProducts /> */}

      {/* Smart Investor start here */}
      {/* <SmartInvestor /> */}

      {/* about CEEtokenized */}
      <AboutCEE />

      {/* Stape start here */}
      {/* <Stape bg={true} /> */}

      {/* Video Popup start here */}
      {/* <VideoPopup /> */}

      {/* Numbers start here */}
      {/* <Numbers /> */}

      {/* Testimonial Slider start here */}
      {/* <TestimonialSlider /> */}

      {/* Blogs are here */}
      <LatestPost />
      

      {/* Market start here */}
      {/* <Market /> */}
    </>
  );
}
