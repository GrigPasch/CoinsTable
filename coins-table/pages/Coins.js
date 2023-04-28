const Coins = ({name, symbol, price, highestPrice, lowestPrice, priceChangePercentage, image}) => {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-center ">
            <table className="w-full text-sm table-fixed text-black text-center border-black">
                <thead className="text-xs text-black uppercase bg-gray-50 ">
                    <tr className="text-center">
                        <th  className="px-6 py-6">
                            name
                        </th>
                        <th  className="px-6 py-6">
                            Symbol
                        </th>
                        <th  className="px-6 py-6">
                            Current Price
                        </th>
                        <th  className="px-6 py-6">
                            Highest Price past 24h
                        </th>
                        <th  className="px-6 py-6">
                            Lowest Price past 24h
                        </th>
                        <th  className="px-6 py-6">
                            Price Change Percentage Past 24h
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b ">
                        <td className="px-6 py-6">
                            {name}
                        </td>
                        <td className="px-6 py-6 flex flex-col justify-center items-center">
                            <img className="w-[35px] h-[35px]"src={image}/>    
                            <p>{symbol}</p>
                        </td>
                        <td className="px-6 py-6">
                            {price}
                        </td>
                        <td className="px-6 py-6">
                            {highestPrice}
                        </td>
                        <td className="px-6 py-6">
                            {lowestPrice}
                        </td>
                        <td className="px-6 py-6">
                            {priceChangePercentage}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
         
    )
}

export default Coins