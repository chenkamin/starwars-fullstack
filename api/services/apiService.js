const axios = require('axios')
const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const makeApiCall = async (method, url= '', data) => {
    console.log(method,"url - ", url, data)
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports =   makeApiCall;
