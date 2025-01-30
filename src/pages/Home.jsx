
import { usePortfolioStore } from "../stores/usePortfolioStore"
import { Loading } from "../components/Loading"
import { Hero } from "../components/Hero"
import { OmEllen } from "../components/OmEllen"
import { SwiperComp } from "../components/SwiperComp"


export const Home = () => {

 
  

  const { loading } = usePortfolioStore()
  return (
    <section className="min-h-screen bg-warm-white mb-20 w-screen max-w-screen relative flex flex-col font-body gap-4">
    {loading ? (
      <Loading />
    ) : (
      <>
      <Hero />
      <SwiperComp />
     <OmEllen />
    </>
    )}
    </section>
  )
}

