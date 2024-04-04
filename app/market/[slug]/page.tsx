import React from 'react'
import MarketNavbar from '@/app/components/marketNavbar/marketNavbar'
import Image from 'next/image'
import Button from '@/app/components/button/button'
import Link from 'next/link'
import MarketProductContent from '../marketProductContent/marketProductContent'
import ProductStats from './productStats/productStats'
import AddToBasketButton from './addToBasketButton/addToBasketButton'

const GetProduct = async (params: any) => {
  const response = await fetch(`https://all-trader.ru/api/products/${params.slug}?populate=*`, {next: {revalidate: 3000}}).then((data) => data.json())
  return response
}

export default async function Page({params, searchParams}: any) {
  const product = await GetProduct(params);
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <section className='py-6 lg:py-8'>
        <div className='max-w-c-full m-auto px-7 lg:px-8'>
        <div className=' p-7 lg:px-8 shadow-md rounded-[10px] border-[1px] border-[#D9D9D9] md:border-none md:p-0 md:shadow-none'>
          <div className='grid grid-cols-[500px_1fr] gap-3 min-h-[500px] mb-20 lg:grid-cols-1'>
            <div className='relative lg: min-h-[500px]'>
              <Image fill className='object-contain object-center' src={'https://all-trader.ru' + product?.data?.attributes?.photo?.data?.attributes?.url} alt='Product Image' />
            </div>
            <div>
              <div className='flex items-center text-black font-text font-semibold text-[32px] mb-8'>
                {/* <Image height={45} width={45} className='mr-[10px]' src='/market/apple.svg' alt='brend icon'/> */}
                Sunmight
              </div>
              <h1 className='font-text text-black text-xl font-semibold mb-4 lg:text-[25px]'>
                {product?.data.attributes.title}
              </h1>
              <div className='flex justify-between gap-3'>
                <div>
                  <div className='font-text text-h-grey font-semibold mb-6'>
                    Цена:
                    <div className='font-text text-black text-xl font-semibold md:text-[25px]'>
                      {product.price} <span>P</span>
                    </div>
                  </div>
                  {/* <ProductStats/> */}
                  <AddToBasketButton id={product.id} name={product.name} price={product.price} image={product.pictureUrl} />
                </div>
                <div className='py-[10px] px-[15px] rounded-[7px] bg-bg-grey max-w-[250px] w-full flex flex-col justify-between 2lg:hidden lg:flex md:hidden'>
                  <div>
                    <div className='text-sm font-text font-semibold text-black mb-2'>Характеристики</div>
                    <div className='text-black font-text text-sm leading-[26px]'>
                    Тип корпуса: классический <br/> Материал корпуса: титан<br/>Степень защиты: IP68<br/>Количество SIM-карт: 2<br/>Тип SIM-карты: nanoSim<br/>Вес: 187 г<br/>Размеры (ШxВxТ): 70.6x146.6x8.25 мм
                    </div>
                  </div>
                  <a className=' text-[#3891E3] font-text font-medium text-sm' href='#stats'>Все характеристики</a>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className='py-[10px] px-[15px] rounded-[7px] bg-bg-grey w-full hidden gap-6 flex-col justify-between 2lg:flex lg:hidden'>
                  <div>
                    <div className='text-sm font-text font-semibold text-black mb-2'>Характеристики</div>
                    <div className='text-black font-text text-sm leading-[26px]'>
                    Тип корпуса: классический <br/> Материал корпуса: титан<br/>Степень защиты: IP68<br/>Количество SIM-карт: 2<br/>Тип SIM-карты: nanoSim<br/>Вес: 187 г<br/>Размеры (ШxВxТ): 70.6x146.6x8.25 мм
                    </div>
                  </div>
                  <a className=' text-[#3891E3] font-text font-medium text-sm' href='#stats'>Все характеристики</a>
                </div>
          <MarketProductContent description={product.description}/>
        </div>
        </div>
      </section>
    </>
  )
}
