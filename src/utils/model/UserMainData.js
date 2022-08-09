
/**
 * Class to create new user
 */

export default class UserMainData{
    /**
     * user details
     * @param {number} id id of the user
     * @param {string} firstName user firstname
     * @param {string} lastName user lastname
     * @param {number} age user age
     * @param {number} score user today score
     * @param {number} calorieCount user today calories eaten
     * @param {number} proteinCount user today protein eaten
     * @param {number} carbohydrateCount user today carbohydate eaten
     * @param {number} lipidCount user today lipid eaten
     */
    constructor(id, firstName, lastName, age, todayScore, score, calorieCount, proteinCount, carbohydrateCount, lipidCount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.todayScore = todayScore;
        this.score = score ;
        this.calorieCount = calorieCount;
        this.proteinCount = proteinCount;
        this.carbohydrateCount = carbohydrateCount;
        this.lipidCount = lipidCount;


    }
}

