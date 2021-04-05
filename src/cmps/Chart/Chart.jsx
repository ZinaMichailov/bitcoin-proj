import './Chart.scss'
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export const Chart = ({values}) => {

    return (
        <div className="chart">
            <Sparklines data={values} limit={200} width={100} height={20} margin={200}>
                <SparklinesLine color="#008e9b" width={100} height={20}/>
            </Sparklines>
        </div>

    )
}

