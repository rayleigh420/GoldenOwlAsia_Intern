import './App.css'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {

  return (
    // <div className='bg-red-400 relative h-[100vh] flex flex-col md:flex-row justify-between items-center flex-wrap px-[20xp] max-w-[760px] mx-auto my-0'>
    <div className='relative md:h-[100vh] flex flex-col md:flex-row justify-between items-center md:flex-wrap px-[20xp] max-w-[760px] mx-auto my-0 pt-[20px] md:pt-[0px]'>
      <div className='z-[-1] fixed w-[300%] h-[100%] top-[50%] left-[50%] rounded-[100%] translate-x-[-50%] skew-y-[-8deg] bg-yellowG-0 animate-[bgmove_8s_ease-in-out_infinite_alternate]'></div>
      <Products />
      <Cart />
    </div >
  )
}

export default App
