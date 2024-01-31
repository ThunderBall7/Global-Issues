import YouTube from 'react-youtube'
import './styles.scss'
import Youtube from '../../youtube/youtube'


const Africa = () => {
  return (
    <>
    <div className="contentWrapper">
      <div className="heading">
        AFRICA
      </div>
      <div>
        <p className='africaInfo'>
        Africa is the second-largest continent, known for its diverse landscapes, cultures, and histories. It comprises 54 countries, including regions like North Africa, Sub-Saharan Africa, and the Horn of Africa. Historically rich, Africa is home to ancient civilizations like Egypt and Mali, contributing significantly to human history. The continent boasts a multitude of languages, with over 2,000 distinct languages spoken, reflecting its cultural richness and diversity.
        </p>
      </div>
      <div className='content'>
        <p>
          Challenges for Africa
        </p>
        <div className='mainContent'>
        <div className="infoDiv">
            hello
          </div>
          <div className="videoDiv">
            <Youtube videoId={'xT_OcCyQgSo'}/>
          </div>

        </div>
      </div>

        <div className='contentInfodiv'>
        <ul>
          <li><b>Climate Change:</b></li>
          <li>- Africa is highly vulnerable to climate change impacts.</li>
          <li>- Rising temperatures, changing rainfall patterns, and extreme weather events affect ecosystems and livelihoods.</li>
          <li>- Water scarcity and desertification are increasing.</li>
          <li>- Adaptation strategies are crucial for agricultural resilience.</li>

          <li><b>Hunger and Malnutrition:</b></li>
          <li>- Africa faces an unprecedented food crisis.</li>
          <li>- Conflicts, climate variability, economic slowdowns, and COVID-19 contribute to worsening hunger.</li>
          <li>- The 2023 report by FAO, AUC, UNECA, and WFP highlights a failure to meet SDG 2 targets.</li>
          <li>- In 2022, nearly 282 million people in Africa were undernourished, with 868 million food-insecure.</li>

          <li><b>Healthcare:</b></li>
          <li>- Access to healthcare is a challenge in rural and remote areas.</li>
          <li>- Africa grapples with infectious diseases and a rising prevalence of non-communicable diseases.</li>
          <li>- Shortages of healthcare professionals hinder effective service delivery.</li>
          <li>- Political instability and conflict exacerbate healthcare challenges.</li>

          <li><b>Peacekeeping and Conflict Resolution:</b></li>
          <li>- Complex conflicts, historical grievances, and non-state actors pose challenges to peacekeeping.</li>
          <li>- Sustaining peace requires addressing root causes and fostering inclusive dialogue.</li>
          <li>- Collaboration between the UN, AU, and international partners is essential.</li>
          <li>- Peacekeeping missions in Africa aim to maintain peace, facilitate dialogue, and support reconstruction.</li>

          <li><b>International Criminal Tribunal for Rwanda:</b></li>
          <li>- The ICTR was established by the UN Security Council to prosecute those responsible for genocide in Rwanda in 1994.</li>
          <li>- It indicted 93 individuals, including high-ranking officials, politicians, businessmen, and media leaders.</li>
          <li>- The ICTR played a pioneering role in international criminal justice, delivering verdicts on genocide, crimes against humanity, and war crimes.</li>
          <li>- Its last trial judgment was in December 2012, and the Mechanism for International Criminal Tribunals now handles residual functions.</li>
        </ul>

        </div>
      </div>
    </>
  )
}

export default Africa
