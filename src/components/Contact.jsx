import { MdMailOutline } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import kontakta from "/kontakta.svg"

export const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-t from-red-600/100 to-red-400/80 p-6 py-40 text-warm-white ">
        <div className="w-11/12 laptop:w-full mx-auto flex flex-col gap-6 items-center">
     <img src={kontakta} alt="sektion för att kontakta Ellen" className="w-[350px]"/>
      <a
          href="mailto:ellen_lindstrom@hotmail.com"
          aria-label="Email me at ellen_lindstrom@hotmail.com"
          className="flex gap-2 items-center font-light"
        >
          <MdMailOutline className="w-4 h-5 w-6 laptop:h-6" /> Ellen_lindstrom@hotmail.com
        </a>
        <a
          href="https://www.instagram.com/ellenrebecka/"
          target="_blank"
          aria-label="Instagram link"
          className="flex gap-2 items-center font-light"
        >
        <RiInstagramFill /> Instagram
        </a>
      </div>
    </section>
  )
}

