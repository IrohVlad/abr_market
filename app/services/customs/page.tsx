import React from 'react'
import PageWithSidebar from '@/app/components/pageWithSidebar/pageWithSidebar'
import ServiceHero from '@/app/components/serviceHero/serviceHero'
import Image from 'next/image'
import Button from '@/app/components/button/button'
import Slider from '@/app/components/slider/slider'
import Responsibilities from '@/app/components/responsibilities/responsibilities'
import Trucks from '@/app/components/trucks/trucks'

export default function Customs() {
  return (
    <>
        <ServiceHero title='Таможенное оформление' routes={[{title:'Главная', href: '/'}, {title:'Услуги', href: '/services'}, {title:'Таможенное. оформление', href:'customs'}]} img_url='/services/warehouse-and-customs-2023-06-27-22-50-14-utc1.png' />
        <PageWithSidebar>
        <h2 className=" text-[44px] font-bold max-w-[550px] mb-[40px] text-black sm:text-xl ss:text-[25px]">Таможенное оформление</h2>
                <p className="my-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Управление цепочкой поставок - это сложная операция из-за торговых барьеров и требований соответствия таможенным правилам. Поэтому у нас есть решения, специально разработанные для вашего товарооборота. Мы помогаем вам производить таможенное оформление ваших отправлений в срок, независимо от объема, масштаба или характера.</p>
                <Slider img_urls={['/services/unsplash_DEMrRuvJvqo.png', '/services/unsplash_DEMrRuvJvqo.png']}/>
                <p className="my-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Независимо от того, импортируете вы товары или экспортируете, мы предлагаем широкий спектр услуг, соответствующих вашей логистической цепи. Мы поможем вам подготовить и обработать декларации, рассчитать пошлины и налоги, а также организовать инспекции. С нашей помощью вы сможете снизить риски и контролировать затраты по трансграничным операциям.</p>
                <h3 className="font-bold text-[28px] my-[60px] text-black ss:text-lg">
                    Наши преимущества
                </h3>
                <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr] lg:gap-y-8 gap-x-[46px] gax-y-8 text-black">
                    <div className="flex items-center">
                        <div className="mr-4"><Image width={28} height={28} src="/services/ok.svg" alt=""/></div>
                        <div className="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4"><Image width={28} height={28} src="/services/ok.svg" alt=""/></div>
                        <div className="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4"><Image width={28} height={28} src="/services/ok.svg" alt=""/></div>
                        <div className="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4"><Image width={28} height={28} src="/services/ok.svg" alt=""/></div>
                        <div className="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4"><Image width={28} height={28} src="/services/ok.svg" alt=""/></div>
                        <div className="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
                    </div>
                </div>
                <Responsibilities/>
                <Button className="mb-[150px] px-4 py-[15px] " ><div className=" text-white w-fit font-semibold">Загрузить брошуру с нашими услугами</div></Button>
        </PageWithSidebar>
        <Trucks/>
    </>
  )
}
