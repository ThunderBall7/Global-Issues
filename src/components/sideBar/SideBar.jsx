
import './style.scss'

import dashboardLogo from './images/dashboard.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from './images/Logo.png';
import africa from './images/africa.png';
import ageing from './images/ageing.png';
import aids from './images/aids.png';
import children from './images/children.png';
import climateChange from './images/climateChange.png';
import democracy from './images/democracy.png';
import food from './images/food.png';
import health from './images/health.png';
import population from './images/population.png';
import poverty from './images/poverty.png';
import refugees from './images/refugees.png';
import water from './images/water.png';
import youth from './images/youth.png';




const SideBar = () => {

  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (value === "ViewMore"){
      navigate('/')
    }
    else if (value) {
      navigate(`/${value}`);
    }
  }, [value, navigate]);

  return (
    <div className='main_sideBar'>

      <div className='mainLogo'>
        <Link to="/">
        <img src={Logo} alt="GLOBAL ISSUES" />
        </Link>
      </div>

      <div className='dashboard_overview'>
        <img src={dashboardLogo} alt="" />
        <p>Overview</p>
      </div>
      <div className='issues_list'>
        <ul>
          <li>

            <Link className="main_links" to='/Africa'>
              <img src={africa} alt="" />
              <span>Africa</span>
            </Link>

            <Link className="main_links" to='/Ageing'>
              <img src={ageing} alt="" />
              <span>Ageing</span>
            </Link>

            <Link className="main_links" to='/Aids'>
              <img src={aids} alt="" />
              <span>Aids</span>
            </Link>

            <Link className="main_links" to='/Children'>
              <img src={children} alt="" />
              <span>Children</span>

            </Link>

            <Link className="main_links" to='/ChildNYouthSafely'>
              <img src={youth} alt="" />
              <span>Child and Youth Safety</span>
            </Link>

            <Link className="main_links" to='/ClimateChange'>
                <img src={climateChange} alt="" />
                  <span>Climate Change</span>
            </Link>
            <div>
              <select name="category" className='selectOptions' onChange={handleChange}>
                <option value="ViewMore">View More</option>

                <option value="Democracy">
                  <img src={democracy} alt="" />
                  <span>Democracy</span>
                </option>
                <option value="Food">
                <img src={food} alt="" />
                  <span>Food</span>
                </option>
                <option value="Health">
                <img src={health} alt="" />
                  <span>Health</span>
                </option>
                <option value="Population">
                <img src={population} alt="" />
                  <span>Population</span>
                </option>
                <option value="Poverty">
                <img src={poverty} alt="" />
                  <span>Poverty</span>
                </option>
                <option value="Refugees">
                <img src={refugees} alt="" />
                  <span>Refugees</span>
                </option>
                <option value="Water">
                <img src={water} alt="" />
                  <span>Water</span>
                </option>

              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className='sideBar_footer'>
        <p className='dataSource'>
          Data Source
        </p>
        <p className='stories'>Stories</p>
      </div>


    </div>
    )
}

export default SideBar;
