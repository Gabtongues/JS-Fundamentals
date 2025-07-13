// This script prints the first command-line argument passed to it.
// If no arguments are provided, it prints "No argument".

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node' (the executable path).
// process.argv[1] is the path to the script file.
// process.argv[2] is the first actual argument provided by the user.

const args = process.argv;

// Check if the element at index 2 (the first user-provided argument) exists.
// If it's not undefined, an argument was passed.
if (args[2] !== undefined) {
  // If an argument exists, print it to the console.
  console.log(args[2]);
} else {
  // If no argument exists at index 2, print "No argument".
  console.log("No argument");
}
