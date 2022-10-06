 const Employee = require('./Employee');

// intern constructor is an extension of employee 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 
        this.school = school; 
    }
    // returning school from input 
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