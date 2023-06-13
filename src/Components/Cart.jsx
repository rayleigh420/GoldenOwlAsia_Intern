import shoes from '../data/shoes.json'
import nikeLogo from '../assets/nike.png'
import ProductItem from './ProductItem'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartProvider'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const sum = cart.reduce((a, b) => (a + (Number(b.amount) * Number(b.price))), 0);
        setTotal(sum.toFixed(2))
    }, [cart])

    const updateAmount = (item, amount) => {
        if (amount != 0) {
            console.log(amount)
            const index = cart.findIndex(product => product.id == item.id)
            const cartClone = [...cart]
            cartClone[index].amount = amount
            setCart(cartClone)
        }
    }

    const deleteProduct = (item) => {
        const cartClone = cart.filter(product => product.id != item.id)
        setCart(cartClone)
    }

    return (
        <div className='relative bg-whiteG-0 box-border w-[360px] h-[600px] shadow-itemShadow rounded-[30px] px-[28px] overflow-hidden mb-[20px] md:mb-0'>
            <div className='absolute w-[300px] h-[300px] rounded-[100%] bg-yellowG-0 top-[-20%] left-[-50%] z-0'></div>
            <div className='relative my-[12px] block'>
                <img src={nikeLogo} className='block w-[50px] box-content overflow-clip' />
            </div>
            <div className="relative text-[24px] font-bold my-[16px]">
                Your cart
                <span className='float-right'>${total}</span>
            </div>
            <div className='relative overflow-y-scroll h-[calc(100%-98px)] no-scrollbar'>
                {
                    cart.length == 0 ?
                        <div className='absolute'>
                            <p className='text-[14px] font-light'>Your cart is empty</p>
                        </div>
                        :
                        <div className=''>
                            <div>
                                {
                                    cart.map((item, index) => (
                                        <ProductItem key={index} item={item} updateAmount={updateAmount} deleteProduct={deleteProduct} />
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Cart