
import './style.scss'

const SmallTabs = ({title, value, percentage, icon}) => {

  return (
    <div>
        <div className="small_tabContent">
            <div className='info'>
            <p>{title}</p>
              <div className='value_section'>
              <p>{value}</p>
              <p>{percentage}</p>
              </div>
            </div>
            <div>
              <img src={icon} alt="" />
            </div>
          </div>
    </div>
  )
}

export default SmallTabs;
