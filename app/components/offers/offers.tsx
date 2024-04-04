import React from 'react'
import Image from 'next/image'

export default function Offers() {
  return (
    <>
       <section>
        <div className='max-w-c-full m-auto px-6 py-16 lg:px-10'>
        <h3 className="font-bold text-[28px] mt-[80px] text-black ss:text-lg  relative after:block after:w-full after:absolute after:bottom-0 after:h-[7px] after:bg-orange w-fit">
            Наши ценности
                </h3>
                <div className="mt-[60px] text-black">
                    <div className="flex mb-[40px]">
                        {/* <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/count.svg" alt="Our doings"/></div> */}
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Качество</div>
                            <div className="text-[#6C6C6C]">Мы стремимся к предоставлению клиентам только лучших абразивных материалов, которые отвечают самым высоким стандартам</div>
                        </div>
                    </div>
                    <div className="flex mb-[40px]">
                        {/* <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/depression.svg" alt="Our doings"/></div> */}
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Инновации</div>
                            <div className="text-[#6C6C6C]">Мы постоянно следим за новыми тенденциями и технологиями в отрасли, чтобы предложить нашим клиентам самые передовые решения.</div>
                        </div>
                    </div>
                    <div className="flex mb-[40px]">
                        {/* <div className="mr-4 relative top-2"><Image width={36} height={36} src="/services/time.svg" alt="Our doings"/></div> */}
                        <div>
                            <div className="font-semibold text-[20px] max-w-[358px] mb-4">Надежность</div>
                            <div className="text-[#6C6C6C]">Мы гарантируем надежное сотрудничество, оперативную доставку и высокий уровень обслуживания для каждого клиента.</div>
                        </div>
                    </div>
                </div>
        </div>
       </section>
    </>
  )
}
