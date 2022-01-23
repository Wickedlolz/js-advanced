function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        const inputTxt = document.querySelector('#inputs textarea');
        let parsedInput = JSON.parse(inputTxt.value);
        let restaurants = createRestaurantObj(parsedInput);

        let sortedByAvgSalary =
            Object.entries(restaurants).sort(compareByAvgSalary);

        let bestRestaurant = '';
        let bestWorkers = '';

        for (let [restaurantName, restaurantInfo] of sortedByAvgSalary) {
            let sortedWorkers = Object.entries(restaurantInfo.workers).sort(
                compareSalary
            );

            bestRestaurant = `Name: ${restaurantName} Average Salary: ${restaurantInfo.avgSalary.toFixed(
                2
            )} Best Salary: ${sortedWorkers[0][1].salary.toFixed(2)}`;

            for (let workers of sortedWorkers) {
                bestWorkers += `Name: ${workers[1].workerName} With Salary: ${workers[1].salary} `;
            }
            break;
        }

        document.querySelector('#bestRestaurant p').textContent =
            bestRestaurant;
        document.querySelector('#workers p').textContent = bestWorkers;

        function compareSalary(a, b) {
            return b[1].salary - a[1].salary;
        }

        function compareByAvgSalary(a, b) {
            return b[1].avgSalary - a[1].avgSalary;
        }

        function createRestaurantObj(inputArray) {
            let result = {};

            inputArray.forEach((el) => {
                let splittedElement = el.split(' - ');
                let [restaurantName, workersInfo] = splittedElement;

                if (result[restaurantName] == undefined) {
                    result[restaurantName] = {
                        workers: [],
                        avgSalary: 0,
                    };
                }

                let workersArr = workersInfo.split(', ');

                workersArr.forEach((worker) => {
                    let [workerName, salary] = worker.split(' ');
                    salary = Number(salary);

                    if (
                        !result[restaurantName]['workers'].some(
                            (x) => x.workerName == workerName
                        )
                    ) {
                        result[restaurantName]['workers'].push({
                            workerName,
                            salary,
                        });

                        result[restaurantName]['avgSalary'] += salary;
                    }
                });

                result[restaurantName]['avgSalary'] =
                    result[restaurantName]['avgSalary'] /
                        result[restaurantName]['workers'].length || 0;
            });

            return result;
        }
    }
}
