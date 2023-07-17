import React from 'react'
import Title from '../Components/Title'
import { Link } from 'react-router-dom'
import ManageOrders from './ManageOrders'

function Dashboard() {
  return (
    <div className=' container mx-auto my-20'>
      <div className='divider'><Title title={'Dashboard'}></Title></div>
      <button className='flex mx-auto bg-yellow-300 font-semibold rounded px-3 text-xs py-2'>
        <Link to='add-products'>Add products</Link>
      </button>
      <ManageOrders></ManageOrders>
    </div>
  )
}

export default Dashboard