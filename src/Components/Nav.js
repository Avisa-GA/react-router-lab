
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/stocks">
        <div style={{fontWeight: "bolder"}}>Home</div>
      </Link>
      <Link to="/about">
        <div style={{fontWeight:"lighter"}}>About</div>
      </Link>
    </div>
  );
};

export default Nav;