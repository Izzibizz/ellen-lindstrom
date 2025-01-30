
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { About } from "../pages/About"

export const MainRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/om-ellen" element={<About/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </>
  )
}

