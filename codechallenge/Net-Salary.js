// The function is to culculate 
// The rate in KRA is = 3% , NHIF is =5% and NSSF = 6%
// The constant adds, maltiply and subtracts to get the salary

function calculatingTheNetSalary(basicsalary,benefits){
    const KRA_RATE= 0.3;
    const NHIF_RATE = 0.5;
    const NSSF_RATE = 0.06;
    
    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * KRA_RATE;
    const nssfDeductions = Math.min(grossSalary * NSSF_RATE, 1180);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return{
        "Gross Salary": grossSalary,
        "Payee (Tax)": payee,
        "NHIF Deductions": nhifDeductions,
        "NSSF Deductions": nssfDeductions,
        "Net Salary": netSalary


    }
}
console.log(rossSalary)
console.log(ayee)
console.log(nhifDeductions)
console.log(ssfDeduction)
console.log(netSalary
    )

