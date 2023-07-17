import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'
import TopHeadlines from '../Components/TopHeadlines';
import Swal from 'sweetalert2';

function AllProducts() {
  const [fruits, setfruits] = useState([]);

  useEffect(() => {
    fetch('https://fruit-mart-server-side-aniqa4.vercel.app/fruits')
      .then(res => res.json())
      .then(data => {
        setfruits(data)
      })
  }, [])

  let selectedItems=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];

  const handleCart=(product_id,name,image,price)=>{
    //console.log({product_id,name,image,price});
    const myOrder={product_id,name,image,price};
    selectedItems.push(myOrder)
    console.log(selectedItems);
    localStorage.setItem('cart',JSON.stringify(selectedItems));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added to Cart!',
      showConfirmButton: false,
      timer:500

  })
  }

  //console.log(fruits);
  return (
    <div>
      <TopHeadlines></TopHeadlines>
      <Title title={'all products'}></Title>
      <div className=' text-xs md:text-base container px-5 md:mx-auto grid grid-cols-2 md:grid-cols-6 gap-5 mb-5'>
        {
          fruits.map((fruit,index) =>
            <div key={index} className=' bg-yellow-300'>
              <img src={fruit.image} className=' rounded' />
              <div className='md:p-5 p-2'>
                <h1 className=' font-semibold text-xl'>{fruit.name}</h1>
                <p>Price/kg : {fruit.price} Tk</p>
                <p>Origin: {fruit.origin}</p>
                <p>Available Quanlity: {fruit.quantity}kg</p>
                <button onClick={()=>handleCart(fruit._id,fruit.name,fruit.image,fruit.price)}
                className='rounded mb-2 mg:mb-0 px-2 bg-white hover:bg-slate-400'>Add to cart</button> &nbsp;
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