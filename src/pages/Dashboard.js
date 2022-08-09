import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import { CallActivities, CallApi, CallPerformance, CallSessions, MockApi } from '../utils/CallApi'; 
import '../styles/pages/dashboard.css'
import Card from '../components/Card';
import energy from '../assets/img/energy.svg';
import chicken from '../assets/img/chicken.svg';
import apple from '../assets/img/apple.svg';
import cheeseburger from '../assets/img/cheeseburger.svg'
import Activity from '../components/Activity';
import Loader from '../components/Loader';
import SessionsAverage from '../components/SessionsAverage';
import Performance from '../components/Performance';
import Score from '../components/Score';


const Dashboard = () => {
    
    const {id} = useParams()
    const { userData, isUserLoading } = CallApi(`http://localhost:3000/user/${id}`)
    const { activities, isActivityLoading} = CallActivities(`http://localhost:3000/user/${id}/activity`)
    const { sessions, isSessionsLoading } = CallSessions(`http://localhost:3000/user/${id}/average-sessions`)
    const { performance, isPerformanceLoading } =CallPerformance(`http://localhost:3000/user/${id}/performance`)
    let isLoading ;

    if(isUserLoading && isActivityLoading && isSessionsLoading && isPerformanceLoading ){
        isLoading = true
    }else{
        isLoading = false
    }

    /* const {isLoading, userData,activities, sessions, performance} = MockApi() */

    return (
        <div>
            <NavBar />
            <SideBar />
             {isLoading? ( 
            <div className='loader__container'>
                <Loader />
            </div>
            
            ) : (
            <div className='dashboard'>
                <div className='dashboard__intro'>
                    <h1>Bonjour <span className='dashboard__name'>{userData.firstName}</span></h1> 
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='dashboard__main'>
                    
                            <Activity data={activities.sessions} />
                            <SessionsAverage data={sessions.sessions} />
                            <Performance data={performance} />
                            <Score scoreData={userData.score? userData.score : userData.todayScore } />
                        
                    
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