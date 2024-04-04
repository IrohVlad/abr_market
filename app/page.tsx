import Hero from "./home/hero/hero"
import Processes from "./home/processes/processes"
import Panoram from "./home/panoram/panoram"
import Offers from "./components/offers/offers"
import More from "./components/more/More"

export default function Home() {
  return (
    <main className=" flex flex-col flex-auto text-white">
      <Hero/>
      <Panoram/>
      <Offers/>
      <More/>
      <Processes/>
    </main>
  )
}
