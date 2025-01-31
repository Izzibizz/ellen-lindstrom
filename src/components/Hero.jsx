
import { useEffect, useState } from "react"
import logo from "/ellen-lindstrom-logga-text-rod.svg"

export const Hero = () => {
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


  return (
    <div className="h-[70vh] ">
          <img
      src={isLaptop ? "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738250531/Ellen-Lindstrom-musikalartist-oscarsrevyn-rosa-2-white.desk_ef9az1.jpg" : "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738251277/Ellen-Lindstrom-musikalartist-oscarsrevyn-rosa-2-white-mobile_rdma6g.jpg"}
      alt="Ellen Lindstrom musikal artist"
      className={` z-0 opacity-30 absolute w-screen max-w-full top-0 left-0 h-[80vh] max-h-screen object-cover animate-zoomInOut`}
    />
    <div className="absolute z-30 top-[5%] left-6 tablet:left-[10%] laptop:top-[10%] laptop:left-[10%]">
    <img src={logo} alt="logo Ellen Lindstrom name" className="h-[80px] tablet:h-[130px] laptop:h-[200px] "/>
    <h3 className="font-free text-red text-2xl tablet:text-3xl ml-10 laptop:ml-20">Musikalartist</h3>
    </div>

    </div>
  )
}
