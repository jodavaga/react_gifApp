import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const apiKey = 'd50nWkDCfjhEfVgJIE9WYClyFqqYuGkZ';

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=${ apiKey }`;

        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs =  data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        // useState hook
        setImages( gifs );
    }

    return(
        <>
            <h2>{category}</h2>
            <ol>
                {
                    images.map(({id, title}) => (
                        <li key={ id }>{title}</li>
                    ))
                }
            </ol>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

