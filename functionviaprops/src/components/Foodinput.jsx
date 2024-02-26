import styles from "./Foodinput.module.css"
const Foodinput =({handleonCHange})=>{
   
  return <input className={styles.foodinput} type="text" placeholder="Type Here"
  onChange={handleonCHange } />
}
export default Foodinput;