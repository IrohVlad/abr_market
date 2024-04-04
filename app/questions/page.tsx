'use client'
import React, {useState} from 'react'
import ServiceHero from '../components/serviceHero/serviceHero'
import Carousel from '../components/carousel/carousel'
import QuestionAnswerBlock from '../components/questionAnswerBlock/questionAnswerBlock'
import Trucks from '../components/trucks/trucks'
import Image from 'next/image'
const data = [
  {
    title: 'Морские перевозки',
    icon: '/portfolio/ship.svg',
    items: [
      {
        question: 'Обеспечиваете ли вы уплату налогов за нас ?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'В какие европейские страны вы доставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Какие услуги логистики вы предоставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },

    ]
  },
  {
    title: 'Авиаперевозки',
    icon: '/portfolio/plane.svg',
    items: [
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'В какие европейские страны вы доставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Какие услуги логистики вы предоставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
    ]
  },
  {
    title: 'Железнодорожные перевозки',
    icon: '/portfolio/train.svg',
    items: [
      {
        question: 'Обеспечиваете ли вы уплату налогов за нас ?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
    ]
  },
  {
    title: 'Автомобильные перевозки',
    icon: '/portfolio/car.svg',
    items: [
      {
        question: 'Обеспечиваете ли вы уплату налогов за нас ?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'В какие европейские страны вы доставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Какие услуги логистики вы предоставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
    ]
  },
  {
    title: 'Складские услуги',
    icon: '/portfolio/store.svg',
    items: [
      {
        question: 'Обеспечиваете ли вы уплату налогов за нас ?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'В какие европейские страны вы доставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Какие услуги логистики вы предоставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
    ]
  },
  {
    title: 'Таможенное оформление',
    icon: '/questions/customs.svg',
    items: [
      {
        question: 'Обеспечиваете ли вы уплату налогов за нас ?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где находятся ваши склады?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Где можно прочитать про ваши услуги?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'В какие европейские страны вы доставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Какие услуги логистики вы предоставляете?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
      {
        question: 'Как оплатить ваши услуги после доставки?',
        answer: 'С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.'
      },
    ]
  }
]
export default function Questions() {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <>
        <ServiceHero title='Часто задаваемые вопросы' routes={[{title:'Главная', href: '/'}, {title:'Часто задаваемые вопросы', href: 'questions'}]} className='relative after:absolute after:block bg-[#C4C4C4] after:top-0 after:left-0 after:w-full after:h-full after:z-100 after:bg-[linear-gradient(90deg,rgba(171,53,52,0.5)0%,rgba(255,7,5,0.5)200%)] after:bg-opacity-50'     />
        <section>
            <div className='max-w-c-full mt-[120px] lg:mt-0 mb-6 lg:mb-0 mx-auto p-6 lg:px-8'>
                <h2 className=' font-title mb-20 lg:mb-10 text-black font-bold text-2xl max-w-[550px] sm:text-xl ss:text-lg'>
                    О чем нас спрашивают наши клиенты
                </h2>
                <Carousel active={currentIndex} setter={setCurrentIndex} data={data} className=''/>
            </div>
        </section>
        <section className='mb-[160px] lg:mb-0'>
          <div className='max-w-c-full mb-6 mx-auto p-6 lg:px-8'>
            <QuestionAnswerBlock items={data[currentIndex].items}/>
          </div>
        </section>
        <Trucks/>
    </>
  )
}