import axios from 'axios'
import {storageService} from './storageService'

export const bitcoinService =  {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

const MarketPrice_KEY = 'MarketPriceDB';
const TradeVolume_KEY = 'TradeVolumeDB';

async function getRate(coins) {
    const rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return rate.data
}

async function getMarketPrice() {
    let marketPrice = storageService.load(MarketPrice_KEY);
	if (marketPrice) return Promise.resolve(marketPrice);
    marketPrice = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
    storageService.store(MarketPrice_KEY, marketPrice.data)
    return marketPrice.data;
}

async function getConfirmedTransactions() {
    let tradeVolume = storageService.load(TradeVolume_KEY);
    if (tradeVolume) return Promise.resolve(tradeVolume);
    tradeVolume = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`)
    storageService.store(TradeVolume_KEY, tradeVolume.data)
    return tradeVolume.data;
    
}