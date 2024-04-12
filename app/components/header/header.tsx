'use client'
import {useEffect, useState} from 'react'
import type { MenuProps } from 'antd';
import Image from 'next/image';
import './style.css'
import {
    Bars3Icon,
} from '@heroicons/react/24/outline'
import {usePathname} from "next/navigation";
import Link from "next/link";




export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();

    useEffect(()=>{
        setMobileMenuOpen(false)
    }, [pathname])
    useEffect(()=>{
        if(mobileMenuOpen){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [mobileMenuOpen])

    const items1: MenuProps['items'] = [
        {
          label: <Link className={`link !text-h-grey ${pathname === '/shipment' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/shipment">Оформить отправление</Link>,
          key: '0',
        },
        {
          label: <Link className={`link !text-h-grey ${pathname === '/shipment/network' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/shipment/network">Где мы работаем</Link>,
          key: '1',
        }
      ];
      const items2: MenuProps['items'] = [
        {
          label: <Link className={`link !text-h-grey ${pathname === '/policy' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/policy">Правила</Link>,
          key: '0',
        },
        {
          label: <Link className={`link !text-h-grey ${pathname === '/portfolio' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/portfolio">Наши работы</Link>,
          key: '1',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/clients' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/clients">Клиенты</Link>,
            key: '2',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/help' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/help">Центр помощи</Link>,
            key: '3',
        },
        {
            label: <Link className={`link !text-h-grey ${pathname === '/questions' ? '!text-black' : ''} hover:text-black flex items-center gap-x-1`} href="/questions">Частые вопросы</Link>,
            key: '4',
        },
        
      ];

    const menuProps1 = {
        items: items1
    }
    const menuProps2 = {
        items: items2
    }

    return (
        <header className="bg-white sticky z-50 top-0 left-0 text-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 h-16 lg:px-8 lg:justify-end" aria-label="Global">
                
                <div className="hidden   lg:flex relative z-40" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative z-40"
                    
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div></div>
                <div className="flex lg:hidden gap-x-12 text-sm text-h-grey font-semibold leading-6">
                    <Link href="/"
                          className={`link ${pathname === '/' ? 'text-black relative after:w-full after:block after:h-[4px] after:bg-orange after:absolute after:bottom-0' : ''} hover:text-black`}>
                        <span>Главная</span>
                    </Link>
                    <Link href="/about"
                          className={`link ${pathname === '/about' ? 'text-black relative after:w-full after:block after:h-[4px] after:bg-orange after:absolute after:bottom-0' : ''} hover:text-black`}>
                        <span>О компании</span>
                    </Link>
                    <Link href="/market"
                          className={`link ${pathname === '/market' ? 'text-black relative after:w-full after:block after:h-[4px] after:bg-orange after:absolute after:bottom-0' : ''} hover:text-black`}>
                        <span>Маркет</span>
                    </Link>
                    <Link href="/contacts"
                          className={`link ${pathname === '/contacts' ? 'text-black relative after:w-full after:block after:h-[4px] after:bg-orange after:absolute after:bottom-0' : ''} hover:text-black`}>
                        <span>Контакты</span>
                    </Link>
                
                </div>
                <ul className="flex justify-end lg:hidden">
                    <li className='mr-3'><a href="mailto:den4881550@yandex.ru" className=' text-black hover:text-orange transition-colors duration-300'><svg id="Layer_1" className='h-[25px] w-[25px]' fill='currentColor' version="1.1" viewBox="0 0 100.354 100.352" xmlns="http://www.w3.org/2000/svg"><path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462  c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029  c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02  c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465  c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125  c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011  c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061  c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059  c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018  c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117  c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121  c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071  c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03  c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z   M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472  L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481  l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"/></svg></a></li>
                    <li><a href="tel:+79164881550" className=' text-black hover:text-orange transition-colors duration-300'><svg className='h-[25px] w-[25px]' fill='currentColor' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z"/><path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z"/><path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z"/></g></svg></a></li>
                </ul>
            </nav>
            <div className={`max-lg:hidden text-h-grey absolute top-0 pointer-events-none left-0 opacity-0 transition-opacity duration-300 ${mobileMenuOpen && ' pointer-events-auto !opacity-100 !z-[39]'}`}>
                <div className="fixed inset-0 bg-[#00000018]" onClick={()=>{setMobileMenuOpen(false)}}/>
                <div className={`fixed inset-y-0 translate-x-[500px] right-0 transition-transform duration-300 z-10 w-full overflow-y-auto bg-white px-6 py-6 pt-16 max-w-sm ring-1 ring-[#00000030] ${mobileMenuOpen && ' !translate-x-0'}`}>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-1">
                            <div className="space-y-2 py-6">
                                <Link href="/"
                                      className={`link ${pathname === '/' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Главная</span>
                                </Link>
                                <Link href="/about"
                                      className={`link ${pathname === '/about' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>О компании</span>
                                </Link>
                                <Link href="/market"
                                      className={`link ${pathname === '/market' ? 'text-black' : ''} hover:text-black -mx-3 block rounded-lg px-3 py-2`}>
                                    <span>Маркет</span>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}