import React, { useContext, useEffect, useState } from 'react'
import Title from '../Components/Title'
import TopHeadlines from '../Components/TopHeadlines'
import { MdDeleteForever } from 'react-icons/md'
import { AuthContext } from '../Authentication/AuthProvider'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function Cart() {
  const { user } = useContext(AuthContext)
  const [cartItems, setCartItems] = useState([])

  //get items from local storage
  useEffect(() => {
    const arrayOfItems = localStorage.getItem('cart');
    const cart = JSON.parse(arrayOfItems);
    setCartItems(cart)
  }, [])

  //delete form local storage
  const deleteItem = (index) => {
    const arrayOfItems = localStorage.getItem('cart');
    const arrayOfObjects = JSON.parse(arrayOfItems)
    arrayOfObjects.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(arrayOfObjects));
    setCartItems(arrayOfObjects);
    console.log(arrayOfObjects);
  }

  //calculate total price
  const arrayOfPrice = cartItems?.map(x => parseFloat(x.price));
  let totalPrice = 0;
  const calculatePrice = (price) => {
    totalPrice += price;
  }
  arrayOfPrice?.forEach(calculatePrice);
  //console.log(totalPrice);

  const warning = () => {
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Please log in to confirm order.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  return (
    <div>
      <TopHeadlines></TopHeadlines>
      <Title title={'Review order'}></Title>
      <div className='lg:w-4/12 mx-auto mb-10 bg-yellow-200 p-5'>
        <table className='lg:ms-10'>
          <tbody>
            {
              cartItems && cartItems[0]!==undefined? cartItems.map((x, index) =>
                <tr key={index} className='grid grid-cols-6 items-center text-xs lg:text-base gap-5'>
                  <td>{index + 1}</td>
                  <td><img src={x.image} className='w-16' /></td>
                  <td>{x.name}</td>
                  <td>1kg</td>
                  <td>{x.price} Tk</td>
                  <td onClick={() => deleteItem(index)} className=' text-red-800 text-xl'><MdDeleteForever /></td>
                </tr>) : <tr><td>You have not selected any item</td></tr>
            }
          </tbody>
        </table>
        {
          cartItems && cartItems[0]!==undefined && <>
            <div className='divider'></div>
            <div className=' font-semibold text-center'>
              <p>Total : {totalPrice} Taka + Delivery Charge</p>
              {
                user ? <button className=' bg-white px-3 py-2 my-2 hover:bg-slate-300 shadow'><Link to="/cart/checkout">Checkout</Link></button> :
                  <button onClick={warning} className=' bg-white px-3 py-2 my-2 hover:bg-slate-300 shadow'>Checkout</button>
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Cart