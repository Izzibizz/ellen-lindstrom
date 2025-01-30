import { Header } from "./components/Header"
import { MainRoutes } from "./routes/MainRoutes";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";


export const App = () => {

  return (
    <>
    <ScrollToTop />
    <div className=" max-w-screen min-h-screen flex flex-col overflow-hidden relative">
      <Header />
      <main className="flex-grow bg-warm-white">
        <MainRoutes />
      </main>
      <Footer />
    </div>
    </>
  );
};

