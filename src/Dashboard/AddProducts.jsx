import React from 'react'
import Title from '../Components/Title'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddProducts() {
    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.productName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const origin = form.origin.value;
        const image = form.photo.value;
        
        const newItem = { name, image, price, quantity, origin }

        fetch('https://fruit-mart-server-side-aniqa4.vercel.app/fruit', {
            method: 'POST',
            headers:
                { 'content-type': 'application/json' },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Item has been added!',
            showConfirmButton: false,
            timer: 1500

        })
    }
    return (
        <div className=' container mx-auto px-5'>
            <Title title={'add items'}></Title>
            <form onSubmit={handleAdd} className='grid grid-cols-1 gap-5'>
                <input type="product-name" name='productName' placeholder='Product Name'
                    className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                <input type="text" name='price' placeholder='Product Price'
                    className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                <input type="text" name='origin' placeholder='Country of Origin'
                className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                <input type="number" name='quantity' placeholder='Quantity(kg)'
                className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                <input type="text" name='photo' placeholder='PhotoURL'
                className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 shadow-inner' />
                <input type="submit" value="ADD" className=' rounded px-2 py-3  bg-gray-100 hover:bg-gray-200 font-semibold' />
            </form>
            <p className=' my-10 underline text-center'>
                <Link to='/user-info'>Retun to dashboard</Link>
            </p>
        </div>
    )
}
