import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Frutas', 'Verduras', 'Carne']);

    // const addCategory = () => {
    //     // setCategories( ['Pescado', ...categories] );
    //     setCategories( cats => ['Pescado', ...cats] );
    // }

    return(
        <>
            <h1>Gif Expert App</h1>
            <AddCategory />
            <hr />

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