import React, { useEffect, useState } from 'react'

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data)
      })
  }, [])

  return (
    <div className=' container mx-auto'>
        <h1 className=' my-5 text-center'>Mamage Orders</h1>
        <table className='mx-auto my-10 table'>
          <thead >
            <tr className=''>
              <th>SL</th>
              <th>Order Status</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Address</th>
              <th>total Price</th>
              <th>Payment status</th>
              <th>Products</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((x,index) =>
                <tr key={x._id} className=''>
                  <td>{index+1}</td>
                  <td>{x.status}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                  <td>{x.address}</td>
                  <td>{x.price+60}</td>
                  <td>unpaid</td>
                  <td>{x.products.map((y,index)=><span key={index}>{y.name} &nbsp;&nbsp; </span>)}
                  </td>
                </tr>)
            }
          </tbody>
        </table>
    </div>
  )
}

export default ManageOrders