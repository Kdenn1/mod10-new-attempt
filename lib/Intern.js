const Employee = require('./Employee');

// make sure the intern is an extension of employee
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee data
        super (name, id, email); 

        this.school = school; 
    }

    // returning user's school 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// module export 
module.exports = Intern; 