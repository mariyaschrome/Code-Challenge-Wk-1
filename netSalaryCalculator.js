const prompt = require("prompt-sync")({ sigint: true });
// Create a function to calculate tax rates
function calculateTaxRate(monthlyTaxablePay) {
    if (monthlyTaxablePay <= 24000) {
       return taxAmount = monthlyTaxablePay * 0.10;
    } else if (monthlyTaxablePay >= 24001 && monthlyTaxablePay <= 32333) {
        return taxAmount = monthlyTaxablePay * 0.25;
    } else if (monthlyTaxablePay >= 32334 && monthlyTaxablePay <= 500000) {
        return taxAmount = monthlyTaxablePay * 0.3;
    } else if (monthlyTaxablePay >= 500001 && monthlyTaxablePay <= 800000) {
        return taxAmount = monthlyTaxablePay * 0.325;
    } else if (monthlyTaxablePay > 800000) {
        return taxAmount = monthlyTaxablePay * 0.35;
    }
}

// Create a function to calculate NHIF deductions
function calculateNhifDeduction(grossPay) {
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay >= 6000 && grossPay <= 7999) {
        return 300;
    } else if (grossPay >= 8000 && grossPay <= 11999) {
        return 400;
    } else if (grossPay >= 12000 && grossPay <= 14999) {
        return 500;
    } else if (grossPay >= 15000 && grossPay <= 19999) {
        return 600;
    } else if (grossPay >= 20000 && grossPay <= 24999) {
        return 750;
    } else if (grossPay >= 25000 && grossPay <= 29999) {
        return 850;
    } else if (grossPay >= 30000 && grossPay <= 34999) {
        return 900;
    } else if (grossPay >= 35000 && grossPay <= 39999) {
        return 950;
    } else if (grossPay >= 40000 && grossPay <= 44999) {
        return 1000;
    } else if (grossPay >= 45000 && grossPay <= 49999) {
        return 1100;
    } else if (grossPay >= 50000 && grossPay <= 59999) {
        return 1200;
    } else if (grossPay >= 60000 && grossPay <= 69999) {
        return 1300;
    } else if (grossPay >= 70000 && grossPay <= 79999) {
        return 1400;
    } else if (grossPay >= 80000 && grossPay <= 89999) {
        return 1500;
    } else if (grossPay >= 90000 && grossPay <= 99999) {
        return 1600;
    } else if (grossPay > 100000) {
        return 1700;
    }
}

// Create a function to calculate NSSF deductions
function calculateNssfDeduction(pensionablePay) {
    if (nssfEmployeeRate = 0.06) {
        return Math.abs(pensionablePay * nssfEmployeeRate)
    }
}

// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {

// Calculate Gross Salary
    let grossSalary = Math.abs(basicSalary) + Math.abs(benefits);
   
 // Calculate Tax Rate
   let taxRate = calculateTaxRate(grossSalary); 

// Calculate NHIF Deduction
   let nhifDeduction = calculateNhifDeduction(grossSalary); 

// Calculate NSSF Deduction
   let pensionablePay = basicSalary;
   let nssfDeduction = calculateNssfDeduction(pensionablePay);

// Calculate Net Salary
   let netSalary = grossSalary - taxRate - nhifDeduction - nssfDeduction;

   return {
       grossSalary: grossSalary,
       taxRate: taxRate,
       nhifDeduction: nhifDeduction,
       nssfDeduction: nssfDeduction,
       netSalary: netSalary,
   };

}

// Prompt user to input basic salary and benefits
const basicSalary = prompt("Please enter your basic Salary.");
const benefits = prompt("Please enter your benefits.");
 
// Output salary Information
const salaryInformation = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryInformation.grossSalary);
console.log("Tax Rate:", salaryInformation.taxRate);
console.log("NHIF Deduction:", salaryInformation.nhifDeduction);
console.log("NSSF Deduction:", salaryInformation.nssfDeduction);
console.log("Net Salary:", salaryInformation.netSalary);