import React from 'react'

export default function Contacts() {
  return (
    <div className="min-h-[100vh]">
                <div className="max-w-c-full w-full mx-auto p-6 lg:px-8 ">
                    <div className='bg-bg-grey p-10'>
                        <h1 className="text-plus font-title font-semibold text-black mb-10">Контакты</h1>
                        <ul className='mb-10'>
                            <li className='font-text font-semibold text-black text-lg'>
                                <a className='block mb-5' href="mailto:den4881550@yandex.ru"> <div className='text-base text-orange relative top-2' >Почта</div> den4881550@yandex.ru</a>
                                <a className='block mb-5' href="tel:+79164881550"><div className='text-base text-orange relative top-2' >Телефон</div>+79164881550</a>
                                <a className='block' href="tel:+79164881804"><div className='text-base text-orange relative top-2' >Телефон 2</div>+79164881804</a>
                            </li>
                        </ul>
                        <h3 className="text-plus font-title font-semibold text-black mb-10">Свяжитесь с нами</h3>
                    </div>
                
                </div>
        </div>
  )
}
