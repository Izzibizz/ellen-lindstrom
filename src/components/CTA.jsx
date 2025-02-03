import { MdMailOutline } from "react-icons/md";

export const CTA = () => {
  return (
    <>
    <div className="animate-fadeIn fixed bottom-0 right-0 laptop:right-0 laptop:bottom-8 bg-gradient-to-t from-red-500/100 to-rose-300/80  hover:bg-red/100 z-40 p-3 px-6 text-sm text-warm-white rounded-t-xl laptop:rounded-l-xl laptop:rounded-r-none hover:scale-110 laptop:origin-right cursor-pointer">
    <a href="mailto:ellen_lindstrom@hotmail.com" aria-label="Email me at ellen_lindstrom@hotmail.com" className="flex gap-2 items-center font-light" >Kontakta mig <MdMailOutline className="w-4 h-5 w-6 laptop:h-6"/></a>
    </div>
    </>
  )
}

