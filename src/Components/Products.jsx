import shoes from '../data/shoes.json'
import nikeLogo from '../assets/nike.png'
import check from '../assets/check.png'
import useLocalStorage from '../hooks/useLocalstorage'
import { useContext } from 'react'
import CartContext from '../context/CartProvider'

const Products = () => {
    // const [value, setValue] = useLocalStorage('cartItem', [])
    const { cart, setCart } = useContext(CartContext)

    const addProduct = (item) => {
        if (cart.find(product => product.id == item.id)) {
            return;
        }
        const cartItem = [...cart, { ...item, amount: 1 }]
        setCart(cartItem)
    }

    console.log(cart)

    return (
        <div className='relative bg-whiteG-0 box-border w-[360px] h-[600px] shadow-itemShadow rounded-[30px] px-[28px] overflow-hidden mb-[20px] md:mb-0'>
            <div className='absolute w-[300px] h-[300px] rounded-[100%] bg-yellowG-0 top-[-20%] left-[-50%] z-0'></div>
            <div className='relative my-[12px] block'>
                <img src={nikeLogo} className='block w-[50px] box-content overflow-clip' />
            </div>
            <div className="relative text-[24px] font-bold my-[16px]">Our Products</div>
            <div className='relative overflow-y-scroll h-[calc(100%-98px)] no-scrollbar'>
                <div className=''>
                    {
                        shoes?.shoes.map((item, index) => (
                            <div key={index} className='py-[20px] md:py-[40px] first:pt-0'>
                                <div style={{ backgroundColor: `${item.color}` }} className={`bg-[${item.color}]-1 ` + 'rounded-[30px] h-[380px] flex items-center overflow-hidden'}>
                                    <img src={item.image} className='w-[100%] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)] rotate-[-24deg] ml-[-16px]' />
                                </div>
                                <div className='text-[20px] font-bold mt-[26px] mb-[20px] leading-6'>
                                    {item.name}
                                </div>
                                <div className='text-[13px] text-[#777] leading-[28.8px] mb-[20px]'>
                                    {item.description}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className='text-[18px] font-bold'>${item.price}</div>
                                    {
                                        cart.find(product => product.id == item.id) ?
                                            <div className='relative w-[46px] cursor-default bg-yellowG-0 font-bold text-[14px] box-border h-[46px] min-w-[46px] py-[16px] px-[20px] rounded-[100%] whitespace-nowrap flex items-center overflow-hidden '>
                                                {/* <p className='text-[20px]'>&#10004;</p> */}
                                                <img src={check} className='w-[20px] max-w-[500%] translate-x-[-30%]' />
                                            </div>
                                            :
                                            <div className='relative cursor-pointer bg-yellowG-0 font-bold text-[14px] box-border w-auto h-[46px] min-w-[46px] py-[16px] px-[20px] rounded-[100px] flex items-center overflow-hidden whitespace-nowrap transition-all ease-in duration-[250ms] delay-0' onClick={() => addProduct(item)}>
                                                <p>ADD TO CART</p>
                                            </div>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products