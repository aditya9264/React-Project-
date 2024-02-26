import styles from "./item.module.css"
const Item = ({foodItem, handleBuyButton}) => {

    const handleBuyButtonClicked = (event) => {
        console.log(event)
        console.log(`${foodItem} item being bought.`)
    }
  return <> 
  <li className= {`${styles["ad-item"]} list-group-item `}>
    <span className= {styles["ad-span"]}>{foodItem}</span>
    <button className={`${styles.button} btn btn-info`}
    onClick={handleBuyButton}
    >Buy</button>
  </li>
  </>
};
export default Item