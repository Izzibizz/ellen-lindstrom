import { MdMailOutline } from "react-icons/md";

export const Contact = () => {
  return (
    <section className="w-full bg-gradient-to-t from-red-600/100 to-red-400/80 p-6 py-40 text-warm-white ">
        <div className="w-11/12 laptop:w-full mx-auto flex flex-col gap-6 items-center">
      <h4 className="font-semibold text-2xl">Vill du kontakta Ellen?</h4>
      <a
          href="mailto:ellen_lindstrom@hotmail.com"
          aria-label="Email me at ellen_lindstrom@hotmail.com"
          className="flex gap-2 items-center font-light"
        >
          Ellen_lindstrom@gmail.com<MdMailOutline className="w-4 h-5 w-6 laptop:h-6" />
        </a>
      </div>
    </section>
  )
}

