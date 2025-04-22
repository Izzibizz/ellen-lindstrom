import cv from "../data/CV.json"

export const CV = () => {

    console.log(cv)
  return (
    <div className="flex flex-col gap-4 text-stone-700 py-10 laptop:py-16">
      <h3 className="text-3xl text-red self-center">CV</h3>
      <div className="flex flex-col gap-4">
      <div className="flex flex-col border border-red rounded-xl p-6 laptop:p-16 gap-4 laptop:max-w-[900px] laptop:mx-auto">
      <h4 className="text-red font-semibold">ERFARENHET I URVAL, SCEN</h4>
      <ul className="flex flex-col  gap-y-4 ">
        {cv[0].theater.map((production, index) => (
            <li key={index} className="border-b-1 border-red py-4 laptop:grid laptop:grid-cols-3 laptop:gap-4">
                <div>
                <h4 className="font-semibold">{production.title}</h4>
                <p>{production.role}</p></div>
                <div>
                {production.costars && <p>Med {production.costars}</p>}
                <p>{production.location}</p>
                {production.choreography && <p>Koreografi: <span className="italic"> {production.choreography}</span></p>}
                <p>Regi: <span className="italic">  {production.director}</span></p>
                </div>
                <p className="text-end  pt-4 laptop:pt-0">{production.year}</p>
            </li>
        ))}
         </ul>
        </div>
        <div className="flex flex-col laptop:flex-row laptop:gap-20 laptop:w-full gap-10 border border-red rounded-xl p-6 laptop:max-w-[900px] laptop:mx-auto">
        <ul className="flex flex-col gap-4">
        <h4 className="text-red font-semibold">UTBILDNING</h4>
        {cv[0].education.map((school, index) => (
            <li key={index}  className="flex flex-col gap-2">
                <h4 className="font-semibold">{school.school}, {school.focus}</h4>
                <p>{school.years}, {school.location}</p>
            </li>
        ))}
       
        </ul>
        <ul className="flex flex-col gap-2">
        <h4 className="text-red font-semibold">TV & FILM</h4>
        {cv[0].tv_film.map((production, index) => (
            <li key={index}>
                <p><span className="font-semibold">{production.title}</span>, {production.year} {production.location}</p>
            </li>
        ))}
        </ul>
        </div>
        </div>
    </div>
  )
}

