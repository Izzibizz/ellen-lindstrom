
/* import { useRef } from "react"; */
import { usePortfolioStore } from "../stores/usePortfolioStore"
import { Loading } from "../components/Loading"
import { Hero } from "../components/Hero"
import { OmEllen } from "../components/OmEllen"
import { CTA } from "../components/CTA"
import { SwiperComp } from "../components/SwiperComp"


export const Home = () => {
  const { loading } = usePortfolioStore()

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

  return (
    <section className="min-h-screen mb-20 w-screen max-w-screen relative flex flex-col font-body gap-6">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <SwiperComp />
            <OmEllen />
          <CTA />
        </>
      )}
    </section>
  );
};
