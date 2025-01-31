import { MdMailOutline } from "react-icons/md";

export const CTA = () => {
  return (
    <>
    <div className="fixed bottom-[30%] right-[-55px] rotate-270 laptop:rotate-0 laptop:right-0 laptop:bottom-8 bg-red/80 z-40 p-4 px-6 text-sm text-warm-white rounded-t-lg laptop:rounded-l-lg laptop:rounded-r-none hover:scale-110 laptop:origin-right cursor-pointer">
    <a href="mailto:ellen_lindstrom@hotmail.com" aria-label="Email me at ellen_lindstrom@hotmail.com" className="flex gap-2 items-center" >Kontakta mig <MdMailOutline className="rotate-90 laptop:rotate-0 laptop:w-6 laptop:h-6"/></a>
    </div>
    </>
  )
}

