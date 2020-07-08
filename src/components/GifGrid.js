import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {

        getGifs( category )
            .then( setImages )
            // .then( imgs => setImages( imgs ))

    }, [ category ]);

    return(
        <>
            <h2>{category}</h2>

            <div className="grid">
                {
                    images.map((data) => (
                        <GifItem
                            key={ data.id }
                            {...data}
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

