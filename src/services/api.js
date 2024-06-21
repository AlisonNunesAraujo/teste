import axios from "axios";

// https://economia.awesomeapi.com.br
// /last/USD-BRL,EUR-BRL,BTC-BRL

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br'
})

export default api;