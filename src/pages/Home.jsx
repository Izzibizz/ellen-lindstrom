import { useEffect, useRef } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { Loading } from "../components/Loading";
import { Hero } from "../components/Hero";
import { OmEllen } from "../components/OmEllen";
import { CTA } from "../components/CTA";
import { Galleri } from "../components/VideoComp";
import { Contact } from "../components/Contact";
import { Aktuellt } from "../components/Aktuellt";
import { SwiperComp } from "../components/SwiperComp";

export const Home = () => {
  const {
    loading,
    setShowHeaderLogo,
    showCTA,
    setShowCTA,
    scrollToContact,
    setScrollToContact,
  } = usePortfolioStore();
  const heroRef = useRef(null);
  const galleriRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToContact(false); // Reset the flag after scrolling
    }
  }, [scrollToContact, setScrollToContact]);

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
    <section className="animate-longFadeIn min-h-screen w-screen max-w-screen relative flex flex-col font-body gap-6 laptop:gap-12">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div ref={heroRef}>
            <Hero />
          </div>
          <SwiperComp />
          <OmEllen />
          <Aktuellt />
          <div ref={galleriRef}>
            <Galleri />
          </div>
          <div ref={contactRef} id="contact">
            <Contact />
          </div>
          {showCTA && <CTA />}
        </>
      )}
    </section>
  );
};
