import styles from "./item.module.css"
const Item = ({foodItem}) => {
  return <>
  <li className= {`${styles["ad-item"]} list-group-item `}>
    <span className= {styles["ad-span"]}>{foodItem}</span>
  </li>
  </>
};
export default Item;
