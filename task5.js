

let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary = salary + bonus - tax;

console.log("1. Salary Calculator");
console.log("Final Salary:", finalSalary);



console.log("\n2. Predict the Output");

let a = 10;
let b = a++;
let c = ++a;

console.log(a);
console.log(b);
console.log(c);




console.log("\n3. Logical Operators");

console.log(10 > 5 && 20 < 10 || 5 === "5");
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(!(10 > 5));




console.log("\n4. ATM Withdrawal");

let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {
    console.log("Withdrawal must be greater than 0");
} else if (withdrawal > balance) {
    console.log("Insufficient balance");
} else if (withdrawal % 100 !== 0) {
    console.log("Withdrawal must be a multiple of 100");
} else {
    balance = balance - withdrawal;

    console.log("Withdrawal successful");
    console.log("Remaining balance:", balance);
}


console.log("\n5. Student Grade");

let mark = 78;

if (mark >= 90 && mark <= 100) {
    console.log("A");
} else if (mark >= 80 && mark <= 89) {
    console.log("B");
} else if (mark >= 70 && mark <= 79) {
    console.log("C");
} else if (mark >= 60 && mark <= 69) {
    console.log("D");
} else {
    console.log("Fail");
}




console.log("\n6. Nested Login");

let username = "admin";
let password = "1234";
let otp = 5555;

if (username === "admin") {

    if (password === "1234") {

        if (otp === 5555) {
            console.log("Login successful");
        } else {
            console.log("Invalid OTP");
        }

    } else {
        console.log("Invalid password");
    }

} else {
    console.log("Invalid username");
}



console.log("\n7. Number Pattern");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



console.log("\n8. Multiplication Table");

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}




console.log("\n9. Reverse Countdown");

let count = 10;

while (count >= 0) {
    console.log(count);
    count--;
}




console.log("\n10. OTP System");

let correctOTP = 1234;
let attempts = 0;
let verified = false;


let enteredOTPs = [1111, 2222, 1234];

while (attempts < 3) {

    let enteredOTP = enteredOTPs[attempts];

    console.log("Attempt:", attempts + 1);

    if (enteredOTP === correctOTP) {
        console.log("OTP verified");
        verified = true;
        break;
    } else {
        console.log("Incorrect OTP");
    }

    attempts++;
}

if (!verified) {
    console.log("Account blocked");
}




console.log("\n11. Array Search");

let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "mango"
];

for (let fruit of fruits) {
    console.log(fruit);
}

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);




console.log("\n12. Object Details");

let employeeData = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for (let key in employeeData) {
    console.log(key + ":", employeeData[key]);
}


console.log("\n13. Calculator Function");

function calculator(a, b, operator) {

    if (operator === "+") {
        return a + b;

    } else if (operator === "-") {
        return a - b;

    } else if (operator === "*") {
        return a * b;

    } else if (operator === "/") {
        return a / b;

    } else if (operator === "%") {
        return a % b;

    } else {
        return "Invalid operator";
    }
}

console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));



console.log("\n14. Employee Salary");

function salaryDetails(salary, bonus) {
    return salary + bonus;
}

console.log(salaryDetails(40000, 5000));



console.log("\n15. Default Parameter");

function employee(name, role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employee("Arun");
employee("Kamal", "Developer");



console.log("\n16. Callback Task");

function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function add(result) {
    console.log("Add:", result);
}

function sub(result) {
    console.log("Sub:", result);
}

function mul(result) {
    console.log("Mul:", result);
}

calculate(10, 5, add);
calculate(10, 5, sub);
calculate(10, 5, mul);



console.log("\n17. Generator Task");

function* rewards() {

    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";

}

let reward = rewards();

console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);




console.log("\n18. Spread Operator");

let frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

let backend = [
    "Node",
    "Express",
    "MongoDB"
];

let fullStack = [...frontend, ...backend];

console.log(fullStack);



console.log("\n19. Array Destructuring");

let studentData = [
    "Arun",
    "ECE",
    8.5,
    "Developer"
];

let [
    studentName,
    department,
    cgpa,
    role
] = studentData;

console.log("Name:", studentName);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);




console.log("\n20. Nested Object Destructuring");

let company = {
    name: "Stackly",

    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};

let {
    employee: {
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary
    }
} = company;

console.log("Employee Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Salary:", employeeSalary);



console.log("\n========================================");
console.log("FINAL CHALLENGE");
console.log("STUDENT MANAGEMENT SYSTEM");
console.log("========================================");


let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },

    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },

    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];



function printAllStudents() {

    console.log("\nAll Students:");

    for (let student of students) {

        let {
            name,
            department,
            mark
        } = student;

        console.log(
            "Name:",
            name,
            "| Department:",
            department,
            "| Mark:",
            mark
        );
    }
}




function printECEStudents() {

    console.log("\nECE Students:");

    for (let student of students) {

        let {
            name,
            department,
            mark
        } = student;

        if (department === "ECE") {

            console.log(
                "Name:",
                name,
                "| Mark:",
                mark
            );
        }
    }
}




function studentsAbove80() {

    console.log("\nStudents who scored above 80:");

    for (let student of students) {

        let {
            name,
            mark
        } = student;

        if (mark > 80) {

            console.log(
                name,
                "-",
                mark
            );
        }
    }
}


function totalMarks() {

    let total = 0;

    for (let student of students) {

        let {
            mark
        } = student;

        total = total + mark;
    }

    return total;
}




function averageMarks() {

    let total = totalMarks();

    return total / students.length;
}



function highestMark() {

    let highest = students[0].mark;

    for (let student of students) {

        let {
            mark
        } = student;

        if (mark > highest) {
            highest = mark;
        }
    }

    return highest;
}




function lowestMark() {

    let lowest = students[0].mark;

    for (let student of students) {

        let {
            mark
        } = student;

        if (mark < lowest) {
            lowest = mark;
        }
    }

    return lowest;
}




printAllStudents();

printECEStudents();

studentsAbove80();

console.log("\nTotal Marks:", totalMarks());

console.log("Average Marks:", averageMarks());

console.log("Highest Mark:", highestMark());

console.log("Lowest Mark:", lowestMark());

b 