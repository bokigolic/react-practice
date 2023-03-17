import axios from 'axios'

const api = axios.create({
  baseURL: "https://catfact.ninja"
});


const getData = async () => {
  const response = await api.get('/data')
  return response.fact;
}

export default api;