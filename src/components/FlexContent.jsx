import React from 'react'

const FlexContent = ({ endpoint: { title, heading, text, img, btn, url } }) => {
    return (
        <>
            <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container`}>
                <div className='max-w-lg lg:max-w-none w-full md:text-center'>
                    <h1 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h1>
                    <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
                    <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
                    <a href={url} className="flex items-center" target={"_blank"} role="button">
                        <button type='button' className='px-7 py-2 rounded active: scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm bg-slate-900 shadow-slate-900 text-slate-100'>{btn}</button>
                    </a>
                </div>



                <div className=''>
                    <img src={img} alt={`img/${heading}`} className="" />
                </div>
            </div>
        </>
    )
}

export default FlexContent
