import React from "react";
import { Link } from "react-router-dom";

export default function Stocks({stocks}) {
 
      return (
        <div className="stocks">
          {stocks.map((stock) => {
            const { name, symbol } = stock;
    
            return (
              <Link to={`/stocks/${symbol}`}>
                  <ul style={{marginLeft: "2%"}}>
                      <li style={{marginRight: "70%", textAlign:"left"}}>
                      {name} 
                      </li>
                  </ul>
               
              </Link>
            );
          })}
        </div>
      );
    };