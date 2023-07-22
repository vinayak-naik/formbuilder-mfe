import { setItem } from '../hooks/useLocalStorage';
import { client } from './http';

const AUTH_LOCAL_STORAGE_KEY = '__auth_mfe_auth_provider_token__';

const handleResponse = (payload) => {
  setItem(AUTH_LOCAL_STORAGE_KEY, payload.data.token);
  return payload;
};

const signup = ({ username, email, password }) => {
  return client('POST', 'user/signup', { username, email, password });
};

const login = ({ email, password }) => {
  return client('POST', 'user/login', { email, password }).then(handleResponse);
};

const getProfile = () => {
  return client('GET', 'user/me');
};

const updateProfile = (data) => {
  return client('PUT', `profile/${data.id}`, data);
};

export { signup, login, getProfile, updateProfile };
