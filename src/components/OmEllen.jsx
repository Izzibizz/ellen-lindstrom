import { NavLink } from "react-router-dom"
import info from "../data/omEllen.json"

export const OmEllen = () => {
  return (
    <section className="w-9/12 laptop:w-8/12 mx-auto flex flex-col laptop:flex-row gap-8 py-20">
    <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180385/Ellen-Lindstrom-musikalartist_kmv6ge.jpg" alt="Ellen Lindström porträtt" className="w-full laptop:w-1/2 rounded-xl"/>
    <div className="flex flex-col gap-2">
    <h4 className="text-xl">Om Ellen</h4>
    <p className="text-justify">{info[0].introtext}</p>
    <NavLink to="/om-ellen" className=" bg-gradient-to-t from-red-500/80 to-rose-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105">
    Läs mer
    </NavLink>
  </div>
  </section>
  )
}
