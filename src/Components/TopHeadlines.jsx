import React from 'react';
import Marquee from "react-fast-marquee";

function TopHeadlines() {
    return (
        <div className=' text-sm text-gray-500 -z-50'>
            <Marquee>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to &nbsp;
                <span className=' font-bold'>Fruit <span className=' text-red-700'>Mart
                </span></span> !! We offer a wide variety of fruits to choose from, so you're sure to find something you love.
                Our fruits are organic and pesticide-free.
                We offer free shipping on orders over $50.
                Order your fruit today and experience the difference!
            </Marquee>
        </div>
    )
}

export default TopHeadlines