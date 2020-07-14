import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return(
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                setCategories = {setCategories} 
            />
            <hr />

            <ol>
                {
                    categories.map(cat => (
                        <GifGrid 
                            key={ cat } 
                            category={ cat }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;