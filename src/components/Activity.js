import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/components/activity.css';
import PropTypes from 'prop-types';

const Activity = (data) => {

    /**
     * @type {String}
     */
    const activitiesArray = data.data;

    /**
     * 
     * @param {Number} value 
     * @returns {String}
     */
    function formatXAxis(value) {
        return value.charAt(value.length-1)
    }

    const CustomTooltip = ({ active, payload, label }) => {
        
        if (active ) {
            return (
                <div className="custom-tooltip-activity">
                    
                <span className="label">{payload[0].value}kg </span>
                <span className="intro">{payload[1].value}Kcal</span>
                
                </div>
            );
            }
            
        return null;
    };

    return (
        <div className='activity'>
            <p>Activité quotidienne</p>
            <ResponsiveContainer width="99%" height="100%">
                <BarChart
                width='50%'
                height='50%'
                data={activitiesArray}
                margin={{
                    top: 23,
                    right: 53,
                    left: 43,
                    bottom: 52,
                }}
                >
                
                <XAxis tickLine={false}  dataKey="day" fontSize={14} tickSize={26} tickFormatter={formatXAxis} />
                

                <YAxis tickCount={3} dataKey="kilogram" fontSize={14} tickSize={45} orientation='right' tickLine={false} axisLine={false} type="number"  domain={['dataMin - 2', 'dataMax + 5']} />
                <YAxis tickCount={3} dataKey="calories"  tickLine={false} type="number" yAxisId='calorie' hide domain={[ 0 , 'dataMax + 50']} />

                <Tooltip   cursor={{ opacity: '0.5' }} content={<CustomTooltip />} />

                <Legend align='right'  iconSize="8" fontSize={14} verticalAlign='top' height={90}  iconType='circle' 
                formatter={(value, entry, index) => <span style={{color : '#74798C', fontSize : '14px', padding: "10px 0"}}>{value}</span>}
                />

                <CartesianGrid strokeDasharray="3 2" vertical={false} />

                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="calories" yAxisId='calorie' fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

Activity.propTypes = {
  data: PropTypes.array
}

export default Activity;