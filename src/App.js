

import './App.css';
import data from "./data"
import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import Stocks from "./Pages/Stocks";
import StockDetail from './Pages/StockDetail';

function App() {

return (
<div className="App">
  <Nav />
  <Switch>
   
    <Route path="/about">
      <About />
    </Route>
    <Route path="/stocks/:symbol" render={(routerProps)=>
      <StockDetail {...routerProps} />}
      />
    <Route path="/stocks">
      <Stocks />
    </Route>

  </Switch>
</div>
);
}

export default App;