import YouTube from 'react-youtube'
import './styles.scss'
import Youtube from '../../youtube/Youtube'


const Ageing = () => {
  return (
    <>
    <div className="contentWrapper">
      <div className="heading">
        Ageing
      </div>
      <div>
        <p className='africaInfo'>

          The global population is aging, presenting a significant social transformation. This trend, observed in almost every country, has far-reaching implications for labor markets, services, and social structures. As older individuals increasingly contribute to societal development, there's a need to reassess policies. The growing elderly population poses challenges to public systems, like healthcare and pensions, leading to fiscal and political pressures.

        </p>
      </div>
      <div className='content'>
        <div className='mainContent'>
          <div className="infoDiv">
            <p>Population Ageing Trends</p>
            <li>The global population aged 65 and above is growing faster than younger demographics</li>
            <li>Projections indicate a rise from 10% in 2022 to 16% in 2050</li>
            <li>By 2050, individuals aged 65+ will double the number of under-5 children and nearly match those under 12 years.</li>
          </div>
          <div className="videoDiv">
            <Youtube videoId={'MVvpybpS-ds'}/>
          </div>

        </div>
      </div>

        <div className='contentInfodiv'>
        <ul>
          <li><b>Migration as a driver of population growth</b></li>

          <li>- International migration significantly shapes population trends globally.</li>
          <li>- High-income countries see migration as the primary driver of population growth.</li>
          <li>- Low-income and lower-middle-income countries rely on natural increase (births over deaths) for population growth.</li>
          <li>- Between 2010 and 2021, 40 countries experienced substantial net inflows of migrants, notably Jordan, Lebanon, and Türkiye.</li>
          <li>- Ten countries had net outflows exceeding 1 million, driven by temporary labor movements and conflict-induced migrations.</li>

          <li><b>COVID-19 as a disruptor of population change</b></li>
          <li>- The COVID-19 pandemic impacted global population change, affecting fertility, mortality, and migration.</li>
          <li>- In 2021, global life expectancy at birth dropped to 71 years from 72.8 in 2019, primarily due to the pandemic.</li>
          <li>- Central and Southern Asia, and Latin America and the Caribbean experienced nearly a three-year decline in life expectancy at birth between 2019 and 2021.</li>
          <li>- In specific countries like Bolivia, Botswana, Lebanon, Mexico, Oman, and the Russian Federation, life expectancy at birth dropped by over four years during the same period.</li>
          <li>- The impact of the COVID-19 pandemic on fertility levels is mixed, but in low- and middle-income countries, contraception availability and demand remained stable.</li>
          <li>- High-income countries experienced short-term fluctuations in pregnancies and births due to successive waves of the pandemic.</li>


          <li><b style={{fontSize:'28px'}}>Did you know?</b></li>

            <li>- Global population projected: 8.5B (2030), 9.7B (2050), 10.4B (2100).</li>
            <li>- Women outlive men by 5.4 years globally (2019).</li>
            <li>- Rapid growth challenges sustainable development.</li>
            <li>- High fertility hinders SDG achievement (health, education, gender).</li>
            <li>- 46 least-developed countries to double in population (2022-2050).</li>
            <li>- Rapid growth compounds climate change challenges.</li>
            <li>- Life expectancy in least developed countries 7 years lower (2021).</li>
            <li>- 10% of global births by mothers under 20 (2021).</li>
            <li>- Women outnumber men at 55.7% (65 or older, 2022).</li>
            <li>- Women's majority expected to slightly decrease to 54.5% (2050).</li>

        </ul>

        </div>
      </div>
    </>
  )
}

export default Ageing
