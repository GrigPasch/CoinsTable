import CoinList from "./CoinList";


export default function Home({coinsData}) {
  console.log(coinsData);
  return (
    <>
      <CoinList coinsData={coinsData}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en')

  const coinsData = await res.json();

  return {
    props: {
      coinsData
    }
  }
}
