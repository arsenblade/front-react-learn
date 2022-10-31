export const getSalary = (salary: number[]) => {
  const salaryResult = (Math.floor(salary[0] / 5) * 5) * 1000
  if(salaryResult === 180000) {
    return `${salaryResult}+`
  }
  else return `${salaryResult}`
}