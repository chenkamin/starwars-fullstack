const makeApiCall = require('./makeApiCall');
const axios = require('axios');

jest.mock('axios', () => {
  return {
    create: () => ({
      get: jest.fn(() => Promise.resolve({ data: 'mock response' })),
      post: jest.fn(() => Promise.resolve({ data: 'mock response' })),
      put: jest.fn(() => Promise.resolve({ data: 'mock response' })),
      delete: jest.fn(() => Promise.resolve({ data: 'mock response' }))
    })
  };
});

describe('makeApiCall', () => {
  it('should make a GET request to the specified URL', async () => {
    const response = await makeApiCall('get', 'https://swapi.dev/api/people/1');
    expect(response).toBe('mock response');
    expect(axios.create().get).toHaveBeenCalledWith('https://swapi.dev/api/people/1');
  });

  it('should make a POST request with the specified data to the specified URL', async () => {
    const response = await makeApiCall('post', 'https://swapi.dev/api/people', {
      name: 'Luke Skywalker'
    });
    expect(response).toBe('mock response');
    expect(axios.create().post).toHaveBeenCalledWith('https://swapi.dev/api/people', {
      name: 'Luke Skywalker'
    });
  });

  it('should make a PUT request with the specified data to the specified URL', async () => {
    const response = await makeApiCall('put', 'https://swapi.dev/api/people/1', {
      name: 'Luke Skywalker'
    });
    expect(response).toBe('mock response');
    expect(axios.create().put).toHaveBeenCalledWith('https://swapi.dev/api/people/1', {
      name: 'Luke Skywalker'
    });
  });

  // it('should make a DELETE request to the specified URL', async () => {
  //   const response = await makeApiCall('delete', 'https://swapi.dev/api/people/1');
  //   expect(response).toBe('mock
