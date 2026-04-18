import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPhones = () => httpClient.get('/phones?page=1&result=100');

export const createPhone = values => httpClient.post('/phones', values);

export const deletePhone = id => httpClient.delete(`/phones/${id}`);
