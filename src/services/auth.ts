/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

export const register = (name: string, email: string, pass: string): any => {
  return api.post('/user', {
    name,
    email,
    pass,
  });
};
export const login = (email: string, pass: string): any => {
  return api
    .post('login', {
      email,
      pass,
    })
    .then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
export const logout = (): void => {
  localStorage.removeItem('user');
};
export const getCurrentUser = (): any => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};
