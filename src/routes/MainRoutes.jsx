
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About"
import { Gallery } from "../pages/Gallery"

export const MainRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/om-ellen" element={<About/>}/>
        <Route path="/galleri" element={<Gallery/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

