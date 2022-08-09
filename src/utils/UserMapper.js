import UserMainData from './model/UserMainData';
import UserActivities from './model/UserActivities';
import UserSessions from './model/UserSessions';
import UserPerformance from './model/UserPerformance';



/**
 * Class to format user detail into json
 */

export class UserMapper {
    /**
     * define json
     * @param {JSON} json any valid JSON
     * @returns {string|number} with json format
     */
    static convertToUser(json) {
        return new UserMainData(
            json.id,
            json.userInfos.firstName,
            json.userInfos.lastName,
            json.userInfos.age,
            json.todayScore,
            json.score,
            json.keyData.calorieCount,
            json.keyData.proteinCount,
            json.keyData.carbohydrateCount,
            json.keyData.lipidCount,
            
        );
    }
};

/**
 * Class to format activities detail into json
 */
export class ActivitiesMapper {
    /**
     * 
     * @param {JSON} json any valid JSON
     * @returns {string|number} with json format
     */
    static convertToActivities(json) {
        return new UserActivities(
            json.userId,
            json.sessions,
            
            
        );
    }
}


/**
 * Class to format sessions detail into json
 */
 export class SessionsMapper {
    /**
     * 
     * @param {JSON} json any valid JSON
     * @returns {string|number} with json format
     */
    static convertToSessions(json) {
        return new UserSessions(
            json.userId,
            json.sessions
            
            
        );
    }
}


/**
 * Class to format performance detail into json
 */
 export class PerformanceMapper {
    /**
     * 
     * @param {JSON} json any valid JSON
     * @returns {string|number} with json format
     */
    static convertToPerformance(json) {
        return new UserPerformance(
            json.userId,
            json.kind,
            json.data
            
            
        );
    }
}