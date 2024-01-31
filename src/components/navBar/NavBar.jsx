

import "./style.scss";
import searchIcon from './images/search.png';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main_navBar">

      <div className="dashboard_name">
        <Link className="dashBoard_name" to="/">
          Dashboard
        </Link>
      </div>

      <div className="searchBarContainer">
        <input
        type="text"
        placeholder="Enter your search"
        />
        <div className="searchBarIcon">
          <img src={searchIcon} alt="" />
        </div>
      </div>

    </div>
  )
}

export default NavBar
