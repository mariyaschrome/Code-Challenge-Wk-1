const prompt = require("prompt-sync")({ sigint: true });
// Function to generate a grade based on marks
function generateGrade(marks) {
   if (marks > 79) {
        return `A`;
    } else if (marks >= 60 && marks <= 79) {
        return `B`;
    } else if (marks >= 49 && marks <= 59) {
        return `C`;
    } else if (marks >= 40 && marks <= 49) {
        return `D`;
    } else if (marks < 40) {
        return `E`;
    }
}

// Function to check if number input is within 0-100 range
function checkInput(input) {
    if (marks >= 0 || marks <= 100) {
        return true;
    } else if (marks < 0 || marks > 100) {
        return false;
    }
}
// Prompt the user to input the marks
const grade = prompt("Please enter your grades.");

// Output the correct grades
console.log(`You scored a: ${generateGrade(grade)}`);
