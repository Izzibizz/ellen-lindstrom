import { useState } from "react";
import images from "../data/ImageData.json";
import { ImageModal } from "./ImageModal";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export const Galleri = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, 4);
  const [imageSrc, setImageSrc] = useState();
  const [imageAlt, setImageAlt] = useState();
  const [imageTitle, setImageTitle] = useState();
  const [imagePhotographer, setImagePhotographer] = useState();
  const [imageYear, setImageYear] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (src, alt, photographer, year, title) => {
    setIsModalOpen(true);
    setImageSrc(src);
    setImageAlt(alt);
    setImagePhotographer(photographer)
    setImageYear(year)
    setImageTitle(title)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto py-20 flex flex-col gap-10">
      <h3 className=" text-2xl self-start text-red">Tidigare projekt</h3>
      <div className="flex flex-col laptop:flex-row gap-4">
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/cpW20gV0zHk?si=HWfjDR3WoA1UaC1P"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/22h0JdbatEk?si=o6071e52XWFC8rtn"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="w-full h-full aspect-[6/4] rounded-xl"
          src="https://www.youtube.com/embed/GdJfrDVPdz0?si=Eo7s6GD_zUBONGsP"
          title="YouTube video player Ellen Lindström Doobidoo 2017"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <ul className="grid grid-cols-4  gap-4 laptop:gap-6">
        {displayedImages.map((img, index) => (
          <li key={index}>
            <img
              src={img.image}
              alt={img.alt}
              className="aspect-[4/3] object-cover"
              onClick={() => handleOpenModal(img.image, img.alt, img.photographer, img.year, img.titel)}
            />
          </li>
        ))}
      </ul>
      <button
        className="flex gap-2 items-center bg-gradient-to-t from-red-600/80 to-red-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-xs laptop:text-sm hover:scale-105 self-center tablet:self-end"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? (
          <>
            Visa mindre <SlArrowUp />
          </>
        ) : (
          <>
            Visa fler <SlArrowDown />
          </>
        )}
      </button>
      {isModalOpen && (
        <ImageModal src={imageSrc} alt={imageAlt} title={imageTitle} year={imageYear} photographer={imagePhotographer} onClose={handleCloseModal} />
      )}
    </section>
  );
};
