import React, { useState } from 'react';
import Coins from './Coins';

const CoinList = ({ coinsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coinsData.slice(indexOfFirstCoin, indexOfLastCoin);

  const totalPages = Math.ceil(coinsData.length / coinsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-3 py-1 rounded-full mx-1 ${
            currentPage === i ? 'bg-black text-[#fff]' : 'bg-[#fff] text-black'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      {currentCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            highestPrice={coin.high_24h}
            lowestPrice={coin.low_24h}
            priceChangePercentage={coin.price_change_percentage_24h}
            image={coin.image}
          />
        );
      })}
      <div className='flex justify-center my-4'>{renderPagination()}</div>
    </>
  );
};

export default CoinList;
