import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import data from "./data"
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import Stocks from "./Pages/Stocks";
import StockDetail from './Pages/StockDetail';
import Home from "./Pages/Home"


function App() {
  const stocks = data;
return (
<div className="App">
  <Nav />
  <Switch>
   <Route exact path="/">
     <Home />
   </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/stocks/:symbol" render={(routerProps)=>
      <StockDetail stocks={stocks} {...routerProps} />}
      />
    <Route path="/stocks">
      <Stocks stocks={stocks}/>
    </Route>

  </Switch>
</div>
);
}

export default App;