import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/components/activity.css';
import PropTypes from 'prop-types';

const Activity = (data) => {

    const activitiesArray = data.data;
    const key = activitiesArray.lenght + 1
    

    return (
        <div className='activity'>
            <p>Activité quotidienne</p>
                <BarChart
                width={739}
                height={300}
                data={activitiesArray}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                
                <XAxis tick={false} dataKey={key} />
                <YAxis tickCount={3} orientation='right'  />
                <Tooltip />
                <Legend align='right' verticalAlign='top' height={36} />
                <CartesianGrid strokeDasharray="3 2" />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} />
                </BarChart>
            
        </div>
    );
};

Activity.propTypes = {
  data: PropTypes.array
}

export default Activity;