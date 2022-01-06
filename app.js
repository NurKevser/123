const options = document.querySelectorAll("option");

let btn = document.querySelector("button");

btn.addEventListener("click", computeSalary);

function computeSalary(e) {
    let minHour = document.getElementById("min-hour").value;
    let maxHour = document.getElementById("max-hour").value;
    let minDay = document.getElementById("min-day").value;
    let maxDay = document.getElementById("max-day").value;

    console.log(minHour, maxHour, minDay, maxDay);

    let minSalaryMonthly = document.getElementById("min-salary-monthly").value;
    let maxSalaryMonthly = document.getElementById("max-salary-monthly").value;

    document.getElementById("min-salary-daily").value = minSalaryMonthly / minDay
    document.getElementById("max-salary-daily").value = maxSalaryMonthly / maxDay
    document.getElementById("min-salary-hourly").value = minSalaryMonthly / minHour
    document.getElementById("max-salary-hourly").value = maxSalaryMonthly / maxHour

    e.preventDefault();
}



