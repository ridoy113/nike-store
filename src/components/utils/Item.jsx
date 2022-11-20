import React from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"


const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {

    return (
        <>
            <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
                <div className='grid items-center justify-items-center'>
                    <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                    <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>



                    <div className='flex items-center justify-between w-28 my-2'>
                        <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'><h1 className='text-black text-sm font-medium'>${price}</h1></div>
                        <div className='flex items-center gap-1'><StarIcon
                            className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight w-5 h-5 md:w-4 md:h-4 ' />
                            <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1></div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button type='button' className='bg-white/90 blur-effect-theme py-1 rounded active:scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm p-0.5 shadow shadow-slate-200'><ShoppingBagIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900' /></button>
                        <button type='button' className='bg-white/90 blur-effect-theme px-7 py-1 rounded active:scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm px-2 py-1 shadow shadow-slate-200 text-sm text-black'>{btn}</button>
                    </div>
                </div>





                <div className='flex items-center'>
                    <img
                        src={img}
                        alt="img/item-img"
                        className=''
                    />
                </div>
            </div>
        </>
    )
}

export default Item
