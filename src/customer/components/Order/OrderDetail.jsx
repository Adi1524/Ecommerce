import React from 'react'
import AddressCard from "../AddressCard/AddressCard"
import OrderTracker from './OrderTracker'

const OrderDetail = () => {
  return (
    <div>
        <div className='p-10'>

            <div>
                <h1 className='font-bold py-7 text-xl'> Delivery Address</h1>
            <AddressCard/>

            </div>

            <div>
              <OrderTracker/>
            </div>
       

        </div>
        
        
    </div>
  )
}

export default OrderDetail