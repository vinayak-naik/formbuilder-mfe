import { getItem } from '../hooks/useLocalStorage';

// const AUTH_URL = `${process.env.API_URL}/auth/api/v1`;
const AUTH_LOCAL_STORAGE_KEY = '__auth_mfe_auth_provider_token__';

const token = getItem(AUTH_LOCAL_STORAGE_KEY);

// const API_URL =
//   'https://8c9c-2409-40f2-1038-2f46-49ef-a636-6401-97bf.ngrok-free.app';

// const AUTH_URL = `${API_URL}/auth/api/v1`;
const AUTH_URL = 'http://localhost:7000';

const client = async (method, endpoint, data) => {
  const config = {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ? token.accessToken : ''}`,
    },
  };

  return window
    .fetch(`${AUTH_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        const responseJson = await response.json();
        return Promise.resolve(responseJson);
      }
      return Promise.reject(data);
    });
};

export { client };
