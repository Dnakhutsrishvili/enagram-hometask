import  { useState, useEffect } from 'react';
import styles from './loader.module.css';

export default function Loader({ message = "Converting...Thank you For your Patience" }) {
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const spinnerInterval = setInterval(() => {
      setRotation(prev => (prev + 6) % 360);
    }, 30);
    return () => clearInterval(spinnerInterval);
  }, []);

 useEffect(() => {
  const progressInterval = setInterval(() => {
    setProgress(prev => {
      const next = prev < 100 ? Math.round(prev + prev * 1.5) : 100;
      if (next >= 100) {
        clearInterval(progressInterval);
        return 100;
      }
      return next;
    });
  }, 300);
  return () => clearInterval(progressInterval);
}, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          {/* Spinner */}
          <div className={styles.spinnerWrapper}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className={styles.spinner}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Outer circle - light gray */}
              <circle cx="40" cy="40" r="36" fill="none" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Animated arc - blue */}
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="3"
                strokeDasharray="113 226"
                strokeLinecap="round"
              />
              
              {/* Center dot */}
              <circle cx="40" cy="40" r="6" fill="#4f46e5" />
            </svg>
          </div>

          {/* Content */}
          <div className={styles.textContent}>
            {/* Message */}
            <p className={styles.message}>
              {message}
            </p>

            {/* Percentage and Progress Bar */}
            <div className={styles.progressSection}>
              <span className={styles.percentage}>
                {progress}%
              </span>
              {/* Progress bar */}
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBar}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}