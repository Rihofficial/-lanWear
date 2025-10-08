import React, { useContext } from 'react'
import { ShopContext } from '../pages/context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const { currency, getCartAmount, delivery_charges } = useContext(ShopContext)
    


  return (
      <section>
          <Title title1={'Cart'} title2={'Total'} title1Styles={'h3'} />
          <div>
              <h5>SubTotal:</h5>
              <p>{currency }{getCartAmount()}</p>
          </div>
    </section>
  )
}

export default CartTotal
