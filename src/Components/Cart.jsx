import shoes from '../data/shoes.json'
import nikeLogo from '../assets/nike.png'
import ProductItem from './ProductItem'
import useLocalStorage from '../hooks/useLocalstorage'

const Cart = () => {
    const [value, setValue] = useLocalStorage('cartItem', [])

    return (
        <div className='relative bg-whiteG-0 box-border w-[360px] h-[600px] shadow-itemShadow rounded-[30px] px-[28px] overflow-hidden mb-[20px] md:mb-0'>
            <div className='absolute w-[300px] h-[300px] rounded-[100%] bg-yellowG-0 top-[-20%] left-[-50%] z-0'></div>
            <div className='relative my-[12px] block'>
                <img src={nikeLogo} className='block w-[50px] box-content overflow-clip' />
            </div>
            <div className="relative text-[24px] font-bold my-[16px]">
                Your cart
                <span className='float-right'>$3318.49</span>
            </div>
            <div className='relative overflow-y-scroll h-[calc(100%-98px)] no-scrollbar'>
                <div className=''>
                    <div>
                        {
                            value.map((item, index) => (
                                <ProductItem key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart