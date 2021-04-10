import './MovesList.scss'
import { MovesPreview } from '../MovesPreview'

export const MovesList = ({ moves }) => {
    return (
        moves && <div className="moves-list">
            <h3>Your last moves:</h3>
            { moves.map((move, idx) => <MovesPreview key={idx} move={move} />)}
        </div>
    )
}

