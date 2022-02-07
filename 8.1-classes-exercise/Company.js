class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null) {
            throw new Error('Invalid input!');
        }

        if (salary == '' || salary == undefined || salary == null) {
            throw new Error('Invalid input!');
        }

        if (position == '' || position == undefined || position == null) {
            throw new Error('Invalid input!');
        }

        if (department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!');
        }

        if (Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        if (this.departments[department] == undefined) {
            this.departments[department] = [];

            this.departments[department].push({
                name,
                salary: Number(salary),
                position,
            });

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        } else {
            this.departments[department].push({
                name,
                salary: Number(salary),
                position,
            });

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let average = 0;
        let bestCompany = '';
        let bestEmployees = [];

        Object.entries(this.departments).forEach((x) => {
            let currAvg = 0;
            let currentBestEmployees = [];

            x[1].forEach((c) => {
                currAvg += c.salary;
                currentBestEmployees.push({
                    name: c.name,
                    salary: c.salary,
                    position: c.position,
                });
            });

            currAvg = currAvg / currentBestEmployees.length;

            if (currAvg > average) {
                average = currAvg;
                bestCompany = x[0];
                bestEmployees.length = 0;
                currentBestEmployees.forEach((e) => bestEmployees.push(e));
            }
        });

        let output = '';
        output += `Best Department is: ${bestCompany}\n`;
        output += `Average salary: ${average.toFixed(2)}\n`;

        let sorted = Object.values(bestEmployees).sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        sorted.forEach(
            (employee) =>
                (output += `${employee.name} ${employee.salary} ${employee.position}\n`)
        );

        return output;
    }
}

let c = new Company();
// c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
// c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
// c.addEmployee('Slavi', 500, 'dyer', 'Construction');
// c.addEmployee('Stan', 2000, 'architect', 'Construction');
// c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
// c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
// c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
// console.log(c.bestDepartment());

c.addEmployee('Stanimir', 2000, 'engineer', 'Human resources');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
