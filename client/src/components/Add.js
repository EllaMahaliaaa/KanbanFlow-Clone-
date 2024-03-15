import React, { useState } from 'react';


const Add = ({ buttonText, onSubmit }) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        setShowInput(true);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            onSubmit(inputValue);
            setShowInput(false);
            setInputValue('');
        }
    };

    return (
        <div>
            {!showInput ? (
                <button onClick={handleButtonClick}>{buttonText}</button>
            ) : (
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={`Enter ${buttonText}`}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Add;
