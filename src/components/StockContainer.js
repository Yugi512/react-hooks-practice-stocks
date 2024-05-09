import React,{useState} from "react";
import Stock from "./Stock";

function StockContainer({stocks,createNewPortfolio}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => <Stock key={stock.name} stock={stock} callBack={createNewPortfolio}/>)}
    </div>
  );
}

export default StockContainer;
