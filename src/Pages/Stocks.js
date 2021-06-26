
import React from "react";
import { Link } from "react-router-dom";
import stocks from "../data"

export default function Stocks({stocks}) {
  
      return (
        <div className="stocks">
          {stocks.map((stock) => {
            const { name, symbol } = stock;
    
            return (
              <Link to={`/stocks/${symbol}`}>
                  <ul>
                      <li style={{marginRight: "70%", textAlign:"left", marginLeft: "2%"}}>
                      {name} 
                      </li>
                  </ul>
               
              </Link>
            );
          })}
        </div>
      );
    };