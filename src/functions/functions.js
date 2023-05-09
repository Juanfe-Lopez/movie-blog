const getData = async () => {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd65def6cd8msh65d7ce9cd00b806p1c0cd5jsn6d1455c5633a',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getDataId = async (id) => {
    const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd65def6cd8msh65d7ce9cd00b806p1c0cd5jsn6d1455c5633a',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  export{getData,getDataId};