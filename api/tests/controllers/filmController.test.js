const makeApiCall = require('../../services/apiService');
const axios = require('axios');

let mockCreate ={
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
}

describe('Axios client configuration', () => {
  test('should have the correct baseURL', () => {
    expect(mockCreate.baseURL).toBe('https://swapi.dev/api/');
  });

  test('should have the correct Content-Type header', () => {
    expect(mockCreate.headers['Content-Type']).toBe('application/json');
  });
});
