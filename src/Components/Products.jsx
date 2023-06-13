import shoes from '../data/shoes.json'
import nikeLogo from '../assets/nike.png'

const Products = () => {
    return (
        <div className='relative bg-whiteG-0 box-border w-[360px] h-[600px] shadow-itemShadow rounded-[30px] px-[28px] overflow-hidden mb-[20px] md:mb-0'>
            <div className='relative my-[12px] block'>
                <img src={nikeLogo} className='block w-[50px] box-content overflow-clip' />
            </div>
            <div className="relative text-[24px] font-bold my-[16px]">Our Products</div>
            <div className='relative overflow-y-scroll h-[calc(100%-98px)] no-scrollbar'>
                <div className=''>
                    {
                        shoes?.shoes.map((item, index) => (
                            <div key={index} className='py-[20px] md:py-[40px] first:pt-0'>
                                <div className={`bg-[${item.color}]-1 ` + 'rounded-[30px] h-[380px] flex items-center overflow-hidden'}>
                                    <img src={item.image} />
                                </div>
                                <div className='text-[20px] font-bold mt-[26px] mb-[20px] leading-6'>
                                    {item.name}
                                </div>
                                <div className='text-[13px] text-[#777] leading-[28.8px] mb-[20px]'>
                                    {item.description}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className='text-[18px] font-bold'>${item.price}</div>
                                    <div className='relative cursor-pointer bg-yellowG-0 font-bold text-[14px] box-border w-auto h-[46px] min-w-[46px] py-[16px] px-[20px] rounded-[100px] flex items-center overflow-hidden whitespace-nowrap'>
                                        <p>ADD TO CART</p>
                                    </div>
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