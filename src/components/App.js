import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch(" http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stock) => setStocks(stock))
  },[])

  function createStocks(getRidOf){
    const filtered = stocks.filter((stock) => stock.id !== getRidOf.id);
    setStocks(filtered)
  }

  function addStock(stock){
    setStocks([...stocks,stock])
  }

  function passFilter(filtered){
    setStocks(filtered)
  }
 

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} createStocks={createStocks}  addStock={addStock} passFilter={passFilter} setStocks={setStocks}/>
    </div>
  );
}

export default App;
