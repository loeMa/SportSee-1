import React from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import "../styles/components/performance.css"

const Performance = (data) => {
    
    /**
     * @type {Object}
     */
    const performanceData = data.data;

    /**
     * @type {Object}
     * @property {String}
     */
    const languageArray = {
                            "1": "cardio",
                            "2": "energie",
                            "3": "endurance",
                            "4": "force",
                            "5": "vitesse",
                            "6": "intensité"
                        }

    /**
     * 
     * @param {String} value 
     * @returns {String}
     */
    function formatted(value) {
        if(value ) return languageArray[value].charAt(0).toUpperCase() + languageArray[value].slice(1)
        
        return value
    }

    /**
     * 
     * @param {Object} props - charts and api's data
     * @returns {String}
     */
    const customTick = (props) =>{
        const { textAnchor, x, y, cy, payload } = props;

        return (
            <text  
            y={y + (y - cy) / 8}
            x={x } className="performance--text"  textAnchor={textAnchor} dominantBaseline="hanging">	
                {formatted(payload.value)}
            </text>
        );
    }


    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="51%" outerRadius="70%"  startAngle={30} endAngle={-330} data={performanceData.data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" cy={140} 
                        tick={customTick} />
                    
                    <Radar  dataKey="value"  fill="#FF0101B2"  />
                </RadarChart>
            </ResponsiveContainer> 
        </div>
    );
};

Performance.propTypes = {
    data: PropTypes.object
  }


export default Performance;