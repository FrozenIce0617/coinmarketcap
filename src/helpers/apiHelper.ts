import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com',
  headers: {
    'Content-Type': 'application/json',
    'X-CMC_PRO_API_KEY': process.env.REACT_APP_COIN_MARKET_KEY,
  },
});

export default axiosInstance;
