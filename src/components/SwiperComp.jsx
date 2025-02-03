import { useState } from "react";
import { NavLink } from "react-router-dom"
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageModal } from "./ImageModal";
import galleri from "../data/ImageData.json"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";

export const SwiperComp = () => {
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
    <div className="flex flex-col gap-2">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        speed={1200}
        loop
        autoplay={{
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        effect="fade"
        breakpoints={{
          320: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 10,
            slidesPerView: 6,
          },
        }}
        className="w-full"
      >
        {galleri.map((img, index) => (
          <SwiperSlide key={index} className="relative group cursor-pointer">
            <img
              src={img.image}
              alt={img.alt}
              className="object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300"
            onClick={() => handleOpenModal(img.image, img.alt, img.photographer, img.year, img.titel)}>
              <p className="text-white font-body text-center font-extralight">
                <span className="font-free text-xl font-medium">{img.titel}</span>
                <br />
                {img.year ? img.year : ""}
              </p>
            </div>
          </SwiperSlide>
        ))}
             </Swiper>
      <NavLink to="/galleri" className=" bg-gradient-to-t from-red-500/80 to-rose-300/80  hover:bg-red/100 w-fit rounded-2xl p-2 px-3 text-warm-white text-sm hover:scale-105 mr-[12.5%] self-end ">
    Till galleri
    </NavLink>
      {isModalOpen && (
        <ImageModal src={imageSrc} alt={imageAlt} title={imageTitle} year={imageYear} photographer={imagePhotographer} onClose={handleCloseModal} />
      )}
    </div>
  );
};
