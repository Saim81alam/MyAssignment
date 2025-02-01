// question 2....

let Rstr = 'I love my India';
let words = Rstr.split(' ');
let reversedWords = words.reverse();
let reversedStr = reversedWords.join(' ');
console.log('Question-2 '+reversedStr);

// question 3 ........
let Estr = "india";
let array = Estr.split('');
array.splice(3,0, 'ones');
let newStr = array.join('');
console.log('question-3 '+newStr)


// question 4 .............

let countStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let vowels = "aeiouAEIOU";

// Initialize counters for vowels and consonants
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < countStr.length; i++) {
  let char = countStr[i].toLowerCase(); 
  if (vowels.includes(char)) {
    vowelCount++;
  }else if (char >= 'a' && char <= 'z') {
    consonantCount++;
  }
}
console.log("Question-4")
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);



// question 5.................


function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(`\\b${wrong}\\b`, 'gi'), correct);
  }
  
  // Example usage
  let sentence = "I have a wring idea about this wring method.";
  let correctedSentence = correctfn(sentence, "wring", "wrong");
  
  console.log("question-5: "+correctedSentence);
  

//   question 6 .......................


let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let answer = inputArr.filter(num => num > 5);

console.log("question-6: "+answer);  


// question 7 .........................

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  // Calculate average score for each student
  const output = students.map(student => {
    const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
    return { name: student.name, average: Math.round(average) };
  });
  
  console.log("Question 7:- "+output);



//   question 8..............................

function repeatedSumOfDigits(num) {
    while (num >= 10) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  }
  
  // Example usage
  let result = repeatedSumOfDigits(456);
  console.log("Question 8:- "+result);



//   question 9.....................

function countWords(paragraph) {
    
    const words = paragraph.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
  }
  
  let paragraph = "This is an example paragraph with several words.";
  let wordCount = countWords(paragraph);
  
  console.log( "Question 9:- "+wordCount);  // Output will be 7
  
  

  // Question 10 ........................

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  let input = "Hello";
  let output1 = reverseString(input);
  
  console.log("Question 10:- "+output1);  // Output will be 'olleH'
  
  

  // Question 11 .............................

  const Mystudents = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Calculate average for each student
const averages = Object.keys(Mystudents).map(student => {
    const scores = Object.values(Mystudents[student]);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    const average = sum / scores.length;
    return { [student]: { average: average } };
});

console.log("Question 11 :- "+averages);
