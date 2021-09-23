export const getGifs = async(category)=>{

    const apiKey = `yz0xfOSfAjN4fPbkDsHrt4gzuSxT19dg`;
    const limit = 9;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${apiKey}&limit=${limit}`;

    const gifResponse = await fetch(url);
    const {data} = await gifResponse.json();

    const gifs = data.map(gif=>{
        return {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized.url
        }
    });

    return gifs;
};