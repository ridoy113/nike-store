import React from 'react';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"


const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {

    return (
        <>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <div>
                        <div><h1>{price}</h1></div>
                        <div><StarIcon
                            className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900' />
                            <h1>{rating}</h1></div>
                    </div>
                    <div>
                        <button type='button' className=''><ShoppingBagIcon className='h-6 w-6 sm: h-5 sm:w-5 text-slate-100 cursor-pointer transition-all duration-100 active:scale-110 leading-tight text-slate-900' /></button>
                        <button type='button' className=''>{btn}</button>
                    </div>
                </div>





                <div>
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
