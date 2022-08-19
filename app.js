function Employee(employeeID, fullName, department, level, imageURL,salary) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salaryCalc(level);
  }
  function salaryCalc(level) {
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
  
  );
  let person02 = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  );
  let person03 = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  
  );
  let person04 = new Employee(
  1003,
  "Safi Waleed",
  "Advertisement",
  "Mid-Senior",
  
  );
  let person05 = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  
  );
  let person06 = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  
  );
  let person07 = new Employee(
  1006,
  "Hadi Ahmed",
  "Finance",
  "Mid-Senior",
  ""
  );
  
  
  
  let employees = [
    person01,
    person02,
    person03,
    person04,
    person05,
    person06,
    person07,
    
  ];
  
  function render() {

    for (let i = 0; i <= 6; i++) {
      console.log(
        "Employee Name: " +
          employees[i].fullName +
          ", Salary: " +
          employees[i].salary
      );
    }
  }
  
 render();
