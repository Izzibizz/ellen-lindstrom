import { Header } from "./components/Header"
import { MainRoutes } from "./routes/MainRoutes";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";


export const App = () => {

  return (
    <>
    <ScrollToTop />
    <div className=" bg-varm-white max-w-screen min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow">
        <MainRoutes />
      </main>
      <Footer />
    </div>
    </>
  );
};

/* bg-linear-45 from-red-700 to-red-400 */
