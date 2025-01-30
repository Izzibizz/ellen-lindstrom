import { useEffect, useState } from "react"
import { usePortfolioStore } from "../stores/usePortfolioStore"
import { Loading } from "../components/Loading"
import { SwiperComp } from "../components/SwiperComp"
import logo from "/ellen-lindstrom-logga-text-ljus.svg"

export const Home = () => {

  const [ isLaptop, setIsLaptop ] = useState(() => window.matchMedia("(min-width: 1025px)").matches);


  useEffect(() => {
    const updateScreenSize= () => {
      setIsLaptop(window.matchMedia("(min-width: 1025px)").matches);
    };
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [])
  

  const { loading } = usePortfolioStore()
  return (
    <section className="min-h-screen pb-20 w-screen max-w-screen relative flex flex-col ">
    {loading ? (
      <Loading />
    ) : (
      <>
    <img
      src={isLaptop ? "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738240325/Ellen-Lindstrom-musikalartist-oscarsrevyn-rosa-2-lila_wbjjwv.jpg" : "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738240360/Ellen-Lindstrom-musikalartist-oscarsrevyn-rosa-2-lila-mobil_gisjke.jpg"}
      alt="Ellen Lindstrom musikal artist"
      className={` z-0 opacity-100 absolute w-screen max-w-full top-0 left-0 h-[90vh] max-h-full object-cover animate-zoomInOut`}
    />
    <div className="absolute z-30 top-[8%] left-6 tablet:left-[10%] laptop:top-[10%] laptop:left-[10%]">
    <img src={logo} alt="logo Ellen Lindstrom name" className="h-[80px] tablet:h-[130px] laptop:h-[200px] "/>
    <h3 className="font-free text-white text-2xl tablet:text-3xl ml-10 laptop:ml-20">Musikalartist</h3>
    </div>
    <div className="bg-warm-white mt-[90vh] py-4">
      <SwiperComp />
    </div>
    </>
    )}
    </section>
  )
}

