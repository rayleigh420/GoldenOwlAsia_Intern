import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import shoes from './data/shoes.json'
import nikeLogo from './assets/nike.png'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {
  const a = [1, 2]
  console.log(shoes)

  return (
    <div className='relative h-[100vh] flex flex-col md:flex-row justify-between items-center flex-wrap px-[20xp] max-w-[760px] mx-auto my-0'>
      <Products />
      <Cart />
    </div >
  )
}

export default App
