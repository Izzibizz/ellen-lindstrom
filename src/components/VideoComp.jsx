

export const VideoComp = () => {
  return (
    <div className="w-full laptop:w-8/12 mx-auto bg-gradient-to-t from-red-600/100 to-red-400/80 p-6 py-20 laptop:p-16 ">
        <div className="w-11/12 mx-auto flex flex-col laptop:flex-row gap-6">
      <iframe 
      className="w-full h-full aspect-[6/4] rounded-xl"
    src="https://www.youtube.com/embed/cpW20gV0zHk?si=HWfjDR3WoA1UaC1P" 
    title="YouTube video player Ellen Lindström Doobidoo 2017" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
<iframe 
className="w-full h-full aspect-[6/4] rounded-xl"
    src="https://www.youtube.com/embed/22h0JdbatEk?si=o6071e52XWFC8rtn" 
    title="YouTube video player Ellen Lindström Doobidoo 2017" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
<iframe 
className="w-full h-full aspect-[6/4] rounded-xl"
    src="https://www.youtube.com/embed/GdJfrDVPdz0?si=Eo7s6GD_zUBONGsP" 
    title="YouTube video player Ellen Lindström Doobidoo 2017" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
</div>
    </div>
  )
}


