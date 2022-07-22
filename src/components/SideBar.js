import React from 'react';
import '../styles/components/sidebar.css';
import zen from '../assets/img/zen.png';
import swim from '../assets/img/swim.png';
import bike from '../assets/img/bike.png';
import fitness from '../assets/img/fitness.png';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar__list'>
                <li><img src={zen} alt='Yoga' /></li>
                <li><img src={swim} alt='Swim' /></li>
                <li><img src={bike} alt='bike' /></li>
                <li><img src={fitness} alt='fitness' /></li>
            </ul>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
};

export default SideBar;