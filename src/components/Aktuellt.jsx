import aktuellt from "/aktuellt-vit.svg";

export const Aktuellt = () => {
  return (
    <section className="flex flex-col w-full bg-gradient-to-t from-rose-700/100 to-red-600/80 pt-16 laptop:py-26 pb-24 gap-10 items-center laptop:items-start text-warm-white">
      <div className="flex flex-col w-10/12 mx-auto laptop:w-8/12 gap-10 ">
        <img
          src={aktuellt}
          alt="text sektion aktuellt"
          className="w-[180px] tablet:w-[200px] self-center tablet:self-start"
        />
        <div className="flex flex-col laptop:flex-row gap-16 laptop:gap-18">
          <div className="flex flex-col gap-6 laptop:w-1/2 laptop:flex-row">
            <a href="https://fredriksdalsteatern.se/om-f%C3%B6rest%C3%A4llningen" target="_blank" className="w-full">
              <img
                src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1774868987/hjalten-fran-oresund-ellen-lindstrom-2026_plwwmk.png"
                alt="aktuellt Hjälten från Öresund"
                className="w-full object-cover laptop:aspect-square laptop:object-top drop-shadow-xl"
              />
            </a>
            <div className=" flex flex-col gap-4 laptop:w-2/3">
              <h4 className="text-2xl font-round">Hjälten från Öresund</h4>
              <p className="">
                {" "}
                En hejdundrande musikalisk sommarkomedi – Hjälten från Öresund – av Arnold & Bach i nybearbetning och regi av Anders Aldgård.
                Spelperiod: 12 juni – 16 augusti 2026
              </p>
              <p>Premiär: 12 juni 2026</p>
              <a href="https://nortic.se/ticket/event/72210" target="_blank">
                <button className="cursor-pointer bg-warm-white hover:bg-rose-600/100 hover:border hover:border-warm-white hover:text-warm-white w-fit rounded-2xl p-2 px-3 text-red-800 hover:scale-105 self-center tablet:self-start">
                  Köp biljetter
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col  gap-6 laptop:w-1/2 laptop:flex-row">
            <a
              href="https://spamalot.se/"
              target="_blank"
              className="w-full"
            >
              <img
                src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1774867770/Monty-pythons-spamalot-ellen-lindstrom-2026_xzj5zo.jpg"
                alt="aktuellt Monty Pythons Spamalot"
                className="w-full object-cover  drop-shadow-xl"
              />
            </a>
            <div className=" flex flex-col gap-4 laptop:w-2/3">
              <h4 className="text-2xl font-round">Monty Pythons Spamalot</h4>
              <p className="">
                {" "}
                Spamalot – en humoristisk musikal och kärleksfull rip-off av filmen Monty Python and the Holy Grail (Monty Pythons galna värld). Spelperiod 25 september - 6 december 2026.
              </p>
              <p>Premiär: 25 september 2026</p>
              <a href="https://www.juliusbiljettservice.se/events/1410" target="_blank">
                <button className="cursor-pointer bg-warm-white hover:bg-rose-600/100 hover:border hover:border-warm-white hover:text-warm-white w-fit rounded-2xl p-2 px-3 text-red-800 hover:scale-105 self-center tablet:self-start">
                  Köp biljetter
                </button>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
