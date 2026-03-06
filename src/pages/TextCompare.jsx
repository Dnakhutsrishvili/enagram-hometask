import { useState } from "react";
import MainOptions from "../components/MainOptions"
import OptionForm from "../components/OptionForm"
import TextField from "../components/TextField"

function TextCompare() {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
  return (
    <section>
        <OptionForm/>
        <MainOptions text1={text1} text2={text2} setText1={setText1} setText2={setText2}/>
        <TextField text1={text1} text2={text2} setText1={setText1} setText2={setText2}/>
    </section>
        )
}

export default TextCompare