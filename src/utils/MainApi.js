import { MAIN_URL } from '../utils/constants';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const register = (email, password, name) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => checkResponse(res));
};

export const checkToken = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  })
    .then((res) => checkResponse(res));
};

export const getArticles = (token) => {
  return fetch(`${MAIN_URL}/articles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  })
    .then((res) => checkResponse(res));
};

export const saveArticle = (token, { publishedAt, urlToImage, url, source, description, title }, keyword) => {
  return fetch(`${MAIN_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
    body: JSON.stringify({ date: publishedAt, image: urlToImage, keyword, link: url, source: source.name, text: description, title }),
  })
    .then((res) => checkResponse(res));
};

export const deleteArticle = (token, article) => {
  return fetch(`${MAIN_URL}/articles/${article._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`,
    },
  })
    .then((res) => checkResponse(res));
};