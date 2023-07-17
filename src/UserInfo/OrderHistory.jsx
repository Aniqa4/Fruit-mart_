import React, { useEffect, useState } from 'react'
import Title from '../Components/Title'

function OrderHistory({ email }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data)
      })
  }, [])

  const myOrders = orders.filter(x => x.email === email)
  console.log('buyer', myOrders);
  return (
    <div className=' container mx-auto'>
      <Title title={'order history'}></Title>
      <div>
        <table className='mx-auto my-10 table'>
          <thead >
            <tr className=''>
              <th>SL</th>
              <th>Order Status</th>
              <th>Price</th>
              <th>deliveryCharge</th>
              <th>Total Price</th>
              <th>Payment status</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {
              myOrders.map((x,index) =>
                <tr key={x._id} className=''>
                  <td>{index+1}</td>
                  <td>{x.status}</td>
                  <td>{x.price}</td>
                  <td>{x.deliveryCharge}</td>
                  <td>{x.price+60}</td>
                  <td>Unpaid</td>
                  <td>{x.products.map((y,index)=><span key={index}>{y.name} &nbsp;&nbsp; </span>)}
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory