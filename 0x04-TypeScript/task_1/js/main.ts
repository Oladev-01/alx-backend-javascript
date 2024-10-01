interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: string;
    readonly lastName: string;
    location: string;
    [key: string]: any;
}

// extending the Teacher interface

interface Directors extends Teacher {
    numberOfReports: number;
}
/**
 * const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);
*/

// printTeacher function: i need to write the interface for the function first
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// console.log(printTeacher("John", "Doe")); testing printTeacher

interface studentClass {
    workOnHomework(): string;
    displayName(): string;
}

interface studentClassConstructor {
    new (firstName: string, lastName: string): studentClass;
}

class studentClass implements studentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return `${this.firstName}`;
    }
}

// testing for studentClass
//const newClass = new studentClass("John", "Doe");
//console.log(newClass);
//console.log(newClass.workOnHomework());
//console.log(newClass.displayName());
