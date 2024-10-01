interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'San-Francisco'
}

const student2: Student = {
    firstName: 'Mary',
    lastName: 'Jane',
    age: 19,
    location: 'Boston'
}
const studentsList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const rowCell1 = document.createElement('td');
    rowCell1.textContent = student.firstName;
    row.appendChild(rowCell1);
    const rowCell2 = document.createElement('td');
    rowCell2.textContent = student.location;
    row.appendChild(rowCell2);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
