import styles from "./Display.module.css"
const Display = ({showDisplay}) =>{
  return <div className={styles.display} >{showDisplay}</div>
}

export default Display;