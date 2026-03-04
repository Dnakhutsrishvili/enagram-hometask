import { useState, useRef } from 'react';
import styles from './textField.module.css';
import arrows from '../assets/icons/arrows.png'

function TextField() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [highlights1, setHighlights1] = useState([]);
  const [highlights2, setHighlights2] = useState([]);
  const [compared, setCompared] = useState(false);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  const computeDiff = (str1, str2) => {
    const hl1 = [];
    const hl2 = [];

    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
      i++;
    }
    let s1 = str1.length - 1;
    let s2 = str2.length - 1;
    while (s1 >= i && s2 >= i && str1[s1] === str2[s2]) {
      s1--;
      s2--;
    }
    if (i <= s1) {
      hl1.push({ start: i, end: s1 + 1, type: 'deleted' });
    }
    if (i <= s2) {
      hl2.push({ start: i, end: s2 + 1, type: 'added' });
    }

    return { hl1, hl2 };
  };

  const handleCompare = () => {
    const { hl1, hl2 } = computeDiff(text1, text2);
    setHighlights1(hl1);
    setHighlights2(hl2);
    setCompared(true);
  };

  const renderWithHighlights = (text, highlights) => {
    if (highlights.length === 0) {
      return <>{text}</>;
    }

    let result = [];
    let lastIndex = 0;

    highlights.forEach((hl, idx) => {
      if (lastIndex < hl.start) {
        result.push(<span key={`normal-${idx}`}>{text.slice(lastIndex, hl.start)}</span>);
      }
      const highlightedText = text.slice(hl.start, hl.end);
      result.push(
        <span 
          key={`hl-${idx}`}
          style={{
            backgroundColor: hl.type === 'deleted' ? '#ff6b6b' : '#51cf66',
            color: hl.type === 'deleted' ? '#8b0000' : '#1b4620',
            display: 'inline'
          }}
        >
          {highlightedText}
        </span>
      );
      lastIndex = hl.end;
    });

    if (lastIndex < text.length) {
      result.push(<span key="remaining">{text.slice(lastIndex)}</span>);
    }

    return result;
  };

  return (
    <div className={styles.form}>
      <div className={styles.textareaContainer} ref={container1Ref}>
        {compared && (
          <div className={styles.highlightLayer}>
            {renderWithHighlights(text1, highlights1)}
          </div>
        )}
        <textarea
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="დაიწყე წერა..."
          className={styles.textarea}
          style={{
            backgroundColor: compared ? 'transparent' : '#F0F7FF',
            color: compared ? 'transparent' : 'black'
          }}
        />
      </div>
          <img className={styles.arrows} src={arrows} alt='arrows'/>
      <div className={styles.textareaContainer} ref={container2Ref}>
        {compared && (
          <div className={styles.highlightLayer}>
            {renderWithHighlights(text2, highlights2)}
          </div>
        )}
        <textarea
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="დაიწყე წერა..."
          className={styles.textarea}
          style={{
            backgroundColor: compared ? 'transparent' : '#F0F7FF',
            color: compared ? 'transparent' : 'black'
          }}
        />
      </div>

      <div className={styles.btnWrapper}>
        <button onClick={handleCompare}>
          შედარება
        </button>
      </div>
    </div>
  );
}

export default TextField;