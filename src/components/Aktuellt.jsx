export const Aktuellt = () => {
  return (
    <div className="flex flex-col  w-full laptop:w-8/12 mx-auto bg-gradient-to-t from-red-600/100 to-red-400/80 p-6 py-16 laptop:p-12 gap-10 items-center laptop:items-start text-warm-white">
      <h3 className=" text-2xl self-start pl-4 laptop:pl-0">Aktuellt</h3>
      <div className="flex flex-col w-11/12 mx-auto laptop:w-full laptop:flex-row gap-16 laptop:gap-18">
        <div className="flex flex-col  gap-6 laptop:w-1/2 laptop:flex-row">
          <a href="https://rockyhorror.se/" target="_blank" className="w-full">
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180388/kommande-Ellen-Lindstrom-Rocky-Horrows-Show-2025_b4k9u9.jpg"
              alt="aktuellt Rocky Horrors Show "
              className="w-full object-cover"
            />
          </a>
          <div className=" flex flex-col gap-4 laptop:w-2/3">
            <h4 className="text-lg font-semibold">Rocky Horror Show</h4>
            <p className="text-justify text-sm">
              {" "}
              Från sin legendariska premiär 1973 har The Rocky Horror Show tagit
              världen med storm och blivit en oförglömlig upplevelse för alla
              som vill ha något annorlunda och spännande.
            </p>
            <a href="https://rockyhorror.se/" target="_blank"><button className="cursor-pointer bg-gradient-to-t from-red-700/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs hover:scale-105 self-center tablet:self-start">Köp biljetter</button></a>
          </div>
        </div>
        <div className="flex flex-col gap-6 laptop:w-1/2 laptop:flex-row">
          <a href="https://evarydberg.se/" target="_blank" className="w-full">
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1738661505/Spanska-flugan-Ellen-Lindstrom-2025-sq_c4nqap.jpg"
              alt="aktuellt spanska flugan "
              className="w-full object-cover"
            />
          </a>
          <div className=" flex flex-col gap-4 laptop:w-2/3">
            <h4 className="text-lg font-semibold">Spanska Flugan</h4>
            <p className="text-justify text-sm">
              {" "}
              Spanska Flugan räknas som en av världens bästa komedier. Skriven
              av Arnold & Bach och bearbetad i en ny, fräsch version av Anders
              Aldgård, som också regisserar.
            </p>
            <a href="https://evarydberg.se/biljettbokning/" target="_blank"><button className="cursor-pointer bg-gradient-to-t from-red-700/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs hover:scale-105 self-center tablet:self-start">Köp biljetter</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};
