import axios from "axios";
const base_url = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': process.env.x_rapid_API_key,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${base_url}/${url}`, options);
  return data;
}