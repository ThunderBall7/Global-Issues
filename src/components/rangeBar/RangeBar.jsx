import './styles.scss'
//global metric tonnes 36,800,000,000 2022


const RangeBar = (props) => {

  console.log(props.value);
  // const globalValue = 36800000000;
  const countryValue = 1000000 * props.value;

  // const rangeValue = globalValue - countryValue;
  // console.log(rangeValue);


  return (
    <div>
      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min={0}
        max={36800000000}
        step={1}
        value={countryValue}
      />
    </div>
  )
}

export default RangeBar