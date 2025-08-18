import BenefitSection from "@/components/BenefitSection";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="./output.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <Navbar />
      <Header />
      <CitiesSection />
      <BenefitSection />
      <FreshSpaceSection />
    </>
  );
}
