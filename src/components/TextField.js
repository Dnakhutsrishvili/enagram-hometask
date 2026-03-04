import styles from './textField.module.css'
import arrows from '../assets/icons/arrows.png'
function TextField() {
  return (
    <form >
      <div className={styles.form}>
      <textarea placeholder='დაიწყე წერა...' id='first'></textarea>
      <img src={arrows} alt='arrows'/>
      <textarea placeholder='დაიწყე წერა...' id='second'></textarea>
      </div>
   <div className={styles.btnWrapper}>
        <button type='submit'>შედარება</button>
    </div>
    </form>
  )
}

export default TextField