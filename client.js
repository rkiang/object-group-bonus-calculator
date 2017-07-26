var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// console.log(employees);

for (var i = 0; i < employees.length; i++) {

    employees[i].annualSalary = parseInt(employees[i].annualSalary)

    // console.log(employees);
    

    if (employees[i].reviewRating <= 2) {
        employees[i].bonusPercent = 0;
    } else if (employees[i].reviewRating == 3) {
        employees[i].bonusPercent = 0.04;
    } else if (employees[i].reviewRating == 4) {
        employees[i].bonusPercent = 0.06;
    } else if (employees[i].reviewRating == 5) {
        employees[i].bonusPercent = 0.1;
    }

    if (employees[i].employeeNumber.length === 4) {
        employees[i].bonusPercent = employees[i].bonusPercent +0.05
    }

    

    bottomLine = employees[i].annualSalary + (employees[i].annualSalary * employees[i].bonusPercent)

    if (bottomLine > 65000) {
        employees[i].bonusPercent = employees[i].bonusPercent - 0.01
    }

    if (employees[i].bonusPercent >= 0.13) {
        employees[i].bonusPercent = 0.13
    } else if (employees[i].bonusPercent <= 0) {
        employees[i].bonusPercent = 0
    }

  
        
   
    
}

 for (var i = 0; i < employees.length; i++) {
       employees[i].totalBonus = employees[i].annualSalary * employees[i].bonusPercent;
       employees[i].totalBonus = employees[i].totalBonus.toFixed(2);
       employees[i].totalCompensation = parseInt(employees[i].annualSalary) + parseInt(employees[i].totalBonus);
       employees[i].totalCompensation = employees[i].totalCompensation.toFixed(2);

       employees[i].totalBonus = parseInt(employees[i].totalBonus)
       employees[i].totalCompensation = parseInt(employees[i].totalCompensation)

   }

console.log(employees);

