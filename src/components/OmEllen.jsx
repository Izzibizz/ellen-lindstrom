import { useRef, useEffect } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { CV } from "../components/CV"
import omEllen from "/Om-ellen.svg"

export const OmEllen = () => {

  const { scrollToCv, setScrollToCv, showMore, setShowMore } = usePortfolioStore()

  const topRef = useRef(null)
  const cvRef = useRef(null)

  const handleClick = () => {
    setShowMore(!showMore);
  
    setTimeout(() => {
      if (topRef.current) {
        const headerHeight = document.querySelector("header")?.offsetHeight || 100; 
        const yOffset = -headerHeight; 
        const y = topRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
  
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    if (scrollToCv && cvRef.current) {
      cvRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToCv(false); 
    }
  }, [])

  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto flex flex-col py-28 tablet:py-36 text-stone-700 gap-6 laptop:gap-16">
      <div className="flex flex-col laptop:flex-row gap-8 laptop:gap-16" ref={topRef}> 
      <img src={omEllen} alt="text sektion om Ellen" className="w-[180px] laptop:hidden"/>
        <img
          src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1746179179/Ellen-Lindstrom-musikalartist-portr%C3%A4tt_vsoqra.webp"
          alt="Ellen Lindström porträtt"
          className="w-full laptop:w-1/2 rounded-xl object-cover  drop-shadow-xl"
        />
        <div className="flex flex-col gap-4 self-end">
          <img src={omEllen} alt="text sektion om Ellen" className="w-[160px] hidden laptop:flex"/>
          <p className="text-justify">
            Ellen är musikal&shy;artist, dansare, sång&shy;erska och
            skåde&shy;spelerska utbildad vid Balett&shy;akademien i
            Stockholm, examen 2003. Helt nyut&shy;examinerad klev hon då rakt ut på
            samma scen som en av sina idoler – Petra Nielsen, i en av det årets
            stora musikal&shy;satsningar – Stars.
          </p>
          <p
            className={`hidden laptop:flex text-justify ${
              showMore ? "mb-15" : "mb-0"
            }`}
          >
            Året därpå blev hon upptäckt av Bill Goodson, koreograf (bl.a. till
            Michael Jackson, Diana Ross, Moulin Rouge i Paris samt, icke att
            förglömma, Diggi-Loo Diggi-Ley med Herreys) som tog henne till
            Italien och en gigantisk TV-&shy;produktion – lördags&shy;underhållning på Rai
            Uno med öppen sluttid och världs&shy;artister som gäster.
          </p>
          {!showMore && (
            <button
              className="flex self-end gap-2 items-center bg-gradient-to-t from-rose-800/100 to-red-600/80 cursor-pointer hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 mt-4"
              onClick={() => setShowMore(!showMore)}
            >
              Läs mer <SlArrowDown />
            </button>
          )}
        </div>
      </div>
      {showMore && (
        <div className="flex flex-col gap-12 animate-fadeIn"> 
          <div className="flex flex-col laptop:flex-row justify-between gap-6">
            <div className="flex flex-col gap-4 laptop:w-1/2 laptop:justify-end"> <p
            className={` laptop:hidden text-justify
            }`}
          >
            Året därpå blev hon upptäckt av Bill Goodson, koreograf (bl.a. till
            Michael Jackson, Diana Ross, Moulin Rouge i Paris samt, icke att
            förglömma, Diggi-Loo Diggi-Ley med Herreys) som tog henne till
            Italien och en gigantisk TV-&shy;produktion – lördags&shy;underhållning på Rai
            Uno med öppen sluttid och världs&shy;artister som gäster.
          </p>

            <p className="text-justify">Sedan dess har Ellen stått kvar på scenen. Ofta i stora musikaler såsom The Producers på Chinateatern och Spamalot på Oscars&shy;teatern. Senast sågs hon i succé&shy;musikalen Mitt om natten på Nöjesteatern i Malmö. Hon har spelat fars och sommarteater med Claes Malmberg och Eva Rydberg, krogshow med Magnus Uggla och medverkat i ett flertal revyer – bland annat Oscarsrevyn med Robert Gustafsson, Sanna Nielsen med flera. Ellen spelade i Magnus och Brasses återförening Muntergökarna på Chinateatern. Hon har också synts i svensk tv, bland annat som tävlande i lek&shy;programmet Doobidoo, i farsen Charley’s Tant samt som dansare i flera sammanhang.</p>
            <p className="text-justify">På senare år har Ellen också koreograferat en hel del, bl.a. Claes Malmbergs uppsättning av Jeppe på berget på Tjolöholms slotts sommarteater. Hon anlitas även som gäst&shy;lärare i repertoar, audition&shy;träning, theatre jazz m.m. på de stora utbildningarna (Balettakademien, Lunds dans och musikalgymnasium m.fl.).</p>
            <p className="text-justify">Sommaren 2025 står Ellen återigen på Eva Rydbergs nystartade scen Sundspärlan i Helsingborg, i farsen Spanska flugan. Och hösten 2025 ser vi henne i kult&shy;musikalen Rocky Horror Show som spelas på Nöjesteatern, Malmö.</p>
            </div>
            <img
              src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1745327990/Ellen-Lindstrom-musikalartist_xb1nex.jpg"
              alt="Ellen Lindström porträtt - musikalartist"
              className="laptop:w-5/12 laptop:h-[600px] object-cover  rounded-xl  drop-shadow-xl"
            />{" "}
          </div>
          <div ref={cvRef} id="cv">
          <CV />
          </div>
          <button
            className="flex gap-2 items-center bg-gradient-to-t  from-rose-800/100 to-red-600/80 cursor-pointer w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 self-center mt-4"
            onClick={() => handleClick()}
          >
            Läs mindre <SlArrowUp />
          </button>
        </div>
      )}
    </section>
  );
};
