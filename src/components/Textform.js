import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleDwClick = () => {
        let newtexts = text.toLowerCase();
        setText(newtexts);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleEmClick = () => {
        const Regex = /\b[\w.-]+@[\w.-]+.\w{2,4}\b/gi;
        const emailFound = text.match(Regex);
        if (emailFound) {
            let uniqueEmail = [...new Set(emailFound)];
            setText(uniqueEmail.join(',  '));
        }
        else {
            setText('No email found !!')
        }
    }

    const handleClrClick = () => {
        setText(' ');
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container  mx-auto' style={{marginTop:'120px'}}>
            <div>
                <h1 className="text" style={{color: props.mode ? "black" : "#6c757d"}} >Enter Text To Analyze</h1>
                <div>
                    <textarea className="form-control" style={{ borderWidth: '2.5px', borderColor:props.mode? 'black':'black'}} id="myBox" value={text} onChange={handleOnChange} rows="10"></textarea>
                    <button className="btn btn-primary my-4" onClick={handleUpClick}> UpperCase</button>
                    <button className="btn btn-warning my-4 mx-2" onClick={handleDwClick}> LowerCase</button>
                    <button className="btn btn-success my-4 mx-1" onClick={handleEmClick}>Extarct Email</button>
                    <button className="btn btn-danger my-4 mx-1" onClick={handleClrClick}>Clear</button>
                </div>
            </div>
            <div>

                <h1 className="text" style={{color: props.mode ? "black" : "#6c757d"}}>  Your Text Summary</h1>
                <p className="text" style={{color: props.mode ? "black" : "#6c757d"}}> charcters ={text.replace(/\s/g, '').length} And Words = {text.trim().split(/\s+/).filter(Boolean).length}</p>
            </div>
            </div>
        </>
    );
}
