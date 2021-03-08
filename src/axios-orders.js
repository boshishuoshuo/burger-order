import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-order-22e75-default-rtdb.firebaseio.com/'
});


export default instance;