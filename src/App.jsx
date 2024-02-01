import './App.scss';
import NavBar from './components/navBar/NavBar';
import SideBar from './components/sideBar/SideBar';
import SmallTabs from './components/smallTabs/SmallTabs';
import Image from './assets/react.svg';
import kenyaImage from './assets/itu_kenya.jpg';
import { Africa, ChildNYouthSafely, Children, Ageing, Aids, ClimateChange, Democracy, Food, Health, Population, Poverty, Refugees, Water } from './components/pages';
import india from './assets/flags/india.png';
import russia from './assets/flags/russia.png';
import us from './assets/flags/us.png';
import china from './assets/flags/china.png';
import saudiArabia from './assets/flags/saudiArabia.png';
import japan from './assets/flags/japan.png';
import iran from './assets/flags/iran.png';
import germany from './assets/flags/germany.png';
import southKorea from './assets/flags/southKorea.png';
import indonesia from './assets/flags/indonesia.png';
import factory from './assets/otherImages/factory.png';
import power from './assets/otherImages/power.png';
import transportation from './assets/otherImages/transportation.png';
import birthRate from './assets/otherImages/birthRate.png';
import population1 from './assets/otherImages/population1.png';
import deathRate from './assets/otherImages/deathRate.png';
import globalTemp from './assets/otherImages/globalTemp.png';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LineChart from './components/chart/LineChart';
import { useEffect, useState } from 'react';
import RangeBar from './components/rangeBar/RangeBar';
import BarChart from './components/chart/BarChart';


