function filterEmployees(input, criteria) {
    let employees = JSON.parse(input);

    if (criteria == 'all') {
        employees
            .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
            .forEach((x) => console.log(x));
    } else {
        let [prop, value] = criteria.split('-');

        employees
            .filter((x) => x[prop] == value)
            .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
            .forEach((x) => console.log(x));
    }
}

filterEmployees(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);
