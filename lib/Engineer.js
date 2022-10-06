 const Employee = require("./Employee");

// make sure the engineer class is an extension of the employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee data 
        super (name, id, email);

        this.github = github; 
    }

    // returning the user's github 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// module export 
module.exports = Engineer; 