import React, { useState } from 'react';

const GifExpertApp = () => {

    // const categories = ['Frutas', 'Verduras', 'Carne'];
    const [categories, setCategories] = useState(['Frutas', 'Verduras', 'Carne']);

    const addCategory = () => {
        // setCategories( ['Pescado', ...categories] );
        setCategories( cats => ['Pescado', ...cats] );
    }

    return(
        <>
            <h1>Gif Expert App</h1>
            <hr />

            <button onClick={ addCategory }>Add category</button>

            <ol>
                {
                    categories.map(cat => {
                        return(
                            <li key={ cat }>
                                { cat }
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;