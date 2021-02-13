
export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=AmwFpmSNaAeGzQIlBYcgrdWuxM0TGwl6`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {

    const titleNaN= img.title.trim() ? img.title : 'NaN';
    
    return {
      id: img.id,
      title: titleNaN,
      url: img.images?.downsized_medium.url,
    };  
  });
  
  return gifs;
}
