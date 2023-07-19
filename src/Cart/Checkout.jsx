import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Authentication/AuthProvider'
import TopHeadlines from '../Components/TopHeadlines';
import Title from '../Components/Title';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const email = user?.email;
    const existingUser = users.find(x => x.email === email)
    //console.log(existingUser);

    const arrayOfItems = localStorage.getItem('cart');
    const cartItems = JSON.parse(arrayOfItems);

    //calculate total price
    const arrayOfPrice = cartItems?.map(x => parseFloat(x.price));
    let totalPrice = 0;
    const calculatePrice = (price) => {
        totalPrice += price;
    }
    arrayOfPrice?.forEach(calculatePrice);
    //console.log(totalPrice);

    const sendToDB=()=>{
        const name=existingUser?.name;
        const email=existingUser?.email;
        const address='Dhaka,Bangladesh';
        const products=cartItems;
        const status='processing';
        const price=totalPrice;
        const deliveryCharge=60;
        const newItem = { name,email ,address,status,price,deliveryCharge, products}

        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/order', {
            method: 'POST',
            headers:
                { 'content-type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged===true) {
                    alert('Order has been placed. Track order from order history page')
                    localStorage.removeItem('cart')
                    navigate(from, { replace: true })
                }
            })
    }




    return (
        <div>
            <TopHeadlines></TopHeadlines>
            <Title title={'Confirm Order'}></Title>
            <div className='lg:w-4/12 mx-auto mb-10 bg-yellow-200 p-5'>
                <h1>Buyer Name : {existingUser?.name}</h1>
                <p>Email: {existingUser?.email}</p>
                <p>Address: Dhaka, Bangladesh</p>
            </div>
            <div className='divider container mx-auto'>order summary</div>
            <div className='lg:w-4/12 mx-auto mb-10 bg-yellow-200 p-5'>
                <table className='lg:ms-10'>
                    <tbody>
                        {
                            cartItems.map((x, index) =>
                                <tr key={index} className='grid grid-cols-6 items-center text-xs lg:text-base gap-5'>
                                    <td>{index + 1}</td>
                                    <td><img src={x.image} className='w-16' /></td>
                                    <td>{x.name}</td>
                                    <td>1kg</td>
                                    <td>{x.price} Tk</td>
                                </tr>)
                        }
                    </tbody>
                </table>
                {
                    cartItems && <>
                        <div className='divider'></div>
                        <div className=' font-semibold text-center'>
                            <h1>Subtotal={totalPrice} Taka</h1>
                            <p>Shipping: 60 Taka (Cash On Delivery)</p>
                            <p>Total : {totalPrice + 60} Taka</p>
                            <button onClick={sendToDB} className=' bg-white px-3 py-2 my-2 hover:bg-slate-300 shadow'>Confirm Order</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Checkout