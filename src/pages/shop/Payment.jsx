import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import useCart from '../../hooks/useCart'
const stripePromise=loadStripe(import.meta.env.VITE_Stripe_PK)

const Payment = () => {

    console.log(stripePromise);

    const [cart]=useCart();
    const cartTotal=cart.reduce((sum,item)=>sum+item.price,0)
    // console.log(cartTotal);
    // console.log(cart);
    const totalPrice=parseFloat(cartTotal.toFixed(2));
    // console.log(totalPrice);
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28 '>
        
        <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={totalPrice}/>

        </Elements>
    </div>
  )
}

export default Payment