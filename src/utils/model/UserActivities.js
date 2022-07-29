
/**
 * Class to create new user activities
 */

export default class UserActivities{
    /**
     * 
     * @param {Number} userId user id
     * @param {Number} sessions user sport sessions with date, kilogram and calories burnt
     */
    constructor(userId, sessions) {
        this.userId = userId;
        this.sessions = sessions;
        
    }
}