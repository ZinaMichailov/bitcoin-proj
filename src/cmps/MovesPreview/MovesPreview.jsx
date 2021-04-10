

import './MovesPreview.scss'

export const MovesPreview = ({ move }) => {

    return (
        <div className="moves-preview">
            <p>To: {move.to}</p>
            <p>At: {move.at}</p>
            <p>Amount: {move.amount}</p>
        </div>
    )
}

