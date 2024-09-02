import { Inter } from "next/font/google";
import HomeBanner from "./components/HomeBanner";
import AboutUs from "./components/AboutUs";
import Facts from "./components/Facts";
import Products from "./components/Products";
import Service from "./components/Service";
import Team from "./components/Team";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <>
     <HomeBanner/>
     <AboutUs/>
     <Facts/>
     <Products/>
     <Service/>
     <Team/>
     <Offer/>
     <Testimonial/>
    </>
  );
}
