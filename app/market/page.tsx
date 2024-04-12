import React from 'react'
import MarketHero from '../components/marketHero/marketHero'
import MarketProducts from './marketProducts/marketProducts'
import MarketNavbar from '../components/marketNavbar/marketNavbar'
import { ReadonlyURLSearchParams } from 'next/navigation'
import { ConfigProvider } from 'antd'
import MarketSidebar from './marketSidebar/marketSidebar'
import MarketPaginator from './marketPaginator/marketPaginator'

const GetProducts = async (searchParams: any) => {
  const params = new URLSearchParams()
  Object.keys(searchParams).forEach((value: string) => {
    searchParams[value] && value != 'page' && value != 'priceLow' && value != 'priceHigh' ? params.append(value, searchParams[value]) : ''
  })
  params.append('pagination[pageSize]', '30')
  params.append('populate', '*')
  if('page' in searchParams){
    params.append('pagination[page]', String(+searchParams.page))
  }
  if('category' in searchParams){
    const category = searchParams.category.split(' ')
    category.forEach((value: any, key: any)=>{
      params.append(`filters[$and][${key}][category][$containsi]`, value)
    })
  }
  if('name' in searchParams){
    params.append(`filters[$and][10][title][$containsi]`, searchParams.name)
  }
  const response = await fetch(`https://all-trader.ru/api/products?${params}`, {next: {revalidate: 1000}}).then((data) => data.json())

  console.log(params, response)
  return response
}

export default async function Market({searchParams}: Record<'searchParams', ReadonlyURLSearchParams>) {
  const data = await GetProducts(searchParams)
  return (
    <>
      <MarketNavbar searchParams={searchParams}/>
      <MarketHero image_url='/market/more.png'>
        <div className=' text-white font-title font-semibold text-xl md:text-lg'>
          <div className='mb-6'>Добро пожаловать</div>
          <div></div>
        </div>
      </MarketHero>
      <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            // colorPrimary: 'gray'
                            colorPrimary: '#FFA115'
                        },
                        components: {
                            Select: {
                            borderRadius: 0,
                            },
                            Checkbox: {
                            colorPrimary: '#FFA115'
                            }
                        }
                        }}
                    >
      <section className='py-6 lg:py-8'>
        <div className='relative max-w-c-full m-auto px-6 lg:px-8 min-h-[100vh]'>
          <MarketProducts data={data}/>
        </div>
      </section>
      <MarketPaginator total={data.meta.pagination.total} searchParams={searchParams}/>
      </ConfigProvider>
    </>
  )
}