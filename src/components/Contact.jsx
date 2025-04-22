import { MdMailOutline } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import kontakta from "/kontakta.svg"

export const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-t from-red-600/100 to-red-400/80 p-6 py-40 text-warm-white font-round">
        <div className="w-fit mx-auto flex flex-col gap-8 ">
     <img src={kontakta} alt="sektion för att kontakta Ellen" className="w-[350px]"/>
     <div className="w-fit mx-auto flex flex-col gap-3">
      <a
          href="mailto:ellen_lindstrom@hotmail.com"
          aria-label="Email me at ellen_lindstrom@hotmail.com"
          className="flex gap-2 items-center font-light hover:scale-105"
        >
          <MdMailOutline className=" h-6 w-6 laptop:h-8 laptop:w-8" /> Ellen_lindstrom@hotmail.com
        </a>
        <a
          href="https://www.instagram.com/ellenrebecka/"
          target="_blank"
          aria-label="Instagram link"
          className="flex gap-2 items-center font-light hover:scale-105"
        >
        <RiInstagramFill className="w-6 h-6 laptop:h-8 laptop:w-8 "/> Instagram @ellenrebecka
        </a>
        </div>
      </div>
    </section>
  )
}

