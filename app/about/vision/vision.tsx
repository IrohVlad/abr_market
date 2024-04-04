"use client"
import React, {useState} from 'react'
import Carousel from '../../components/carousel/carousel'
import ProcessesContent from '../../components/carousel/processesContent/processesContent'
import VisionContent from "@/app/components/carousel/visionContent/visionContent";

export default function Vision() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const data = [
        {
            title: "Наша цель",
            description: "Предоставляем нашим клиентам лучшиие варианты",
            list: [
                "Высокое качество материалов",
                "Широкий выбор продукции",
                "Профессиональное обслуживание клиентов",
                "Конкурентоспособные цены"
            ],
            button: "Читать дальше",
        },
        {
            title: "Наше виденье",
            description: "Мы стремимся стать лидерами в области продажи строительных материалов, предлагая клиентам широкий выбор и услуги высокого качества",
            list: [
                "Развитие инновационных технологий",
                "Создание партнерских отношений",
                "Постоянное совершенствование услуг",
            ],
            button: "Читать дальше",
        },
    ]
    return (
        <section className='w-full relative'>
            <div className='max-w-c-full m-auto h-fit flex flex-col justify-center'>
                <Carousel small={true} className="" data={data} setter={setCurrentIndex} active={currentIndex} />
                <VisionContent list={data[currentIndex].list} description={data[currentIndex].description} button={data[currentIndex].button}/>
            </div>
        </section>
    )
}
