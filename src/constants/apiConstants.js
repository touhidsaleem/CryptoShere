export const API_KEY = `CG-QqoAp6eXrbsaiBVCyXBvNCNu`

const CoinCap = `https://api.coincap.io/v2`
const CoinGecko = `https://api.coingecko.com/api/v3`


export const getAllAssetsApiUrl = () => `${CoinCap}/assets`

export const getCoinByIdApiUrl = (id) => `${CoinGecko}/coins/${id}`

export const getMarketApiUrl = () => `${CoinGecko}/coins/markets`

export const getMarketByIdApiUrl = (id) => `${CoinGecko}/coins/${id}/market_chart`