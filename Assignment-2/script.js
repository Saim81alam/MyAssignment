//1. Write code to display from 1 to 100 but just even numbers.

for(let i = 2; i <= 100; i+=2){
    console.log(i);
}

// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate (num1,num2,operator) {

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    
        default:
            break;
    }
    
    return result
}

console.log(calculate(20,5,'+'));
console.log(calculate(20,5,'-'));
console.log(calculate(20,5,'*'));
console.log(calculate(20,5,'/'));


// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary){
    let taxAmount;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxAmount = 0;  // No tax for salary less than or equal to 500000
            break;
        case (salary > 500000 && salary <= 1000000):
            taxAmount = salary * 0.10;
            break;     
        case (salary > 1000000 && salary <= 1500000):
            taxAmount = salary * 0.20;
            break;    
        case (salary >= 1500000):
            taxAmount = salary * 0.30;
            break;     
        default:
            taxAmount = 'Invalid salary amount';
            break;
    }
    return taxAmount;
}
console.log(findTax(2000000));  
console.log(findTax(750000));   
console.log(findTax(1200000));  
console.log(findTax(400000));   
console.log(findTax(-50000));


// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfDigitProducts(n1, n2) {
    // Convert both numbers to strings
    let str1 = n1.toString();
    let str2 = n2.toString();
    
    // Pad the shorter string with leading zeros
    while (str1.length < str2.length) {
      str1 = '0' + str1;
    }
    
    while (str2.length < str1.length) {
      str2 = '0' + str2;
    }
  
    // Calculate the sum of the products of corresponding digits
    let sum = 0;
    for (let i = 0; i < str1.length; i++) {
      sum += Number(str1[i]) * Number(str2[i]);
    }
  
    return sum;
  }
  
  // Example Usage:
  let result = sumOfDigitProducts(6, 34);
  console.log(result); // Output: 24
  