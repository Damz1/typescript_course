// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
}
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    return false;
}
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
console.log(twoFer());
console.log(twoFer("david"));
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
