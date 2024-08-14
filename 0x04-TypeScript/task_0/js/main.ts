interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// creating two students of interface Student

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
};

const student2: Student = {
    firstName: 'Mary',
    lastName: 'Jane',
    age: 20,
    location: 'California'
};

const studentsList: Student[] = [student1, student2];

// creating table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
