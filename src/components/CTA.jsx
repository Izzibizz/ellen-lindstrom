import { MdMailOutline } from "react-icons/md";

export const CTA = () => {
  return (
    <>
    <div className="fixed bottom-[35%] right-[-55px] rotate-270 laptop:rotate-0 laptop:right-8 laptop:bottom-8 bg-red z-40 p-2 px-4 text-sm text-warm-white laptop:rounded hover:scale-110 cursor-pointer">
    <a href="mailto:ellen_lindstrom@hotmail.com" aria-label="Email me at ellen_lindstrom@hotmail.com" className="flex gap-2 items-center" >Kontakta mig <MdMailOutline className="laptop:w-6 laptop:h-6"/></a>
    </div>
    </>
  )
}

