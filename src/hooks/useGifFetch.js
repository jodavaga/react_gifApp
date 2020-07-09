import { useState, useEffect } from 'react'


export const useGifFetch = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {
            setState({
                data: [1,2,3],
                loading: false
            })
            
        }, 3000);

    }, [ ]);

    return state;
}