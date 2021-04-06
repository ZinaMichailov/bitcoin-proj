
import { Component } from 'react'
import { Chart } from '../../cmps/Chart/Chart'
import { bitcoinService } from '../../services/bitcoinService'

import './StatisticPage.scss'

export class StatisticPage extends Component {
    state = {
        marketPrice: null,
        tradeVolume: null
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadTradeVolume()
    }

    async loadMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ marketPrice })
    }

    async loadTradeVolume() {
        const tradeVolume = await bitcoinService.getConfirmedTransactions()
        this.setState({ tradeVolume })
    }

    get marketPriceValues() {
        return this.state.marketPrice.values.map(pos => pos.y)
    }

    get tradeVolumeValues() {
        return this.state.tradeVolume.values.map(pos => pos.y)
    }

    render() {
        const { marketPrice, tradeVolume } = this.state
        return (
            <div className="statistic-page">
                <h2>statistics</h2>
                {marketPrice && (
                    <div className="price-chart">
                        <h3>{marketPrice.name}</h3>
                        <Chart values={this.marketPriceValues} />
                        <p>{marketPrice.description}</p>
                    </div>
                )}
                {tradeVolume && (
                    <div className="trade-chart">
                        <h3>{tradeVolume.name}</h3>
                        <Chart values={this.tradeVolumeValues} />
                        <p>{tradeVolume.description}</p>
                    </div>
                )}
            </div>
        )
    }
}
