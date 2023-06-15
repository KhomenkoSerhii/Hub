"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find your next car with our <br /> easy to use search
        </h1>
        <p className="hero__subtitle">
          Search for cars by location, brand, model, price, year and more
        </p>
        <CustomButton
          btnType="button"
          title="Search cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 w-60 h-12"
          handleClick={handleScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
            <div className="hero__image-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
