
import { MdOutlineArrowOutward } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="absolute bottom-0 right-0 w-full flex justify-between h-10 p-4 laptop:px-10 z-20 text-rose-300 font-body ">

            <a
              href="http://izabellind.com"
              className="relative flex gap-2 items-center text-[8px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-warm-white after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
            > <MdOutlineArrowOutward />
              Frontend development 2025 | Izabel Lind
            </a>
    <p className="text-[8px] font-body hidden laptop:block">© Ellen Lindström 2025 | All Rights Reserved</p>
    <p className="text-[8px] font-body laptop:hidden">© Ellen Lindström 2025</p>
    </footer>
  );
};
