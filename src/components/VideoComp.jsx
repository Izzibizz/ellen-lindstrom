export const Galleri = () => {
  return (
    <section className="w-10/12 laptop:w-8/12 mx-auto py-20 flex flex-col gap-4">
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
    </section>
  );
};
