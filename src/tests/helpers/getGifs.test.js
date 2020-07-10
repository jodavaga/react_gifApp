import { getGifs } from '../../helpers/getGifs';

describe('test on getGifs helper', () => {
    
    test('Should return 10 elements', async () => {
        const gifs = await getGifs('Rick and Morty');
        expect(gifs.length).toBe(10);
    });

    test('Should return empty array of gifs', async () => {
        const gifs = await getGifs('');
        expect(gifs).toEqual([]);
    });

})