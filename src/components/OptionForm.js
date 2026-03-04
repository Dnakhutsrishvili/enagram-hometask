import text from '../assets/icons/text.png'
import down from '../assets/icons/arrow-down.png'
import styles from './optionForm.module.css'

function OptionForm() {
  return (
  <div>
    <ul className={styles.option}>
        <li><img className={styles.text} src={text} alt='text'/>ტექსტის შედარება<img className={styles.text} src={down} alt='down'/></li>
        <hr/>
    </ul>
    </div>
  )
}

export default OptionForm