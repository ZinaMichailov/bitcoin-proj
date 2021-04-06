import './Chart.scss'
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export const Chart = ({values}) => {

    return (
        <div className="chart">
            <Sparklines data={values} >
                <SparklinesLine color="#008e9b" />
            </Sparklines>
        </div>

    )
}

