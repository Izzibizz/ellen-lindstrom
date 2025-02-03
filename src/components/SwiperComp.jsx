import { useState } from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageModal } from "./ImageModal";

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
  const galleri = [
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180402/Ellen-Lindstrom-Oscarsrevyn-2017-Lorensbergsteatern_tskwtj.jpg",
      alt: "Ellen Lindström Oscarsrevyn 2017",
      titel: "Oscarsrevyn, Lorensbergsteatern",
      year: "2017",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180401/Ellen-Lindstrom-Djungelboken-the-musical-2022-2023-Sverigeturn%C3%A9-Linus-Halls%C3%A9nius_z7iukf.jpg",
      alt: "Ellen Lindström Djungelboken 2022-2023, foto Linus Hallsenius",
      titel: "Djungelboken the musical",
      year: "2022-2023",
      photographer: "Linus Hallsénius",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180390/Ellen-Lindstrom-Djungelboken-the-musical-2022-2023-Sverigeturn%C3%A9-2_bd8vkn.jpg",
      alt: "Ellen Lindström Djungelboken the Musical 2022-2013",
      titel: "Djungelboken the musical",
      year: "2022-2023",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180390/Glada-ankan-2021-Nojesteatern-Caesar-Righetti-Ellen-Lindstrom-musikalartist-2_mjzgry.jpg",
      alt: "Ellen Lindström Glada änkan Nöjesteatern fotograf: Ceasar Righetti",
      titel: "Glada änkan Nöjesteatern",
      year: "2021",
      photographer: "Ceasar Righetti",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180389/Ellen-Lindstrom-ICA-100-ar-2017-Lisa-Stadell_iarm1p.jpg",
      alt: "Ellen Lindström ICA 100 år 2017 Lisa Stadell",
      titel: "ICA 100 år",
      year: "2017",
      photographer: "Lisa Stadell",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180387/Ellen-Lindstrom-Doobidoo-2017-SVT_srg12a.jpg",
      alt: "Ellen Lindström Doobidoo 2017, SVT",
      titel: "Doobidoo, SVT",
      year: "2017",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180386/Ellen-Lindstrom-Oscarsrevyn-2016-Oscarsteatern_sxhrl4.jpg",
      alt: "Ellen Lindström Oscarsrevyn 2016",
      titel: "Oscarsrevyn",
      year: "2016",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738181748/Ellen-Lindstrom-Magnus-den-Store-2013-Hamburger-Bors-2-rekt_okwdyk.jpg",
      alt: "Ellen Lindström Magnus den Store 2013, Hamburger börs",
      titel: "Magnus den Store, Hamburger börs",
      year: "2013",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180384/Ellen-Lindstrom-Djungelboken-the-musical-2022-2023-Sverigeturn%C3%A9-4_becvp9.jpg",
      alt: "Ellen Lindström Djungelboken the musical 2022-2023",
      titel: "Djungelboken the musical",
      year: "2022-2023",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180384/Glada-ankan-2021-Nojesteatern-Caesar-Righetti-Ellen-Lindstrom-musikalartist_d6mz6k.jpg",
      alt: "Ellen Lindström Glada Änkan 2021, Nöjesteatern Ceasar Righetti",
      titel: "Glada Änkan",
      year: "2021",
      photographer: "Ceasar Righetti",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180383/Ellen-Lindstrom-Oscarsrevyn-2017-Lorensbergsteatern-Mats-Backer_p6f5es.jpg",
      alt: "Ellen Lindström Oscarsrevyn 2017, Lorensbergsteatern fotograf: Mats Bäcker",
      titel: "Oscarsrevyn",
      year: "2017",
      photographer: "Mats Bäcker",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180381/Ellen-Lindstrom-Magnus-den-Store-2013-Hamburger-Bors_x0so2e.jpg",
      alt: "Ellen Lindström Magnus den Store 2013, Hamburger börs",
      titel: "Magnus den Store, Hamburger börs",
      year: "2013",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180381/Ellen-Lindstrom-musikalartist-oscarsrevyn_p3m2jd.jpg",
      alt: "Ellen Lindström Oscarsrevyn",
      titel: "Oscarsrevyn",
      year: "2016",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180380/Ellen-Lindstrom-Peter-Knutson.musikalartist_ccx6kq.jpg",
      alt: "Ellen Lindström Fotograf Peter Knutson",
      titel: "Ellen Lindström",
      photographer: "Peter Knutson",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180380/Ellen-Lindstrom-Djungelboken-the-musical-2022-2023-Sverigeturn%C3%A9-3_c1hzzr.jpg",
      alt: "Ellen Lindström Djungelboken the musical 2022-2023 Sverigeturné",
      titel: "Djungelboken the musical",
      year: "2022-2023",
    },
    {
      image:
        "https://res.cloudinary.com/dbf8xygxz/image/upload/v1738180380/Spamalot-2012-Ellen-Lindstrom-Understudy-Lady-of-the-Lake_dqjgxd.jpg",
      alt: "Ellen Lindström Spamalot 2012, understudy Lady of the Lake",
      titel: "Spamalot, understudy Lady of the Lake",
      year: "2012",
    },
  ];

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
    <>
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
      {isModalOpen && (
        <ImageModal src={imageSrc} alt={imageAlt} title={imageTitle} year={imageYear} photographer={imagePhotographer} onClose={handleCloseModal} />
      )}
    </>
  );
};
