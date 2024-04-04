import React, {useState, useRef} from 'react'
import MarketCard from '../marketCard/marketCard'

// export interface IProduct {
//   id: string;
//   name: string;
//   price: number;
//   pictureUrl: string;
//   category: string;
// }
// export interface IProductsResponse {
//   total: number;
//   count: number;
//   skip: number;
//   data: Array<IProduct>
// }

export default function MarketProducts({data}: any) {
  return (
    <div className='grid gap-x-9 gap-y-[50px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
      { data?.data?.length && data?.data?.map((value: any)=>{
        return (<MarketCard id={value.id} key={value.id} img_url={value?.attributes?.photo?.data?.attributes?.formats?.small?.url ? 'https://all-trader.ru' + value?.attributes?.photo?.data?.attributes?.formats?.small?.url : 'https://all-trader.ru' + value?.attributes?.photo?.data?.attributes?.url || ''} title={value?.attributes.title} price={value.attributes.price}/>)
      })}

    </div>
  )
}
