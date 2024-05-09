import React, { useState } from "react";

function SearchBar({selectValue, setSelectValue, setCheckAlpha, setCheckPrice, checkAlpha, checkPrice, handleFilter}) {

  function handleCheckAlpha(e){
    setCheckAlpha(e.target.checked)
    handleFilter()
  }

  function handleCheckPrice(e){
    setCheckPrice(e.target.checked)
    handleFilter()
  }


  function handleChange(e){
    setSelectValue(e.target.value)
  }

  

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checkAlpha}
          onChange={(e) => {handleCheckAlpha(e)}}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checkPrice}
          onChange={(e) => {handleCheckPrice(e)}}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select defaultValue={selectValue} onChange={(e) => handleChange(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
