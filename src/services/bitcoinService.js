import axios from 'axios'

export const bitcoinService =  {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return rate.data
}

function getMarketPrice() {
    
}

function getConfirmedTransactions() {
    
}