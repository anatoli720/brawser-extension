import React, { useState, useEffect } from 'react';

const URL = 'https://coinmarketcap-proxy.wvservices.exchange/tickers';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log('Error', err))
  }, [])

  let res = data.map((data) => {
    return <li key={data.symbol}>{data.symbol}</li>
  })

  const bit = data.filter((item) => item.symbol === 'BTC-WXG/USDT-WXG')
  let prise = bit.map((item, index) => {
    return <li key={index} className='kurs'><span>Курс пары токенов: {item.symbol + " составляет: " + item.last_price}</span></li>
  })
  console.log(bit)
  console.log(data)
  return (
    <div className='token'>
      <ul >
        {prise}
      </ul>

    </div>
  );
}

export default App;
