var empDetails = [
    {
        empId: 1,
        empName: "Pooja",
        attendance: "",
        empRecords : []
    },
    {
        empId: 2,
        empName: "Bhuvan",
        attendance: "",
        empRecords : []
    },
    {
        empId: 3,
        empName: "Preethi",
        attendance: "",
        empRecords : []
    },
    {
        empId: 4,
        empName: "Bhavin",
        attendance: "",
        empRecords : []
    },
    {
        empId: 5,
        empName: "Dheeraj",
        attendance: "",
        empRecords : []
    },

]

function generateRandomNumber() {
    return Math.floor(Math.random() * 2)
}

let attendance;
empDetails.map((employee) => {
    let dailyWage = 0
    let wagePerHour = 20
    let fullDayHour = 8
    let partTimeWage = 0
    let halfDayHour = 4
    let totalWage = 0
    let count = 0
    let monthyWage = 0

    while(count != 20 ) {
        let partTimeWork = generateRandomNumber()
        attendance = generateRandomNumber()

        if (attendance === 0) {
            employee.attendance = "Absent"
            dailyWage = 0
        }
        else {
            count++
            employee.attendance = "Present"
        if (partTimeWork === 1) {
            partTimeWage = wagePerHour * fullDayHour
        }
        else {
            partTimeWage = wagePerHour * halfDayHour
        }
        dailyWage = wagePerHour * fullDayHour
        totalWage = dailyWage + partTimeWage
        // console.log(`Daily Wages of ${employee.empName}: ${dailyWage}`)
        employee.empRecords[employee.empRecords.length] = {
            "dailyWage" : dailyWage ,
            "partTimewage" : partTimeWage,
            "totalWage" : totalWage
        }
    }
}
employee.empRecords.map((details) => {
    monthyWage  += details.totalWage
})
    employee.monthyWage = monthyWage
    monthyWage = 0
    console.log(employee)
    console.log(`Employee ${employee.empName} worked for ${count} days`)
})