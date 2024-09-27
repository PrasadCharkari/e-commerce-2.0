import SingleProductCart from '@/components/SingleProductCart'
import React from 'react'

function page() {
    return (
        <div className='bg-slate-100'>
            <div className='flex justify-between p-8 bg-slate-700 text-white text-2xl font-semibold sticky top-0 z-10'>
                <div className='hidden sm:block md:block'>Cart</div>
                <div className='lg:mr-10 sm:justify-end'>SubTotal ( 1 item ): ₹ 1000</div>
            </div>
            <div className='overflow-y-auto p-1'>
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
                <SingleProductCart />
            </div>
        </div>

    )
}

export default page