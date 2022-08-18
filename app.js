function Employee (employeeID, fullName, department, level, imageURL) {
	this.employeeID = employeeID;
	this.fullName = fullName;
	this.department = department;
	this.level = level;
	this.imageURL = imageURL;
	this.salary = salaryResult(level);
	}
	function salaryResult(level) {
	switch (level) {
		case "Junior":
		  return Math.floor(Math.random() * 500) + 500;
	
		case "Mid-Senior":
		  return Math.floor(Math.random() * 500) + 1000;
		case "Senior":
		  return Math.floor(Math.random() * 500) + 1500;
	}
	}
	
	
	let form = document.getElementById("form");
	let allEmployees = [];
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		let employeeId = document.getElementById("idNo").value;
		let fullName = document.getElementById("fullName").value;
		let department = document.getElementById("Department").value;
		let level = document.getElementById("level").value;
		let imageURL = document.getElementById("img1").value;
		let newEmployee = new Employee(
			employeeId,
			fullName,
			department,
			level,
			imageURL,
		);
		addCard(newEmployee);
		allEmployees.push(newEmployee);
		localStorage.setItem("employees", JSON.stringify(allEmployees));
	});
	// ===========================================================================
	let cardContainer = document.getElementById("card-container");
	
	function addCard(newEmployee) {
		let card = document.createElement("div");
		cardContainer.append(card);
	
		let img = document.createElement("img");
		img.setAttribute("src", newEmployee.imageURL);
		card.append(img);
	
		let cardText = document.createElement("div");
		card.append(cardText);
	
		let p0 = document.createElement("p");
		p0.textContent = "name:" +newEmployee.fullName;
		cardText.append(p0);
	
		let p1 = document.createElement("p");
		p1.textContent = "Id: " + newEmployee.employeeID;
		cardText.append(p1);
	
		let p2 = document.createElement("p");
		p2.textContent = "Department: " + newEmployee.department;
		cardText.append(p2);
	
		let p3 = document.createElement("p");
		p3.textContent = "Level: " + newEmployee.level;
		cardText.append(p3);
	
		let p4 = document.createElement("p");
		p4.textContent = "Salary: " + newEmployee.salary + " JOD";
		cardText.append(p4);
	}
	
	
	
	let person01 = new Employee(
		1000,
		"Ghazi Samer",
		"Administration",
		"Senior",
		"https://randomuser.me/api/portraits/men/50.jpg"
	);
	let person02 = new Employee(
		1001,
		"Lana Ali",
		"Finance",
		"Senior",
		"https://randomuser.me/api/portraits/women/40.jpg"
	);
	let person03 = new Employee(
		1002,
		"Tamara Ayoub",
		"Marketing",
		"Senior",
		"https://randomuser.me/api/portraits/women/60.jpg"
	);
	let person04 = new Employee(
		1003,
		"Safi Walid",
		"Administration",
		"Mid-Senior",
		"https://randomuser.me/api/portraits/men/70.jpg"
	);
	let person05 = new Employee(
		1004,
		"Omar Zaid",
		"Development",
		"Senior",
		"https://randomuser.me/api/portraits/men/95.jpg"
	);
	let person06 = new Employee(
		1005,
		"Rana Saleh",
		"Development",
		"Junior",
		"https://randomuser.me/api/portraits/women/90.jpg"
	);
	let person07 = new Employee(
		1006,
		"Hadi Ahmad",
		"Finance",
		"Mid-Senior",
		"https://randomuser.me/api/portraits/men/99.jpg"
	);
	
	let Employees = [
		person01,
		person02,
		person03,
		person04,
		person05,
		person06,
		person07,
	];
	
	for (let i = 0; i < Employees.length; i++) {
		addCard(Employees[i]);
		allEmployees.push(Employees[i]);
		localStorage.setItem("employees", JSON.stringify(allEmployees));
	}
