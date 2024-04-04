"use client"
import React, {useState} from 'react'
import Carousel from '../../components/carousel/carousel'
import ProcessesContent from '../../components/carousel/processesContent/processesContent'

export default function Processes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const data = [
    {
      title: 'Заявка',
      img_url: '/home/zayv.jpg',
      description: 'Вы оставляете заявку или связываетесь любым удобным вам способом',
      list: [
        'Несколько способов связи',
        'Ответ в кратчайшее время',
      ]
    },
    {
      title: 'Связь',
      img_url: '/home/warehouse.png',
      description: 'Мы обсуждаем условия покупки и доставки интерисующих вас продуктов',
      list: [
        'Обговариваются все тонкости сделки',
        'Уточняется количество товаров, цена',
        'Уточняется дата и время доставки'
      ]
    },
    {
      title: 'Получение',
      img_url: '/home/deliv.jpg',
      description: 'Товар доставляется в необходимое место',
      list: [
        'Гарантия сохранности',
        'Гарантия доставки'
      ]
    },
  ]
  return (
    <section className='w-full relative'>
        <div className='max-w-c-full m-auto h-fit lg:h-fit flex flex-col justify-center px-6 py-16 lg:px-10'>
            <h2 className='font-title text-2xl text-[black] font-bold sm:text-xl ss:text-lg'>
                Наши процессы
            </h2>
            <Carousel data={data} setter={setCurrentIndex} active={currentIndex} />
            <ProcessesContent list={data[currentIndex].list} description={data[currentIndex].description} img_url={data[currentIndex].img_url}/>
        </div>
    </section>
  )
}
