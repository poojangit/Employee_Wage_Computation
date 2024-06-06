var empDetails = [
    {
        empId : 1,
        empName : "Pooja",
        attendance : ""
    },
    {
        empId : 2,
        empName : "Bhuvan",
        attendance : ""
    },
    {
        empId : 3,
        empName : "Preethi",
        attendance : ""
    },
    {
        empId : 4,
        empName : "Bhavin",
        attendance : ""
    },
    {
        empId : 5,
        empName : "Dheeraj",
        attendance : ""
    },
    
]

function generateRandomNumber(){
    return Math.floor(Math.random()*2)
}

let attendance;
empDetails.map((employee) => {
    let dailyWage = 0
    let wagePerHour = 20
    let  fullDayHour = 8
    attendance = generateRandomNumber()
    if(attendance === 0){
       employee.attendance = "Absent"
    }
    else {
        employee.attendance = "Present"
        dailyWage = wagePerHour * fullDayHour
    }
    console.log(`Daily Wages of ${employee.empName}: ${dailyWage}`)
})
console.log(empDetails);