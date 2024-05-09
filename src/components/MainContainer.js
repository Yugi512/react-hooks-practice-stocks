import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, setStocks,createStocks, addStock, passFilter}) {
  const [portfolioStocks, setPortfolio] = useState([])
  const [selectValue, setSelectValue] = useState("")
  const [checkAlpha, setCheckAlpha] = useState(false)
  const [checkPrice, setCheckPrice] = useState(false)

  function createNewPortfolio(stock){
    createStocks(stock)
    setPortfolio([...portfolioStocks,stock])
  }

  function setStockList(addBack){
    const filtered = portfolioStocks.filter((stock) => stock.id !== addBack.id);
    addStock(addBack)
    setPortfolio(filtered)
  }
  
  const types = stocks.filter((stock) => {
    if(selectValue === "") return stock;
    if(stock.type.includes(selectValue)){return stock}}
  );
  
  const alphaFilter = [...stocks].sort((firstStock, secondStock) => {
    const first = firstStock.name.toLowerCase()
    const second = secondStock.name.toLowerCase()
    if(first > second){
      return 1
    } 
    if(second > first){
      return -1
    } 
    return 0
  })

  const priceFilter = [...stocks].sort((firstStock, secondStock) => {
    const first = firstStock.price
    const second = secondStock.price

    if(first > second){
      return 1
    }
    if(first < second){
      return -1
    }
    return 0
  })  


  function handleFilter(){
    if(checkAlpha === true){setStocks(alphaFilter)} else{ return null}
    if(checkPrice === true){setStocks(priceFilter)} else {return null}
  }


  return (
    <div>
      <SearchBar selectValue={selectValue} setSelectValue={setSelectValue} setCheckAlpha={setCheckAlpha} setCheckPrice={setCheckPrice} checkAlpha={checkAlpha} checkPrice={checkPrice} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={types} createNewPortfolio={createNewPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer  portfolioStocks={portfolioStocks} setStockList={setStockList} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
