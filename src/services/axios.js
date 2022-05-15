import axios from 'axios';

const API = axios.create({
    baseURL: 'http://educacao.dadosabertosbr.com',
  });

  export default API;