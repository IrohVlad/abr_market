import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className='bg-black flex flex-col py-10 h-fit px-6 lg:py-6'>
            <div className="max-w-c-full m-auto w-full lg:h-fit flex flex-col justify-between">
                <div className="flex justify-between lg:flex-col">

                    <div className="flex justify-between text-base text-a-grey gap-8 w-full lg:mb-10 lg:gap-10 ss:justify-start ss:flex-wrap">
                        <span className="text-t-grey pl-4">All-TRADE</span>
                        <div className="flex gap-10">
                            <Link href="about" className="pb-3 hover:text-white"><span>О нас</span></Link>
                            <Link href="contacts" className="pb-3 hover:text-white"><span>Контакты</span></Link>
                            <Link href="market" className="pb-3 hover:text-white"><span>Товары</span></Link>
                        </div>
                        <div className="flex w-32 justify-between pr-4">
                    </div>
                    
                    </div>
                </div>
                <hr className='my-4 w-full text-a-grey' />
            </div>
        </footer>
    )
}

export default Footer
