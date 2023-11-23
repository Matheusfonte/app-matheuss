import axios from "axios";

// 89220700/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;