function App() {

  const [xlabels, setXlables] = useState([]);
  const [ylabels, setYlables] = useState([]);
  console.log(xlabels);
  console.log(ylabels);

  const getData = async () => {

    const labels = []
    const temps = []
    try {
      const response = await fetch('/src/data/GlobalTempData.csv');
      const textResponse = await response.text();
      const data = textResponse.split('\n').slice(1);
      data.forEach((elem) => {
        const dataElem = elem.split(',');
        const year = dataElem[0];
        labels.push(parseFloat(year));
        const temp = dataElem[1];
        temps.push(parseFloat(temp) + 14);


        console.log(year, temp);
      });
      setXlables(labels)
      setYlables(temps)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <Router>
      <div className='main_app'>
        <SideBar className='side-bar' />

        <div className='content_wrapper'>
          <NavBar className='main_navBar' />
          <Routes>
            <Route path="/" element={
            <div>
              <div className="small_tabs">
                <SmallTabs title="Population" value="8.02 Billion" percentage="+ 0.99%" icon={population1} />
                <SmallTabs title="Global Temperature" value="15.5°C" percentage="+ 0.17°C" icon={globalTemp} />
                <SmallTabs title="Birth Rate" value="17.5/1000 People" percentage="- 1.15%" icon={birthRate} />
                <SmallTabs title="Death Rate" value="7.4/1000 People" percentage="+ 0.490%" icon={deathRate} />
              </div>

              <div className="thingscontent">
                <div>
                  <span>
                    <h2>Story</h2>
                    <h3>Itu Kenya 2018</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus dolorem! Vitae officiis reiciendis rerum animi reprehenderit quos, quas dolorum, nihil molestias, error et deserunt distinctio incidunt accusantium ipsum doloribus!
                    </p>
                    <h4>View More</h4>
                  </span>
                  <img src={kenyaImage} alt="" />
                </div>
                <div>
                  hello

                </div>
              </div>



              <div className="secondSection">
                <div className="amountSpent">
                  <div className='hivChart'>
                  <BarChart labelValue={[1990, 2000, 2010,2022]} data={{ labelName: "People living with HIV", datas: [10.5, 28.1, 34.7, 39.0] }} />
                  </div>
                  <div>
                    <div>
                      <p>Death from Aids</p>
                    </div>
                    <div className='aidsInfo'>
                      <div>
                        <p>Year: 1990</p>
                        <p>611,000</p>
                      </div>
                      <div>
                        <p>Year: 2000</p>
                        <p>2.8 Million</p>
                      </div>
                      <div>
                        <p>Year: 2010</p>
                        <p>1.6 Million</p>
                      </div>
                      <div>
                        <p>Year: 2022</p>
                        <p>630,000</p>
                      </div>

                    </div>
                    <div className='aidsInfoTerm'>
                        <p>The term AIDS applies to the most advanced stages of HIV infection</p>
                    </div>

                  </div>
                </div>
                <div className="graphArea">
                <LineChart labelValue={xlabels} data={{ labelName: "Global Average Temperature", datas: ylabels }} />
                </div>
              </div>

              <div className="thirdSection">
                <div className="thirdSectionFdiv">
                  <h2>Top 10 CO2-emitting countries in the world (Total CO2 in Mt) - EU JRC 2022</h2>
                  <div className='fSectionHeading'>
                    <p>Countries</p>
                    <p>Population</p>
                    <p>CO2 (Mt)</p>
                    <p>Global - 36.8 Billion Mt</p>
                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={china} alt="icon" />
                    <p>China</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>12667.43</h4>
                    <RangeBar value={12667.43}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={us} alt="icon" />
                    <p>United States</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>4853.78</h4>
                    <RangeBar value={4853.78}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={india} alt="icon" />
                    <p>India</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>2693.03</h4>
                    <RangeBar value={2693.03}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={russia} alt="icon" />
                    <p>Russia</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>1909.04</h4>
                    <RangeBar value={1909.04}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={japan} alt="icon" />
                    <p>Japan</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>1082.65</h4>
                    <RangeBar value={1082.65}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={indonesia} alt="icon" />
                    <p>Indonesia</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>692.24</h4>
                    <RangeBar value={692.24}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={iran} alt="icon" />
                    <p>Iran</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>686.42</h4>
                    <RangeBar value={686.42}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={germany} alt="icon" />
                    <p>Germany</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>673.60</h4>
                    <RangeBar value={673.60}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={southKorea} alt="icon" />
                    <p>South Korea</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>635.50</h4>
                    <RangeBar value={635.50}/>

                  </div>
                  <div className='fSectionItems'>
                    <div>
                    <img src={saudiArabia} alt="icon" />
                    <p>Saudi Arabia</p>
                    </div>

                    <h4>blah bhal</h4>
                    <h4>607.91</h4>
                    <RangeBar value={607.91}/>

                  </div>
                </div>
                <div className="thirdSectionSdiv">
                  <h3>Leading causes of CO2 Emmisson</h3>
                  <div className='leadingInfo'>
                    <img src={power} alt="" />
                    <div>
                      <h3>Energy Production & Electricity generation</h3>
                      This sector contributes roughly <span style={{color:'red'}}>72%</span> of global CO2 emissions. This includes burning fossil fuels (coal, oil, gas) for electricity generation and industrial processes.
                    </div>
                  </div>
                  <div className='leadingInfo'>
                    <img src={transportation} alt="" />
                    <div>
                      <h3>Transportation</h3>
                      Vehicles like cars, trucks, airplanes, and ships account for around <span style={{color:'red'}}>15%</span> of global CO2 emissions, primarily due to their reliance on fossil fuels</div>
                  </div>

                  <div className='leadingInfo'>
                    <img src={factory} alt="" />
                    <div>
                      <h3>Other Sectors</h3>
                      Agriculture, forestry, manufacturing, and buildings contribute the remaining  <span style={{color:'red'}}>13%</span>, with varying sub-categories within each.</div>
                  </div>

                </div>

              </div>
              <div className='spaceDiv'>

              </div>

            </div>} />
            <Route path='/Africa' element={<Africa />} />
            <Route path='/Ageing' element={<Ageing />} />
            <Route path='/Aids' element={<Aids />} />
            <Route path='/ChildNYouthSafely' element={<ChildNYouthSafely />} />
            <Route path='/Children' element={<Children />} />
            <Route path='/ClimateChange' element={<ClimateChange />} />
            <Route path='/Democracy' element={<Democracy />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Health' element={<Health />} />
            <Route path='/Population' element={<Population />} />
            <Route path='/Poverty' element={<Poverty />} />
            <Route path='/Refugees' element={<Refugees />} />
            <Route path='/Water' element={<Water />} />
            <Route path='*' element={<h2>404 not found</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
