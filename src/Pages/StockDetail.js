
import { useState, useEffect } from "react";
import data from "../data";

export default function StockDetail(props) {

    const symbol = props.match.params.symbol;

     const name = data.map((ele) => {
         if (ele.symbol === symbol) {
         return ele.name
         }
     })
     const lastPrice = data.map((ele) => {
        if (ele.symbol === symbol) {
        return ele.lastPrice
        }
    })

    const high = data.map((ele) => {
        if (ele.symbol === symbol) {
        return ele.high
        }
    })

    const low = data.map((ele) => {
        if (ele.symbol === symbol) {
        return ele.low
        }
    })

    const open = data.map((ele) => {
        if (ele.symbol === symbol) {
        return ele.open
        }
    })
 
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
       <td>{name}</td>
       <td>{symbol}</td>
       <td>{lastPrice}</td>
       <td>{high}</td>
       <td>{low}</td>
       <td>{open}</td>
     </tr>
   
  </tbody>
</table>


        </div>
    );
};