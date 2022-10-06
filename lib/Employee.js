class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // get the user's name 
    getName () {
        return this.name;
    }
    // get the user's ID
    getID () {
        return this.id;
    }
    // get the user's email 
    getEmail () {
        return this.email;
    }
    // get the user's role 
    getRole () {
        return 'Employee';
    }
};

// export module 
module.exports = Employee;