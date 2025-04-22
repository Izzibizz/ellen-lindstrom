import aktuellt from "/aktuellt-vit.svg";

export const Aktuellt = () => {
  return (
    <section className="flex flex-col w-full bg-gradient-to-t from-red-400/100 to-red-600/80 pt-16 laptop:py-26 pb-24 gap-10 items-center laptop:items-start text-warm-white">
      <div className="flex flex-col w-10/12 mx-auto laptop:w-8/12 gap-10 ">
        <img
          src={aktuellt}
          alt="text sektion aktuellt"
          className="w-[180px] tablet:w-[200px] self-center tablet:self-start"
        />
        <div className="flex flex-col laptop:flex-row gap-16 laptop:gap-18">
          <div className="flex flex-col gap-6 laptop:w-1/2 laptop:flex-row">
            <a href="https://evarydberg.se/" target="_blank" className="w-full">
              <img
                src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1745327740/Spanska-flugan-Ellen-Lindstrom-2025_znmqbz.jpg"
                alt="aktuellt spanska flugan "
                className="w-full object-cover laptop:aspect-square laptop:object-top drop-shadow-xl"
              />
            </a>
            <div className=" flex flex-col gap-4 laptop:w-2/3">
              <h4 className="text-xl font-round">Spanska Flugan</h4>
              <p className="text-justify text-sm">
                {" "}
                Spanska Flugan räknas som en av världens bästa komedier. Skriven
                av Arnold & Bach och bearbetad i en ny, fräsch version av Anders
                Aldgård, som också regisserar.
              </p>
              <p>Premiär: 13 juni 2025</p>
              <a href="https://evarydberg.se/" target="_blank">
                <button className="cursor-pointer bg-gradient-to-t from-red-700/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs hover:scale-105 self-center tablet:self-start">
                  Köp biljetter
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col  gap-6 laptop:w-1/2 laptop:flex-row">
            <a
              href="https://rockyhorror.se/"
              target="_blank"
              className="w-full"
            >
              <img
                src="https://res.cloudinary.com/dbu0kqoee/image/upload/v1745327745/kommande-Ellen-Lindstrom-Rocky-Horrows-Show-2025_doqhvg.jpg"
                alt="aktuellt Rocky Horrors Show "
                className="w-full object-cover  drop-shadow-xl"
              />
            </a>
            <div className=" flex flex-col gap-4 laptop:w-2/3">
              <h4 className="text-xl font-round">Rocky Horror Show</h4>
              <p className="text-justify text-sm">
                {" "}
                Från sin legendariska premiär 1973 har The Rocky Horror Show
                tagit världen med storm och blivit en oförglömlig upplevelse för
                alla som vill ha något annorlunda och spännande.
              </p>
              <p>Premiär: 16 oktober 2025</p>
              <a href="https://rockyhorror.se/" target="_blank">
                <button className="cursor-pointer bg-gradient-to-t from-red-700/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs hover:scale-105 self-center tablet:self-start">
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
