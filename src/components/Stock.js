import React, { useState } from "react";

function Stock({stock,callBack}) {
  const {id,ticker, name, type, price} = stock;
  const [isClicked,setClicked] = useState(false)

  function handleClick(e){
    setClicked(!isClicked)
    callBack(stock)
  }

  return (
    <div  >
      <div className="card" id={type} onClick={(e) => handleClick(e)}>
        <div className="card-body" id={id} >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
