import React from 'react';
import Title from './utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



const Stories = ({ story: { title, news, } }) => {
    return (
        <>
            <div className='nike-container mb-11'>
                <Title title={title} />
                <div>
                    <Splide>
                        {news.map((val, i) => (
                            <SplideSlide key={i}
                                className="mb-0.5"
                            >
                                <div>
                                    <div><img src={val.img} alt={`img/story/${i}`} className="" /></div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Stories