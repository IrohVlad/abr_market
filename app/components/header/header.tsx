'use client'
import {useEffect, useState} from 'react'
import type { MenuProps } from 'antd';
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
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 h-16 lg:px-8 lg:justify-end" aria-label="Global">

                <div className="hidden lg:flex relative z-40" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 relative z-40"
                    
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
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
                
                </div>
                {/* <Link href={'/login'} className="flex flex-1 justify-end lg:hidden">
                    <button className="bg-light-red text-white w-24 h-9 rounded-lg font-semibold text-sm">Войти</button>
                </Link> */}
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
                            <Link href={'/login'} className="py-6">
                                <button className="bg-light-red text-white w-24 h-9 rounded-lg font-semibold text-sm">Войти</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}