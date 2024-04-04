import Vision from "@/app/about/vision/vision";
import Image from "next/image";
import Advantages from "@/app/components/advantages/advantages";

const About = () => {
    return (
        <div className="min-h-[100vh]">
            <div className=" flex flex-auto flex-col relative">
                <div className="max-w-c-full w-full mx-auto p-6 lg:px-8 flex flex-auto justify-between lg:flex-col">
                    <div className="w-full pr-8 flex flex-col justify-between lg:w-full">
                        <Image src={'/about/all.svg'} alt="logo" height={300} width={500} className="w-full mb-10"/>
                        <div className="mb-5">
                            <span className="text-plus font-title font-semibold text-black">О компании</span>
                            <h1 className="text-xl font-title font-bold pt-5 pb-4 text-black sm:text-xl ss:text-lg">Профессионалы в сфере абразивов</h1>
                            <p className="text-h-grey text-base font-text max-w-[500px] lg:max-w-none pb-7">Преимущества выбора нашей компании, занимающейся продажей абразивных материалов, очевидны и многогранны. Мы предлагаем нашим клиентам широкий ассортимент качественных продуктов, предназначенных для различных отраслей промышленности.</p>
                            <span className="text-plus text-black font-semibold">Почкин Данил Денисович</span>
                        </div>
                        <div>
                            <Vision></Vision>
                        </div>
                    </div>
                    {/* <div>
                        <Image src={"/about/cargo-ship.png"} alt={"ship"} width={630} height={847} className="lg:w-full lg:h-[400px] object-cover object-center"/>
                    </div> */}
                    {/* <div className="absolute bg-bg-grey max-w-screen w-full h-3/5 -z-10 bottom-0 left-0 lg:bg-white"/> */}
                </div>
            </div>
            {/* <Advantages></Advantages> */}
        </div>
    )
}
export default About
