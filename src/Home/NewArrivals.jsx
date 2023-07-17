import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function NewArrivals() {
    const [fruits, setfruits] = useState([]);

    useEffect(() => {
        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/new-arrivals')
            .then(res => res.json())
            .then(data => {
                setfruits(data)
            })
    }, [])

    let selectedItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const handleCart = (product_id, name, image, price) => {
        //console.log({product_id,name,image,price});
        const myOrder = { product_id, name, image, price };
        selectedItems.push(myOrder)
        console.log(selectedItems);
        localStorage.setItem('cart', JSON.stringify(selectedItems));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to Cart!',
            showConfirmButton: false,
            timer: 500

        })
    }
    return (
        <div>
            <Title title='New Arrivals'></Title>
            <div className='text-xs md:text-base  container md:mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 px-5 mb-5'>
                {
                    fruits.map((fruit, index) =>
                        <div key={index} className=' bg-yellow-300'>
                            <img src={fruit.image} className=' rounded' />
                            <div className='lg:p-5 p-2'>
                                <h1 className='text-xl'>{fruit.name}</h1>
                                <p>Price : {fruit.price} Tk</p>
                                <button onClick={()=>handleCart(fruit._id,fruit.name,fruit.image,fruit.price)}
                                className='rounded mb-2 mg:mb-0 p-2 md:px-5 md:py-2 bg-white me-2 hover:bg-slate-400'>Add to cart</button>
                                <button className='rounded mb-2 mg:mb-0 p-2 md:px-5 md:py-2 bg-white hover:bg-slate-400'>View Details</button>
                            </div>
                        </div>)
                }
            </div>
            <p className=' text-center mb-5 text-xl underline'><Link to='all-products'>View All Items</Link></p>
        </div>
    )
}

export default NewArrivals