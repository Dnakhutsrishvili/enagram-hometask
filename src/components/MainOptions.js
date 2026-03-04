
import { useState } from 'react';
import styles from './mainOptions.module.css'
import plus from '../assets/icons/plus.png'

function MainOptions() {
      const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };
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
        <button> <img src={plus} alt='plus'/> ახლის გახსნა</button>
    </div>
    </div>
  )
}

export default MainOptions