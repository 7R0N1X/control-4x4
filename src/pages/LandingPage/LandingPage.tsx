import { Background } from "@components/LandingPage/Background/Background";
import { Hero } from "@sections/LandingPage/Hero/Hero";
import { ShowProduct } from "@sections/LandingPage/ShowProduct/ShowProduct";
import { Steps } from "@sections/LandingPage/Steps/Steps";
import { Footer } from "@components/LandingPage/Footer/Footer";

export const LandingPage = () => {
  return (
    <>
      <Background />
      <Hero />
      <ShowProduct />
      <Steps />
      <Footer />
    </>
  );
};
