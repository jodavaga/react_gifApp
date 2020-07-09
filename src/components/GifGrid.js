import React from 'react';
import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
// hooks
import { useGifFetch } from '../hooks/useGifFetch';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useGifFetch( category );

    return(
        <>
            <h2>{category}</h2>

            {/* { loading ? 'Loading...' : null } */}
            { loading && <p>Loading...</p> }

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

