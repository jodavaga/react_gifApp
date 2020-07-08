import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const apiKey = 'd50nWkDCfjhEfVgJIE9WYClyFqqYuGkZ';

    const [count, setCount] = useState(0);

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=${ apiKey }`;

        const resp = await fetch( url );
        const {data} = await resp.json();

        const gif =  data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gif);
    }

    // this call will be triggered each time
    getGifs();

    return(
        <>
            <h2>{category}</h2>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

