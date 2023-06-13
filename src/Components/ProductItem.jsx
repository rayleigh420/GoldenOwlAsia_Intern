import trash from '../assets/trash.png'
import useLocalStorage from '../hooks/useLocalstorage'

const ProductItem = ({ item }) => {
    const [value, setValue] = useLocalStorage('cartItem', [])

    return (
        <div className="flex py-[20px]">
            <div className="flex-0">
                <div className="w-[90px] h-[90px] rounded-[100%] mr-[34px]" style={{ backgroundColor: `${item.color}` }}>
                    <div className="">
                        <img src={item.image} className="ml-0 block w-[140%] max-w-[140%] overflow-clip box-content rotate-[-28deg] translate-y-[-35px] translate-x-[-20px] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)]" />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="text-[14px] font-bold leading-[25px] mb-[10px]">
                    {item.name}
                </div>
                <div className="text-[20px] font-bold mb-[16px]">
                    ${item.price}
                </div>
                <div className="flex justify-start items-center">
                    <div className="flex-1 flex justify-start items-center">
                        <div className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-[100%] bg-[#eee] text-[16px] font-bold flex justify-center items-center">-</div>
                        <div className="text-[14px] mx-[8px] w-[20px] text-center">1</div>
                        <div className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-[100%] bg-[#eee] text-[16px] font-bold flex justify-center items-center">+</div>
                    </div>
                    <div className='w-[28px] h-[28px] cursor-pointer rounded-[100%] flex justify-center items-center bg-yellowG-0'>
                        <img src={trash} className='w-[16px] h-[16px] overflow-clip' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem