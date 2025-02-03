
import { useEffect, useRef } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore"
import { Loading } from "../components/Loading"
import { Hero } from "../components/Hero"
import { OmEllen } from "../components/OmEllen"
import { CTA } from "../components/CTA"
import { SwiperComp } from "../components/SwiperComp"


export const Home = () => {
  const { loading, showHeaderLogo, setShowHeaderLogo } = usePortfolioStore()
  const heroRef = useRef(null);


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
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        // Show header logo when scrolled past Hero, hide otherwise
        if (scrollPosition > heroHeight) {
          setShowHeaderLogo(true);
        } else {
          setShowHeaderLogo(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ensure correct state on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setShowHeaderLogo(true); // Set to true when unmounting
    };
  }, [setShowHeaderLogo]);

  useEffect(() => {
    setShowHeaderLogo(false); // Reset to false when mounting

    return () => {
      setShowHeaderLogo(true); // Ensure true when unmounting (navigating away)
    };
  }, [setShowHeaderLogo]);

  return (
    <section className="min-h-screen mb-20 w-screen max-w-screen relative flex flex-col font-body gap-6">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div ref={heroRef}>
            <Hero />
          </div>
          <SwiperComp />
            <OmEllen />
          <CTA />
        </>
      )}
    </section>
  );
};
