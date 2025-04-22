import { useState, useEffect } from "react";
import images from "../data/ImageData.json";
import galleri from "/galleri.svg";
import { ImageModal } from "./ImageModal";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export const Galleri = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageSrc, setImageSrc] = useState();
  const [imageAlt, setImageAlt] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [imagePhotographer, setImagePhotographer] = useState();
  const [imageYear, setImageYear] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortedImages, setSortedImages] = useState(images);
  const [isAscending, setIsAscending] = useState(false);
  const [sortBy, setSortBy] = useState("year");


  const handleOpenModal = (src, alt, photographer, year, title) => {
    setIsModalOpen(true);
    setImageSrc(src);
    setImageAlt(alt);
    setImagePhotographer(photographer);
    setImageYear(year);
    setImageTitle(title);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const sortByYear = (arr, asc) => {
    return [...arr].sort((a, b) => {
      const getFirstYear = (year) => {
        if (!year) return 0; // Handle undefined/null cases
        const yearStr = String(year).trim(); // Ensure it's a string & remove spaces
        const firstYear = yearStr.includes("-")
          ? yearStr.split("-")[0]
          : yearStr;
        return parseInt(firstYear, 10) || 0; // Convert to number safely
      };

      const yearA = getFirstYear(a.year);
      const yearB = getFirstYear(b.year);

      return asc ? yearA - yearB : yearB - yearA;
    });
  };

  const sortByTitle = (arr, asc) => {
    return [...arr].sort((a, b) => {
      return asc
        ? a.titel.localeCompare(b.titel)
        : b.titel.localeCompare(a.titel);
    });
  };

  useEffect(() => {
    if (sortBy === "year") {
      setSortedImages(sortByYear(images, isAscending));
    } else {
      setSortedImages(sortByTitle(images, isAscending));
    }
  }, [sortBy, isAscending]);

  // Function to handle sorting button clicks
  const handleSort = (type) => {
    if (sortBy === type) {
      setIsAscending(!isAscending); // Toggle ascending/descending if already sorting by this type
    } else {
      setSortBy(type);
      setIsAscending(true); // Reset to ascending when switching sort type
    }
  };

  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto py-20 flex flex-col gap-10">
      <img src={galleri} alt="text sektion galleri" className="w-[120px]" />
      <div className="flex flex-col laptop:grid grid-cols-3 gap-4 pb-12">
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/cpW20gV0zHk?si=HWfjDR3WoA1UaC1P"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/22h0JdbatEk?si=o6071e52XWFC8rtn"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/GdJfrDVPdz0?si=Eo7s6GD_zUBONGsP"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-end bg-gradient-to-t from-red-600/100 to-red-400/80 p-4 rounded-t-xl">
        <button
          onClick={() => handleSort("year")}
          className="flex gap-2 items-center text-sm border border-warm-white text-warm-white rounded-xl p-2 px-3 cursor-pointer hover:scale-105"
        >
          {" "}
          {sortBy === "year" ? (
            <>Årtal {isAscending ? <SlArrowUp /> : <SlArrowDown />}</>
          ) : (
            <>Årtal <SlArrowDown /></>
          )}{" "}
        </button>
        <button
          onClick={() => handleSort("title")}
          className="flex gap-2 items-center text-sm border border-warm-white text-warm-white rounded-xl p-2 px-3 cursor-pointer hover:scale-105"
        >
          {sortBy === "title" ? (
            <>
              {isAscending ? (
                <>
                  A-Ö <SlArrowUp />{" "}
                </>
              ) : (
                <>
                  {" "}
                  Ö-A <SlArrowDown />{" "}
                </>
              )}
            </>
          ) : (
            <>
              A-Ö <SlArrowUp />
            </>
          )}
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-4 laptop:gap-6 text-stone-700 font-light text-xs transition-all duration-700 ease-in-out ">
      {sortedImages.slice(0, 8).map((img, index) => (
      <li key={index}>
        <img
          src={img.image}
          alt={img.alt}
          className="aspect-[4/3] object-cover cursor-pointer"
          onClick={() =>
            handleOpenModal(
              img.image,
              img.alt,
              img.photographer,
              img.year,
              img.titel
            )
          }
        />
        <p>{img.titel}</p>
        {img.year && <p>({img.year})</p>}
        {img.photographer && <p>fotograf: {img.photographer}</p>}
      </li>
    ))}
  </ul>

  {/* Expandable section */}
  <div
    className={`transition-all duration-700 overflow-hidden ${
      showAll ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <ul className="grid grid-cols-2 gap-4 tablet:grid-cols-4 laptop:gap-6 text-stone-700 font-light text-xs mt-4">
      {sortedImages.slice(8).map((img, index) => (
        <li key={index}>
          <img
            src={img.image}
            alt={img.alt}
            className="aspect-[4/3] object-cover cursor-pointer"
            onClick={() =>
              handleOpenModal(
                img.image,
                img.alt,
                img.photographer,
                img.year,
                img.titel
              )
            }
          />
          <p>{img.titel}</p>
          {img.year && <p>({img.year})</p>}
          {img.photographer && <p>fotograf: {img.photographer}</p>}
        </li>
      ))}
    </ul>
  </div>
      </div>
      <button
        className="flex gap-2 items-center bg-gradient-to-t from-red-600/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs laptop:text-sm hover:scale-105 self-center tablet:self-end"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? (
          <>
            Visa färre bilder <SlArrowUp />
          </>
        ) : (
          <>
            Visa fler bilder <SlArrowDown />
          </>
        )}
      </button>
      {isModalOpen && (
        <ImageModal
          src={imageSrc}
          alt={imageAlt}
          title={imageTitle}
          year={imageYear}
          photographer={imagePhotographer}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};
