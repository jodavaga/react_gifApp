import { renderHook } from '@testing-library/react-hooks';
import { useGifFetch } from '../../hooks/useGifFetch';

describe('useGifFetch hook tests', () => {

    test('should display initially data', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useGifFetch('') );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

    });

    test('should return an array of gifs and loading false', async () => {

        const { result, waitForNextUpdate } = renderHook( () => useGifFetch('rick and morty') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toEqual(10);
        expect( loading ).toBeFalsy();
        
    });
    
    
})