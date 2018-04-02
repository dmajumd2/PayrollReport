
function myFunction(){
    
    let totalRegularHourSal = 0, totalOvertimeHourSal = 0, totalOverTimeHours=0, totalRegularHours=0;
    let regSalary1, overSalary1, regSalary2, overSalary2, regSalary3, overSalary3 ;
 

    // iterate over table rows with class employees
    let table = document.getElementById("employees");
    let employee_data = [];

    console.log(table.rows.length);
    for(i=1; i< table.rows.length; i++) {
        let data = {};
            data.empId = document.getElementById(`emp${i}Id`).value;
            data.emphoursWorked = document.getElementById(`emp${i}hr`).value;
            data.empsalaryPerHour = document.getElementById(`emp${i}sal`).value;
            employee_data.push(data);
    }

    let department = document.getElementById('deptName').value;
    document.write('<h1>Payment process Report</h1>');
    document.write(`<h2>Department: ${department} </h2>`);

    employee_data.forEach(function(emp) {

        if(emp.emphoursWorked && emp.empsalaryPerHour){
        emp.regSal = calculSal(emp.emphoursWorked, emp.empsalaryPerHour).calRegHrSal
        emp.overSalary = calculSal(emp.emphoursWorked, emp.empsalaryPerHour).overTimeSal;

        document.write(`Employee: ${emp.empId} | Regular Salary:  ${emp.regSal}  | Overtime Salary: ${emp.overSalary}` + '<br/>');

        totalRegularHours = totalRegularHours + calculSal(emp.emphoursWorked, emp.empsalaryPerHour).regularhrs;
        totalRegularHourSal = totalRegularHourSal + calculSal(emp.emphoursWorked, emp.empsalaryPerHour).calRegHrSal;
        
        totalOverTimeHours = totalOverTimeHours + calculSal(emp.emphoursWorked, emp.empsalaryPerHour).overTimeHrs;
        totalOvertimeHourSal = totalOvertimeHourSal + calculSal(emp.emphoursWorked, emp.empsalaryPerHour).overTimeSal;
        }
    });
     
    
    document.write('<hr/>')
    
    document.write(`<h3>Department Regular Hours: ${totalRegularHours} </h3>`);
    document.write(`<h3>Department Overtime Hours: ${totalOverTimeHours} </h3>`);
    document.write(`<h3>Department Regular Salaries: ${totalRegularHourSal} </h3>`);
    document.write(`<h3>Department Overtime Salaries: ${totalOvertimeHourSal} </h3>`);
    document.write(`<h3>Department Total Salaries:  ${totalRegularHourSal + totalOvertimeHourSal} </h3>`);
    document.write('****************************End of the report****************************');
}

function calculSal(emphoursWorked, empsalaryPerHour){
    let calRegHrSal, overTimeSal, regularHours, overTimeHours;
    if(emphoursWorked <= 40){
         calRegHrSal = emphoursWorked  * empsalaryPerHour; 
         overTimeSal = 0;
         overTimeHours = 0;
         regularHours = parseInt(emphoursWorked);   
    }
    else if(emphoursWorked > 40) {
        calRegHrSal = 40  * empsalaryPerHour;
        overTimeHours = emphoursWorked - 40;
        overTimeSal = overTimeHours * empsalaryPerHour * 1.5;   
        regularHours =  parseInt(emphoursWorked) - overTimeHours;
    }
 
    return {
    'calRegHrSal': calRegHrSal,
    'overTimeSal': overTimeSal,
    'regularhrs' : regularHours,
    'overTimeHrs': overTimeHours,
    'calRegHrSal': calRegHrSal,
    };

}

function reset() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i += 1)
    {
        inputs[i].value = '';
    }
}
