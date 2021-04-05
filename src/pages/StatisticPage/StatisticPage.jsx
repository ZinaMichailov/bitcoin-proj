
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
        console.log(tradeVolume);
        this.setState({ tradeVolume })
    }

    render() {
        const { marketPrice, tradeVolume } = this.state
        return (
            <div className="statistic-page">
                <h2>statistics</h2>
                {marketPrice && (
                    <div>
                        <h4>{marketPrice.name}</h4>
                        <p>{marketPrice.description}</p>
                        {/* <Chart values={marketPrice.values} /> */}
                    </div>
                )}
                {tradeVolume && (
                    <div>
                        <h4>{tradeVolume.name}</h4>
                        <p>{tradeVolume.description}</p>
                        {/* <Chart values={tradeVolume.values} /> */}
                    </div>
                )}
            </div>
        )
    }
}
