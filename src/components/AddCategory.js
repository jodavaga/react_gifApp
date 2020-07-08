import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola mundo');

    // handle input change
    const handleChange = (e) => {
       setInputValue( e.target.value );
    }

    // handle ENTER, submit
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleChange }
            />
        </form>
    )
}