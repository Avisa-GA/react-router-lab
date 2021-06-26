import React from "react";
import { useState, useEffect } from "react";
import data from "../data";


export default function StockDetail(props) {

    const symbol = props.match.params.symbol;

    const stock = props.stocks.find(s => s.symbol === symbol)
 
    return (
        <div>
      
            <table>
  <thead>
    <tr>
      <th>name</th>
      <th>symbol</th>
      <th>last price</th>
      <th>high</th>
      <th>low</th>
      <th>open</th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td>{stock.name}</td>
       <td>{stock.symbol}</td>
       <td>{stock.lastPrice}</td>
       <td>{stock.high}</td>
       <td>{stock.low}</td>
       <td>{stock.open}</td>
     </tr>
   
  </tbody>
</table>


        </div>
    );
};