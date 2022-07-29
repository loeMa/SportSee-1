import axios from "axios";
import { useEffect, useState } from "react";
import {USER_MAIN_DATA} from '../data_mock/mock'
import { ActivitiesMapper, UserMapper } from "./UserMapper";
import PropTypes from 'prop-types';


/**
 * Axios User_MAIN_DATA from the API
 * @param {string} url 
 * @returns Object
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
 * @param {String} url 
 * @returns Object
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