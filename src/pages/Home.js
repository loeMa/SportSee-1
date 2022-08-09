import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css'


const Home = () => {
    
    return (
        <div>
            <NavBar />
            <SideBar />
            <div className='home_button'>
                <Link to={`/user/12`}><p>Karl</p></Link>
                <Link to={`/user/18`}><p>Cécilia</p> </Link>
            </div>
            
        </div>
    );
};

export default Home;