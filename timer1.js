// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments.

// node timer1.js 10 3 5 15 9 
// This will make it beep at:

// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

// A quick google search shows that in order to make our machine perform a system sound, we can simply output the following special character to stdout.

// process.stdout.write('\x07');

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
const beap = function() {
  process.stdout.write('\x07');
  console.log('beap')
}
const timer = function(timeInSecs) {
  const timeBeap = Number(timeInSecs)
  if (!isNaN(timeBeap) && timeBeap > 0) {
    setTimeout(beap, timeBeap * 1000);
  }
};

const numbers = process.argv.slice(2)
for (const number of numbers) {
  timer(number);
}
