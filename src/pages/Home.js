import React from 'react'
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
      <h2 className='heading'> Welcome to our store !</h2>
      <section>
        <h3>Products</h3>
        <Products/>
      </section>
    </div>
  )
}

//state is used by multicomponent application then use redux