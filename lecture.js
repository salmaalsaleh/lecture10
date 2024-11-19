console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello"); 
console.log("Hello");

for (let i=1; i<=5; i++ ){
    //block of code
    //line1
    console.log("Hello");
}

let firstName = "Harry";
let lastName = "Potter";
let house = "Gryffinfdor"
console.log(`Hello, ${firstName}, ${lastName}`)
console.log(firstName.toLowerCase());
console.log(firstName.slice(0,4));
console.log(firstName.concat("",house))

let grade = ['A', 'B', 'B+', 'C+', 'D']
let finalGrade = [100,200]
console.log(grade[1]);

grade.push(100)
console.log(grade);

grade.pop()
console.log(grade);
console.log(finalGrade.concat(grade));

grade.shift(100)
console.log(grade);

grade.slice(0,3)
console.log(grade);

grade.splice(4, 2, 100, 200)
console.log(grade);

