import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/button/button'
import Link from 'next/link'

export default function Panoram() {
  return (
    <section className='bg-black'>
        <div className='max-w-c-full m-auto px-6 py-16 lg:px-10 h-fit flex gap-[78px]'>
            <Image width={434} height={451} src={'/home/5419fc0f-b041-485a-b6d7-7319da27571f.jpg'} className='2lg:w-[300px] 2lg:h-[320px] lg:hidden' alt='balgarka'/>
            <div>
                <h2 className=' font-title font-bold text-[40px] leading-[50px] mb-5 sm:text-xl ss:text-lg'>Мы — ведущий поставщик абразивных материалов высокого качества для различных отраслей промышленности!</h2>
                <div className=' font-text text-base mb-12 ss:text-[12px] ss:leading-4'>Наша компания предоставляет продукты ведущих мировых брендов, таких как SUNMIGHT и QSA PURPLE. Наша компания обеспечивает широкий ассортимент абразивных материалов высочайшего качества, отвечающих потребностям различных отраслей промышленности.</div>
                <Button className='px-5 py-4'><Link href={'/about'}>О компании</Link></Button>
            </div>
        </div>
    </section>
  )
}
