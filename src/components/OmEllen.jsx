import { NavLink } from "react-router-dom"

export const OmEllen = () => {
  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto flex flex-col laptop:flex-row gap-8 laptop:gap-16 py-20 text-stone-700">
    <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180385/Ellen-Lindstrom-musikalartist_kmv6ge.jpg" alt="Ellen Lindström porträtt" className="w-full laptop:w-1/2 rounded-xl"/>
    <div className="flex flex-col gap-2 self-end">
    <h4 className="text-2xl">Om Ellen</h4>
    <p className="text-justify">Ellen är verksam som musikal&shy;artist, dansare, sång&shy;erska och skåde&shy;spelerska sedan hon gick ut Balett&shy;akademien i Stockholm år 2003. Helt nyut&shy;examinerad klev hon då rakt ut på samma scen som en av sina idoler – Petra Nielsen, i en av det årets stora musikal&shy;satsningar – Stars.</p>
    <p className="hidden laptop:flex text-justify">Året därpå blev hon upptäckt av Bill Goodson, koreograf (bl.a. till Michael Jackson, Diana Ross, Moulin Rouge i Paris samt, icke att förglömma, Digg-Loo Diggi-Ley med Herreys) som tog henne till Italien och en gigantisk TV-produktion – lördagsunderhållning på Rai Uno med öppen sluttid och världsartister som gäster.</p>
    <NavLink to="/om-ellen" className=" bg-gradient-to-t from-red-600/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 self-center tablet:self-start mt-4">
    Läs mer
    </NavLink>
  </div>
  </section>
  )
}
