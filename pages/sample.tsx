import React from "react";
import StockContextProvider from "../contexts/StockContext";

const sample = () => {
  const onClicksubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form name="id" onSubmit={(e) => onClicksubmit(e)}>
        <input type="text" name="ononono" />
        <input type="submit" value="検索" />
      </form>
    </div>
  );
};

export default sample;
