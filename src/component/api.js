import axios from 'axios'

const api = axios.create({
  baseURL: "https://catfact.ninja"
});

export const getData = async () => {
  try {
    const response = await api.get('/fact')
    return response.data.fact;
  } catch (error) {
    throw Error(error.message);
  }
}
