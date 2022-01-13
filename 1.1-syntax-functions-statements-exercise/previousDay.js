function previousDay(year, month, day) {
    let dayInYear = new Date(year, month, day).getDate() - 1;

    if (dayInYear == 0) {
        month = month - 1;
        dayInYear = new Date(year, month, day - 1).getDate();
    }

    console.log(`${year}-${month}-${dayInYear}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
