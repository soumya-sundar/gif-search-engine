import fetch from 'cross-fetch';

const Api = async (input) => {
   let url = `https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q="${input}"`;
   
   try {
    const response = await fetch(url);
    if (response.status === 200 || response.status === 404) {
      return response;
    } else {
      throw Error('Something went wrong on api server!');
    }
  } catch (error) {
    return await Promise.reject(error.message);
  }
}

export default Api;