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
