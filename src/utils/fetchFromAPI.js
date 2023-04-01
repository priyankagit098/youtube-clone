import axios from "axios";
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5a320f4c3cmsh7f784e290dbd428p1bebfdjsna54f24993511',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };