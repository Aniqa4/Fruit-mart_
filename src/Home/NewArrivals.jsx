import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'

function NewArrivals() {
    const [fruits, setfruits] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/new-arrivals')
            .then(res => res.json())
            .then(data => {
                setfruits(data)
            })
    }, [])
    return (
        <div>
            <Title title='New Arrivals'></Title>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-5'>
                {
                    fruits.map((fruit, index) =>
                        <div key={index} className=' bg-yellow-300'>
                            <img src={fruit.image} className=' rounded' />
                            <div className='p-5'>
                                <h1 className=' text-xl'>Fruit Name</h1>
                                <p>Price</p>
                                <button className='rounded px-5 py-2 bg-white me-2 hover:bg-slate-400'>Add to cart</button>
                                <button className='rounded px-5 py-2 bg-white hover:bg-slate-400'>View Details</button>
                            </div>
                        </div>)
                }
            </div>
            <p className=' text-center mb-5 text-xl underline'><Link to='all-products'>View All Items</Link></p>
        </div>
    )
}

export default NewArrivals