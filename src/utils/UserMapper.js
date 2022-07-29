import UserMainData from './model/UserMainData';
import UserActivities from './model/UserActivities';

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
            json.keyData.calorieCount,
            json.keyData.proteinCount,
            json.keyData.carbohydrateCount,
            json.keyData.lipidCount,
            json.userId,
            json.sessions,
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
