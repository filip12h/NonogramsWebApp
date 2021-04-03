import React, { useState } from 'react';

type InputProps = {
    submit: (input: string) => void;
};

const Input: React.FC<InputProps> = ({ submit }) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = () => {
        submit(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button type="submit" onClick={onSubmit}>
                Submit
            </button>
        </div>
    );
};

export default Input;
