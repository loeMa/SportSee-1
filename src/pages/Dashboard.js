import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { CallActivities, CallApi } from '../utils/CallApi'; 
import '../styles/pages/dashboard.css'
import Card from '../components/Card';
import energy from '../assets/img/energy.svg';
import chicken from '../assets/img/chicken.svg';
import apple from '../assets/img/apple.svg';
import cheeseburger from '../assets/img/cheeseburger.svg'
import Activity from '../components/Activity';
import Loader from '../components/Loader';

const Dashboard = () => {
    const {id} = useParams()
    const { userData, isUserLoading } = CallApi(`http://localhost:3000/user/${id}`)
    const { activities, isActivityLoading} = CallActivities(`http://localhost:3000/user/${id}/activity`)


    return (
        <div>
            <NavBar />
            <SideBar />
             {isUserLoading || isActivityLoading ? ( 
            <div className='loader__container'>
                <Loader />
            </div>
            
            ) : (
            <div className='dashboard'>
                <div className='dashboard__intro'>
                    <h1>Hello <span className='dashboard__name'>{userData.firstName}</span></h1> 
                </div>
                <div className='dashboard__main'>
                    <div>
                        <Activity data={activities.sessions} />
                    </div>
                    
                    <div className='column__sum'>
                        <Card data={userData.calorieCount} shortName="kCal" title='Calories' img={energy} color='#fbeaea' ></Card>
                        <Card data={userData.proteinCount} shortName="g" title='Proteines' img={chicken} color='#e9f4fb' ></Card>
                        <Card data={userData.carbohydrateCount} shortName="g" title='Glucides' img={apple} color='#fbf6e5' ></Card>
                        <Card data={userData.lipidCount} shortName="g" title='Lipides' img={cheeseburger} color='#fbeaef' ></Card>
                    </div>
                    
                </div>
            </div>
            )} 
            
            
        </div>
    );
};

export default Dashboard;