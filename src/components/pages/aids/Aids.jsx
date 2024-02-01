import YouTube from 'react-youtube'
import './styles.scss'
import Youtube from '../../youtube/Youtube'


const Aids = () => {
  return (
    <>
    <div className="contentWrapper">
      <div className="heading">
        Aids
      </div>
      <div>
        <p className='africaInfo'>

        In 1981, the first clinical evidence of AIDS emerged in the U.S., caused by HIV identified in 1983.
        UNAIDS reports 85.6M acquired HIV, 40.4M died; 39M living with HIV in 2022, 53% are women/girls.
        HIV in bodily fluids transmits through unprotected sex, sharing needles, and from mother to child.


        </p>
      </div>
      <div className='content'>
        <div className='mainContent'>
          <div className="infoDiv">
            <p>HIV</p>
            <li>HIV rate among sex workers in Phayao, Northern Thailand: ~60%.</li>
            <li>Phayao Health Office distributes condoms and educates sex workers on safe practices.</li>
            <li>The Joint UN Programme on HIV/AIDS unites 11 UN organizations against AIDS.</li>

          </div>
          <div className="videoDiv">
            <Youtube videoId={'4LLOLZ5WDK8'}/>
          </div>

        </div>
      </div>

        <div className='contentInfodiv'>
        <ul>
          <li><b>Antiretroviral treatment</b></li>

          <li>- Over the years, HIV infections and fatalities surged, but antiretroviral treatment now extends lives.</li>
          <li>- By December 2022, nearly 30 million people with HIV had access to antiretroviral therapy.</li>
          <li>- New HIV infections declined from 2.1 million in 2010 to 1.3 million in 2022.</li>
          <li>- AIDS-related deaths have dropped by 69% since the peak in 2004.</li>
          <li>- In 2022, 1.3 million people were newly infected, and around 630,000 died from AIDS-related illnesses.</li>


          <li><b>Gender inequalities and lack of treatment delay the end of AIDS</b></li>
          <li>- In sub-Saharan Africa, women and girls constituted 63% of new HIV infections in 2022 due to gender inequalities.</li>
          <li>- Harmful masculinities discourage men from seeking care, impacting HIV risks.</li>
          <li>- In 2022, AIDS claimed a life every minute globally despite progress.</li>
          <li>- Approximately 9.2 million people with HIV weren't receiving treatment in 2022.</li>
          <li>- Slow treatment progress observed in eastern Europe, central Asia, and the Middle East/North Africa.</li>
          <li>- In these regions, only about half of the 2 million people with HIV were on antiretroviral therapy in 2022.</li>
          <li>- Men with HIV less likely to be on treatment compared to women in sub-Saharan Africa, the Caribbean, and eastern Europe/central Asia.</li>



          <li><b>HIV funding gap is on the rise</b></li>

          <li>- Funding for HIV decreased in 2022, falling to 2013 levels, with a total of US$20.8 billion.</li>
          <li>- The funding gap for 2025 is significant, as the needed amount is US$29.3 billion.</li>
          <li>- UNAIDS highlights the opportunity to end AIDS with increased political will and sustainable investment.</li>
          <li>- Key areas for funding include evidence-based HIV prevention and treatment, health systems integration, non-discriminatory laws, gender equality, and empowered community networks.</li>

        </ul>

        </div>
      </div>
    </>
  )
}

export default Aids
