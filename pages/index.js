import React, {useState} from "react";

const InputElement = () => {
    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);

    return <div>
        <input 
            placeholder="Enter Some Text" 
            onChange={ (event) => { 
                setInputText(event.target.value); 
                setHistoryList([...historyList, event.target.value]);
            }}
        />
        <br />
        { inputText }
        <br />
        <br />
        <ul>
            { historyList.map( (record) => {
                return <li>{record}</li>
            }) }
        </ul>
    </div>
};

export default InputElement;