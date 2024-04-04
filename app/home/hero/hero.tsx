import Image from "next/image"
import Button from "../../components/button/button"

export default function Hero() {
  return (
    <section className="w-full relative">
        <div className="max-w-c-full m-auto h-[calc(100vh-64px)] short:h-fit flex flex-col justify-center z-10 relative p-6 lg:px-10">
          
          <h1 className="mt-[28px] sm:text-xl font-title font-bold text-3xl max-w-[400px]">
          <span className="relative after:block after:w-full after:absolute after:bottom-0 after:h-[7px] after:bg-orange">All-Trade</span> - абразивные материалы для вас 
          </h1>
          
          <Button className="mt-[100px]"><div className="px-[20px] py-4 font-bold font-title">К продуктам</div></Button>
        </div>
        <div className=" absolute top-0 left-0 h-full w-full bg-[black]">
          <Image src='/home/Worker-angle-grinder-metal-piece.png' fill={true} alt="Main Banner" objectFit="cover" className="md:object-[70%] opacity-60" />
        </div>
        <div className="md:bg-[rgba(0,0,0,1)] absolute top-0 left-0 h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,1)-20%,rgba(255,255,255,0)80%)] opacity-70"></div>
    </section>
  )
}
