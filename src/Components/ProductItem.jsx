import { useContext, useState } from 'react'
import trash from '../assets/trash.png'
import CartContext from '../context/CartProvider'

const ProductItem = ({ item, updateAmount, deleteProduct }) => {
    // const [value, setValue] = useLocalStorage('cartItem', [])
    const { cart, setCart } = useContext(CartContext)
    const [del, setDel] = useState(false)

    const [amount, setAmount] = useState(item.amount)

    const handleIncrease = () => {
        setAmount(prev => prev + 1)
        updateAmount(item, amount + 1)
    }

    const handleDecrease = () => {
        if (amount > 1) {
            setAmount(prev => prev - 1)
            updateAmount(item, amount - 1)
        } else {
            // setTimeout(() => {
            //     setAmount(prev => prev - 1)
            // }, 500)
            deleteProduct(item)
        }
    }

    const handleDeleteCart = (item) => {
        // setAmount(prev => prev - 1)
        // setTimeout(() => {
        // }, 500)
        deleteProduct(item)
    }

    return (
        <div className={"flex py-[20px]"}>
            <div className="flex-0 ">
                <div className="w-[90px] h-[90px] rounded-[100%] mr-[34px] animate-imganimation" style={{ backgroundColor: `${item.color}` }}>
                    <div className="">
                        <img src={item.image} className="ml-0 block w-[140%] max-w-[140%] overflow-clip box-content rotate-[-28deg] translate-y-[-35px] translate-x-[-20px] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)]" />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="text-[14px] font-bold leading-[25px] mb-[10px] animate-nameanimation">
                    {item.name}
                </div>
                <div className="text-[20px] font-bold mb-[16px] animate-priceanimation">
                    ${item.price}
                </div>
                <div className="flex justify-start items-center animate-amountanimation">
                    <div className="flex-1 flex justify-start items-center">
                        <div className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-[100%] bg-[#eee] text-[16px] font-bold flex justify-center items-center hover:bg-gray-300 transition-all ease-linear duration-[200ms] delay-0" onClick={handleDecrease}>-</div>
                        <div className="text-[14px] mx-[8px] w-[20px] text-center">{amount}</div>
                        <div className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-[100%] bg-[#eee] text-[16px] font-bold flex justify-center items-center hover:bg-gray-300 transition-all ease-linear duration-[200ms] delay-0" onClick={handleIncrease}>+</div>
                    </div>
                    <div className='w-[28px] h-[28px] cursor-pointer rounded-[100%] flex justify-center items-center bg-yellowG-0 hover:shadow-[-2px_2px_4px_rgba(0,0,0,0.15)] hover:bg-[#f8d43f]' onClick={() => handleDeleteCart(item)}>
                        <img src={trash} className='w-[16px] h-[16px] overflow-clip' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductItem