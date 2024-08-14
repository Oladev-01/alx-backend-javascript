interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: string;
    readonly lastName: number;
    location: string;
    [key: string]: any;
}

// extending the Teacher interface

interface Directors extends Teacher {
    numberOfReports: number;
}

// printTeacher function: i need to write the interface for the function first
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

