const ProductItem = ({ item }) => {
    return (
        <div className="flex py-[20px]">
            <div className="flex-0">
                <div className="w-[90px] h-[90px] rounded-[100%] mr-[34px] bg-yellow-300">
                    <div className="">
                        <img src={item.image} className="ml-0 block w-[140%] max-w-[140%] overflow-clip rotate-[-28deg] box-content translate-y-[-40px] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem