//Task 1 
alert("Task 1")

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }
    print(string) {
        let output = '';
        for (let i = 0; i < string.length; i++) {
            if (this.ink <= 0)
                break;
            output += string[i];
            if (string[i] !== ' ') {
                this.ink -= 0.5;
            }
        }
        alert(output);
    }
}

class FilledMarker extends Marker {
    constructor(color, ink, isFilled) {
        super(color, ink);
        this.isFilled = isFilled;
    }
    fill() {
        if (this.ink < 100) {
            this.ink = 100;
            this.isFilled = true;
            alert("Marker has been refilled!");
        } else {
            alert("Marker is already full!");
        }
    }
}
let userColor, userInk;

do {
    userColor = prompt("Enter your color:");
} while (!userColor);

do {
    userInk = parseFloat(prompt("Enter an amount of ink in percentage (0-100):"));
} while (isNaN(userInk) || userInk > 100 || userInk < 0);

const userMarker = new FilledMarker(userColor, userInk);

const userText = prompt("Enter text to print:");
userMarker.print(userText);

if (confirm("Do you want to refill the marker?")) {
    userMarker.fill();
}

//Task 2 
alert("Task 2");

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class ExtendedDate extends Date {
    currentDate() {
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    checkDate() {
        const current = new Date();
        return this >= current;
    }

    checkYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    nextDate() {
        const next = new Date(this);
        next.setDate(this.getDate() + 1);
        return `${next.getDate()} ${months[next.getMonth()]} ${next.getFullYear()}`;
    }
}

const today = new ExtendedDate();
alert("Current date: " + today.currentDate());

const userDateInput = prompt("Enter any date (in format YYYY-MM-DD):");
const userDate = new ExtendedDate(userDateInput);
alert("Future/current date: " + userDate.checkDate());

const userYearInput = prompt("Enter any year to check if it's leap:");
const yearDate = new ExtendedDate(userYearInput, 0);
alert("Leap year: " + yearDate.checkYear());

if (confirm("Do you want to see next date?")) {
    alert("Next date: " + today.nextDate());
}

//Task 3
alert("Task 3");

class Employee {
    constructor(position, salary, experience) {
        this.position = position;
        this.salary = salary;
        this.experience = experience;
    }
}

const bankEmployees = [
    new Employee('Teller', 15000, 2),
    new Employee('Loan Officer', 25000, 4),
    new Employee('Call Center Representative', 12000, 1),
    new Employee('Branch Manager', 30000, 5),
    new Employee('Financial Analyst', 28000, 3),
    new Employee('Cash Collector', 18000, 2),
    new Employee('Security Specialist', 22000, 3)
];

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = '<table border="1">';

        html += `
            <thead>
                <tr>
                    <th>№</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Experience</th>
                </tr>
            </thead>
            <tbody>`;

        this.employees.forEach((employee, index) => {
            html += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.experience}</td>
                </tr>`;
        });

        html += '</tbody></table>';
        return html;
    }
}
const empTable = new EmpTable(bankEmployees);

const tableHtml = empTable.getHtml();

const previewWindow = window.open();
previewWindow.document.write(tableHtml);

//Task 4
alert("Task 4");

class StyledEmpTable extends EmpTable {
    getStyles() {
        return `
      <style>
        table {
          border-collapse: collapse;
          width: 80%;
          margin: 20px auto;
          font-family: Arial, sans-serif;
          box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        }
        th {
          background-color: #080aa1ff;
          color: white;
          padding: 12px;
          text-align: left;
        }
        td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
        tr:hover {
          background-color: #e9e9e9;
        }
      </style>`;
    }

    getHtml() {
        const parentHtml = super.getHtml(); 
        return this.getStyles() + parentHtml; 
    }
}
const styledTable = new StyledEmpTable(bankEmployees);

document.body.innerHTML = styledTable.getHtml();