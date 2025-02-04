import { useState, useRef } from "react";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { CV } from "../components/CV"

export const OmEllen = () => {
  const [showMore, setShowMore] = useState(false);

  const topRef = useRef(null)

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

  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto flex flex-col py-20 text-stone-700 gap-6 laptop:gap-16">
      <div className="flex flex-col laptop:flex-row gap-8 laptop:gap-16" ref={topRef}> 
        <img
          src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180385/Ellen-Lindstrom-musikalartist_kmv6ge.jpg"
          alt="Ellen Lindström porträtt"
          className="w-full laptop:w-1/2 rounded-xl object-cover"
        />
        <div className="flex flex-col gap-2 self-end">
          <h4 className="text-2xl text-red">Om Ellen</h4>
          <p className="text-justify">
            Ellen är verksam som musikal&shy;artist, dansare, sång&shy;erska och
            skåde&shy;spelerska sedan hon gick ut Balett&shy;akademien i
            Stockholm år 2003. Helt nyut&shy;examinerad klev hon då rakt ut på
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
            förglömma, Digg-Loo Diggi-Ley med Herreys) som tog henne till
            Italien och en gigantisk TV-produktion – lördagsunderhållning på Rai
            Uno med öppen sluttid och världsartister som gäster.
          </p>
          {!showMore && (
            <button
              className="flex gap-2 items-center bg-gradient-to-t from-red-600/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 self-center tablet:self-start mt-4"
              onClick={() => setShowMore(!showMore)}
            >
              Läs mer <SlArrowDown />
            </button>
          )}
        </div>
      </div>
      {showMore && (
        <div className="flex flex-col gap-6 animate-fadeIn"> 
          <div className="flex flex-col laptop:flex-row justify-between gap-6">
            <div className="flex flex-col gap-4 laptop:w-1/2">
            <p className="text-justify">Sedan dess har Ellen stått kvar på scenen. Ofta i stora musikaler såsom The Producers på Chinateatern och Spamalot på Oscarsteatern. Senast sågs hon i succémusikalen Mitt om natten på Nöjesteatern i Malmö. Hon har spelat fars och sommarteater med Claes Malmberg och Eva Rydberg, krogshow med Magnus Uggla och medverkat i ett flertal revyer – bland annat Oscarsrevyn med Robert Gustafsson, Sanna Nielsen med flera. Ellen spelade i Magnus och Brasses återförening Muntergökarna på Chinateatern. Hon har också synts i svensk tv, bland annat som tävlande i lekprogrammet Doobidoo, i farsen Charley’s Tant samt som dansare i flera sammanhang.</p>
            <p className="text-justify">På senare år har Ellen också koreograferat en hel del, bl.a. Claes Malmbergs uppsättning av Jeppe på berget på Tjolöholms slotts sommarteater. Hon anlitas även som gästlärare i repertoar, auditionträning, theatre jazz m.m. på de stora utbildningarna (Balettakademien, Lunds dans och musikalgymnasium m.fl.).</p>
            <p className="text-justify">Sommaren 2025 står Ellen återigen på Eva Rydbergs nystartade scen Sundspärlan i Helsingborg, i farsen Spanska flugan. Och hösten 2025 ser vi henne i kultmusikalen Rocky Horror Show som spelas på Nöjesteatern, Malmö.</p>
            </div>
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738657715/Ellen-Lindstrom-musikalartist_uzqc2k.jpg"
              alt="Ellen Lindström porträtt - musikalartist"
              className="laptop:w-1/3 object-cover  rounded-xl"
            />{" "}
          </div>
          <CV />
          <button
            className="flex gap-2 items-center bg-gradient-to-t from-red-600/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 self-center mt-4"
            onClick={() => handleClick()}
          >
            Läs mindre <SlArrowUp />
          </button>
        </div>
      )}
    </section>
  );
};
