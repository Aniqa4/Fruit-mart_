import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'
import TopHeadlines from '../Components/TopHeadlines';

function AllProducts() {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fruits')
      .then(res => res.json())
      .then(data => {
        setfruits(data)
      })
  }, [])

  console.log(fruits);
  return (
    <div>
      <TopHeadlines></TopHeadlines>
      <Title title={'all products'}></Title>
      <div className=' container mx-auto grid grid-cols-6 gap-5 mb-5'>
        {
          fruits.map((fruit,index) =>
            <div key={index} className=' bg-yellow-300'>
              <img src={fruit.image} className=' rounded' />
              <div className='p-5'>
                <h1 className=' font-semibold text-xl'>{fruit.name}</h1>
                <p>Price/kg: ${fruit.price}</p>
                <p>Origin: {fruit.origin}</p>
                <p>Available Quanlity: {fruit.quantity}kg</p>
                <button className='rounded px-2 bg-white hover:bg-slate-400'>Add to cart</button>
                <button className='rounded px-2 bg-white hover:bg-slate-400'>View Details</button>
              </div>
            </div>)
        }
      </div>
      <p className=' text-center mb-5 underline'>See More</p>
    </div>
  )
}

export default AllProducts