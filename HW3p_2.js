function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const inputYear = parseInt(prompt("Введіть рік:"));

if (isLeapYear(inputYear)) {
    console.log(inputYear + " є високосним роком.");
} else {
    console.log(inputYear + " не є високосним роком.");
}
