import React from 'react';
import { Pie, PieChart,ResponsiveContainer } from 'recharts';
import "../styles/components/score.css";
import PropTypes from 'prop-types';



const Score = (scoreData) => {

    /**
     * @type {Number}
     */
    const scorePurcent = (scoreData.scoreData * 100)

    /**
     * @type {Object[]}
     */
    const chartData = [
        {name: 'max', value: 100, fill: 'none'},
        {name: 'score', value: scorePurcent, fill: '#FF0000'}
        ];


    return (
        <div className='score'>
            <p className='score__title'>Score</p>

            <div className='legend__score'>
                <div>
                    <p className='legend__score__purcent'>
                        {scorePurcent}%
                    </p>
                    <p className='legend__score__text'> de votre objectif</p>
                </div>
            </div> 

            <ResponsiveContainer width="100%" height="100%">
            
                <PieChart width={400} height={400}>
                    <Pie data={[{ value: 100 }]} dataKey="value" cx="50%" cy="50%" innerRadius={0} outerRadius={65} fill="#ffffff" isAnimationActive={false} /> 
                    <Pie
                        startAngle={80}
                        endAngle={-270}
                        cornerRadius='50%'
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        stroke='none'
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        innerRadius={65}
                        
                        labelLine= {false}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

Score.propTypes = {
    scoreData: PropTypes.number
  }

export default Score;