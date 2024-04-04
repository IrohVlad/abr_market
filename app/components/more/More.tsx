import React from 'react'

export default function More() {
  return (
    <section className=' bg-cover bg-center relative after:block after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000070]' style={{backgroundImage: 'url(./home/more.png)'}}>
        <div className='max-w-c-full m-auto px-6 py-16 lg:px-10 h-[500px] sm:h-fit relative z-10 flex flex-col justify-center items-center'>
                <h2 className=' text-center font-title font-bold text-[64px] leading-[60px] mb-3 md:text-[40px] sm:text-lg'> <span className='text-[128px] md:text-[80px] sm:text-[40px]'>Есть много</span> <br/>
                и будет больше.</h2>
                <p className=' text-[20px] font-semibold font-title text-center md:text-base sm:text-sm'>Круги, ленты, листы, губки различных характеристик и различного применения. Ассортимент постоянно расширяется. В дальнейшем планируется перейти к продаже широкого спектра строительных инстркментов и материалов</p>
        </div>
    </section>
  )
}
