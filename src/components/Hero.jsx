import { useEffect, useState } from "react";
import logo from "/ellen-lindstrom-logga-text-rod.svg";

export const Hero = () => {
  const [isLaptop, setIsLaptop] = useState(
    () => window.matchMedia("(min-width: 1025px)").matches
  );

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLaptop(window.matchMedia("(min-width: 1025px)").matches);
    };
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="h-[70vh] ">
      <img
        src={
          isLaptop
            ? "https://res.cloudinary.com/dbu0kqoee/image/upload/v1745327536/ellen-lindstrom-musikalartist-2_tjnsw7.jpg"
            : "https://res.cloudinary.com/dbu0kqoee/image/upload/v1745327536/ellen-lindstrom-musikalartist-1_jgz7cs.jpg"
        }
        alt="Ellen Lindstrom musikal artist"
        className={` z-0  absolute w-screen max-w-full top-0 left-0 h-[80vh] max-h-screen object-cover animate-zoomInOut`}
      />
      <div className="absolute z-30 top-20 left-6 tablet:top-10 tablet:left-[10%] laptop:top-18">
        <img
          src={logo}
          alt="logo Ellen Lindstrom name"
          className="h-[80px] tablet:h-[130px] laptop:h-[200px] "
        />
      </div>
    </div>
  );
};
