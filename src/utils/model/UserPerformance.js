
/**
 * Class to create new user performance data
 */

 export default class UserPerformance{

    /**
     * 
     * @param {Number} userId 
     * @param {String} kind 
     * 
     */

    constructor(userId, kind, data) {
        this.userId = userId;
        this.kind = kind;
        this.data = data
    }
}