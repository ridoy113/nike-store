import React from 'react';
import Item from './utils/Item';
import Title from './utils/Title';



const Sales = ({ endpoint }) => {
    console.log(endpoint);
    return (
        <>
            <div>
                <Title />

                <div>
                    <Item />
                </div>
            </div>
        </>
    )
}

export default Sales