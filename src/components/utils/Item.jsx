import React from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"


const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {

    return (
        <>
            <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
                <div className='grid items-center justify-items-center'>
                    <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>{title}</h1>
                    <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>



                    <div className='flex items-center justify-between w-28 '>
                        <div className='flex items-center bg-white/80 px-1 rounded'><h1 className='text-black text-sm'>${price}</h1></div>
                        <div className='flex items-center'><StarIcon
                            className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900' />
                            <h1 className=''>{rating}</h1></div>
                    </div>

                    <div className='flex items-center'>
                        <button type='button' className=''><ShoppingBagIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900' /></button>
                        <button type='button' className=''>{btn}</button>
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
