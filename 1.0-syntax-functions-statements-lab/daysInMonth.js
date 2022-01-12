function daysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    console.log(days);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);
