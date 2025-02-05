function calculateSalary() {
    var sales = document.getElementById("sales").value; 
    var baseSalary = 15000;
    var totalSalary = baseSalary + sales * 0.1; 
    document.getElementById("result").innerText = "Зарплата работника: " + totalSalary + " ₽";
  }