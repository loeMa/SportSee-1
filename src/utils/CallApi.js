import axios from "axios";
import { useEffect, useState } from "react";
import { ActivitiesMapper, PerformanceMapper, SessionsMapper, UserMapper } from "./UserMapper";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";



/**
 * Axios User_MAIN_DATA from the API
 * @param {string} url url of the API
 * @returns {object}
 */
export function CallApi(url){
    const [userData, setUserData] = useState({})
    const [isUserLoading, setIsUserLoading] = useState(true)

    useEffect(() =>{ 

        const getUserMainData = async() =>{
            try{
                await axios
                .get(url)
                .then((res) => {
                    
                    const {data} =  res.data
                    setUserData(UserMapper.convertToUser(data))
                    
                }) 
                setIsUserLoading(false)
                
            } catch(err){
                console.log(err)
            }
        } 
            setIsUserLoading(true)
            getUserMainData()
            
    }, [url])

    return {isUserLoading, userData}
} 

CallApi.propTypes ={
    url : PropTypes.string
}



/**
 * Axios USER_ACTIVITY from the API
 * @param {String} url url of the API
 * @returns {object}
 */

export function CallActivities(url){
    const [activities, setActivities] = useState({})
    const [isActivityLoading, setIsActivityLoading] = useState(true)
    
    
    useEffect(() =>{ 

        const getUserActivity = async() =>{
            try{
                await axios
                .get(url)
                .then((res) => {
                    const {data} =  res.data 
                    
                    setActivities(ActivitiesMapper.convertToActivities(data))
                }) 
                setIsActivityLoading(false)
                
            } catch(err){
                console.log(err)
            }
        } 
            setIsActivityLoading(true)
            getUserActivity()
        
    }, [url])

    return {isActivityLoading, activities}
} 
CallActivities.propTypes ={
    url : PropTypes.string 
}



/**
 * Axios USER_AVERAGE_SESSIONS from the API
 * @param {String} url 
 * @returns {object}
 */
export function CallSessions(url){
    const [sessions, setSessions] = useState({})
    const [isSessionsLoading, setIsessionsLoading] = useState(true)
    
    
    useEffect(() =>{ 

        const getUserSessions = async() =>{
            try{
                await axios
                .get(url)
                .then((res) => {

                    const {data} =  res.data 
                    
                    setSessions(SessionsMapper.convertToSessions(data))
                    
                }) 
                setIsessionsLoading(false)
                
            } catch(err){
                console.log(err)
            }
        } 
        setIsessionsLoading(true)
        getUserSessions()

    }, [ url])

    return {isSessionsLoading, sessions}
} 
CallSessions.propTypes ={
    url : PropTypes.string 
}



/**
 * Axios USER_PERFORMANCE from the API
 * @param {String} url 
 * @returns {object}
 */
export function CallPerformance(url){
    const [performance, setPerformance] = useState({})
    const [isPerformanceLoading, setIsPerformanceLoading] = useState(true)
    
    
    useEffect(() =>{ 

        const getUserPerformance = async() =>{
            try{
                await axios
                .get(url)
                .then((res) => {
                    const {data} =  res.data 
                    
                    setPerformance(PerformanceMapper.convertToPerformance(data))
                    
                }) 
                setIsPerformanceLoading(false)
                
            } catch(err){
                console.log(err)
            }
        } 
        setIsPerformanceLoading(true)
        getUserPerformance()

    }, [ url])

    return {isPerformanceLoading, performance}
} 
CallSessions.propTypes ={
    url : PropTypes.string 
}


/**
 * Axios call Mock data
 * @returns {object}
 */
export function MockApi(){
    const {id} = useParams()
    const [userData, setUserData] = useState({})
    const [activities, setActivities] = useState({})
    const [sessions, setSessions] = useState({})
    const [performance, setPerformance] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{ 

        const getMockData = async() =>{
            try{
                await axios
                .get("http://localhost:3001/mock.json")
                .then((res) => {

                    const mainData = res.data.USER_MAIN_DATA
                    const userId = mainData.find((user) => user.id == id)
                    setUserData(UserMapper.convertToUser(userId))

                    const activityData = res.data.USER_ACTIVITY
                    const activityId = activityData.find((user) => user.userId == id) 
                    
                    setActivities(ActivitiesMapper.convertToActivities(activityId))

                    const sessionsData = res.data.USER_AVERAGE_SESSIONS
                    const sessionsId = sessionsData.find((user) => user.userId == id)
                    
                    setSessions(SessionsMapper.convertToSessions(sessionsId))
                    
                    const performanceData = res.data.USER_PERFORMANCE
                    const performanceId = performanceData.find((user) => user.userId == id)

                    setPerformance(PerformanceMapper.convertToPerformance(performanceId))
                }) 
                setIsLoading(false)
                
            } catch(err){
                console.log(err)
            }
        } 
            setIsLoading(true)
            getMockData()

        
            
    }, [id])

    return {isLoading, userData,activities, sessions, performance}
}  