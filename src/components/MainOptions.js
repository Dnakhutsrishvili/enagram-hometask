
import { useState } from 'react';
import styles from './mainOptions.module.css'
import plus from '../assets/icons/plus.png'

function MainOptions({text1, text2, setText1, setText2}) {
      const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleClear=()=>{
    setText1('')
    setText2('')
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftWrap}>
    <div className={styles.selectWrapper}>
    <select className={styles.select} name="language">
        <option value="georgian">ქართული</option>
        <option value="english">ინგლისური</option>
    </select>
    </div>
    <div className={styles.checkbox}>
          <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label>
      ფორმატის შენარჩუნება
    </label>
    </div>
    </div>
    <div className={styles.btnWrapper}>
        <button style={text1.length>1||text2.length>1?{ backgroundColor: '#4571E4' }:{ backgroundColor: '#383A4899' }} onClick={()=>handleClear()}> <img src={plus} alt='plus'/> ახლის გახსნა</button>
    </div>
    </div>
  )
}

export default MainOptions