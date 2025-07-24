// this code pops up every time tha page is refreshed.
alert("Wellcome to my portfolio!");
console.log("Welcome to my portfolio!");
function calculateDaysBetweenDates(begin, end) {
    const start = new Date(begin);
    const finish = new Date(end);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.round((finish - start) / millisecondsPerDay);
}

// ...existing code...
console.log("Hello World");
// ...existing code...