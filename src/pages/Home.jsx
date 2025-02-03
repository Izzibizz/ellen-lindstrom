import { useEffect, useRef } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { Loading } from "../components/Loading";
import { Hero } from "../components/Hero";
import { OmEllen } from "../components/OmEllen";
import { CTA } from "../components/CTA";
import { Contact } from "../components/Contact";
import { SwiperComp } from "../components/SwiperComp";

export const Home = () => {
  const { loading, setShowHeaderLogo, showCTA, setShowCTA } =
    usePortfolioStore();
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  /*   const omEllenRef = useRef(null);

  const scrollToOmEllen = () => {
    if (omEllenRef.current) {
      const elementPosition = omEllenRef.current.offsetTop; // Position of OmEllen
      const offset = 1000; 
      window.scrollTo({
        top: elementPosition + offset,
        behavior: "smooth",
      });
    }
  }; */


useEffect(() => {
  const isLaptop = window.innerWidth >= 1024;

  // Set initial state based on screen width
  setShowCTA(isLaptop);
  setShowHeaderLogo(false);

  const handleScroll = () => {
    if (!heroRef.current || !contactRef.current) return;

    const heroHeight = heroRef.current.offsetHeight / 3;
    const contactTop = contactRef.current.offsetTop;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Update logic for mobile only
    if (!isLaptop) {
      setShowCTA(scrollPosition > heroHeight);
    }

    // Update header logo visibility for all screen sizes
    setShowHeaderLogo(scrollPosition > heroHeight);

    // Hide CTA when reaching the Contact section (for all screen sizes)
    if (scrollPosition + windowHeight >= contactTop) {
      setShowCTA(false);
    } else if (isLaptop) {
      // Re-enable CTA when scrolling above contact on laptops
      setShowCTA(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  
  useEffect(() => {
    setShowHeaderLogo(false); // Reset to false when mounting

    return () => {
      setShowHeaderLogo(true); // Ensure true when unmounting (navigating away)
    };
  }, [setShowHeaderLogo]);

  return (
    <section className="animate-longFadeIn min-h-screen mb-20 w-screen max-w-screen relative flex flex-col font-body gap-6 laptop:gap-12">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div ref={heroRef}>
            <Hero />
          </div>
          <SwiperComp />
          <OmEllen />
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180402/Ellen-Lindstrom-Oscarsrevyn-2017-Lorensbergsteatern_tskwtj.jpg"
            alt="Ellen Lindstrom"
            className=" aspect-[16/9] laptop:aspect-[16/4] object-cover"
          />
          <div ref={contactRef}>
            <Contact />
          </div>
          {showCTA && <CTA />}
        </>
      )}
    </section>
  );
};
