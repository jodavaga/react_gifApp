import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hola mundo');

    // handle input change
    const handleChange = (e) => {
       setInputValue( e.target.value );
    }

    // handle ENTER, submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(inputValue.length > 2)) {
            return;
        }

        setCategories((cats) => [...cats, inputValue]);
        setInputValue(''); 
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                placeholder = "Add category"
                value={ inputValue }
                onChange={ handleChange }
                onClick={ (e) => e.target.setSelectionRange(0, e.target.value.length) }
            />
        </form>
    )
}