import axios from 'axios';

const fakeApi = axios.create({
    baseURL:"https://fakestoreapi.com",
});

export default fakeApi;