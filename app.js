function Employee(employeeID, fullName, department, level, imageURL, salary) {
this.employeeID = employeeID;
this.fullName = fullName;
this.department = department;
this.level = level;
this.imageURL = imageURL;
this.salary = salarycalc(level);
}
function salarycalc(level) {
switch (level) {
    case "Junior":
      return Math.floor(Math.random() * 500) + 500;

    case "Mid-Senior":
      return Math.floor(Math.random() * 500) + 1000;
    case "Senior":
      return Math.floor(Math.random() * 500) + 1500;
}
}

let person01 = new Employee(
1000,
"Gazi Sameer",
"Advertisement",
"Senior",
"https://randomuser.me/api/portraits/men/11.jpg"
);
let person02 = new Employee(
1001,
"Lana Ali",
"Finance",
"Senior",
"https://randomuser.me/api/portraits/women/11.jpg"
);
let person03 = new Employee(
1002,
"Tamara Ayoub",
"Marketing",
"Senior",
"https://randomuser.me/api/portraits/women/13.jpg"
);
let person04 = new Employee(
1003,
"Safi Waleed",
"Advertisement",
"Mid-Senior",
"https://randomuser.me/api/portraits/men/12.jpg"
);
let person05 = new Employee(
1004,
"Omar Zaid",
"Development",
"Senior",
"https://randomuser.me/api/portraits/men/15.jpg"
);
let person06 = new Employee(
1005,
"Rana Saleh",
"Development",
"Junior",
"https://randomuser.me/api/portraits/women/20.jpg"
);
let person07 = new Employee(
1006,
"Hadi Ahmed",
"Finance",
"Mid-Senior",
"https://randomuser.me/api/portraits/men/21.jpg"
);
// let okTest = Object.keys(person01);
// console.log(okTest);

function render() {
	let employees = [
	  person01,
		person02,
		person03,
		person04,
		person05,
		person06,
		person07,
	];
	for (let i = 0; i < 7; i++) {
		console.log(
			"Employee Name: " +
				employees[i].fullName +
				", Salary: " +
				employees[i].salary
		);
	}
}

render();