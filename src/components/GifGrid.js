import React from 'react';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=rick+and+morty&limit=10&api_key=d50nWkDCfjhEfVgJIE9WYClyFqqYuGkZ';

        const resp = await fetch( url );
        const {data} = await resp.json();

        const gif =  data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gif);

    }

    getGifs();

    return(
        <>
            <h2>{category}</h2>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

