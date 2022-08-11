import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../styles/components/sessionsAverage.css';
import PropTypes from 'prop-types';

const SessionsAverage = (data) => {

    /**
     * @type {Object}
     */
    const sessions = data.data


    /**
     * 
     * @param {Number} value - change index to days
     * @returns {String}
     */
    function formatXAxis(value) {
        if(value === 1) return "L"
        if(value === 2) return "M"
        if(value === 3) return "M"
        if(value === 4) return "J"
        if(value === 5) return "V"
        if(value === 6) return "S"
        if(value === 7) return "D"
        
        return value
    }

    /**
     * 
     * @param {Object[]} - use x points for rect
     * @returns {String}
     */
    const CustomCursor = ({points}) =>{
        
        return ( 
        <rect x={points[0].x} y="0" width="100%" height="100%" fill="rgba(0, 0, 0, 0.1)" />
        )
    }

    /**
     * 
     * @param {Boolean} active 
     * @param {Object[]} payload - style and api's data
     * @returns {String}
     */
    const CustomTooltip = ({ active, payload }) => {

        if (active && payload && payload.length ) {
            return (
                <div className="custom-tooltip-sessions">
                    
                    <span className="label">{payload[0].value} min </span>

                </div>
            );
            }
            
        return null;
    };


    return (
        <div className='sessions'>
            <p className='sessions__title'>Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={730} height={250} data={sessions}
                margin={{ top: 100, right: 14, left: 14, bottom: 39 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="20%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4}/>
                        
                        <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>
                    <XAxis  dataKey="day" stroke='#FFFFFF' opacity={0.5} tickSize={29} tickLine={false} axisLine={false} tickFormatter={formatXAxis} />
                    <YAxis hide/>
                    <Tooltip cursor={<CustomCursor/>} content={<CustomTooltip />} />
                    
                    <Line type="natural" dot={false} activeDot={{fill: '#ffffff',  r: 4,stroke:'#fff', strokeWidth: 8, strokeOpacity: "0.4" }} dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

SessionsAverage.propTypes = {
    data: PropTypes.array
  }

export default SessionsAverage;