import React, {useState} from 'react';
import shortid from 'shortid';

export default (props) => {
    const [text, setText] = useState('');
    const [textError, setTextError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text){
            console.log(e.target.value);
            setTextError('Field cannot be blank');
            return;
        } else {
            setText('');
            setTextError('');
            props.onSubmit({
            id: shortid.generate(),
            text,
            complete: false,
        })
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input value={text} type="text" onChange={(e) => handleChange(e)} />
                {textError ? <div style={{color: 'red'}}>{textError}</div> : null}
            </form>  
        </div>
    )
}