console.log('Salary Calculator');

const employeeList = [];

$(document).ready(onReady);

function onReady() {
  $('.js-submit-btn').on('click', grabForm);
}

function grabForm() {
  const firstName = $('.js-first-name').val();
  const lastName = $('.js-last-name').val();
  const idNum = $('.js-id-number').val();
  const title = $('.js-title').val();
  const salary = $('.js-salary').val();

  storeForm(firstName, lastName, idNum, title, salary);
  render();
  addMonthlySalary();
  //clearInput();
}

function storeForm(firstName, lastName, id, title, salary) {
  const employee = {
    firstName,
    lastName,
    id,
    title,
    salary,
  };

  employeeList.push(employee);
}

function render() {
  const list = $('.js-employee-list');

  list.empty();
  for (let i = 0; i < employeeList.length; i++) {
    const info = employeeList[i];
    list.append(
      `<tr>
      <td>${info.firstName}</td>
      <td>${info.lastName}</td>
      <td>${info.id}</td>
      <td>${info.title}</td>
      <td>$${Number((info.salary * 100) / 100)}</td>
      <td><button class="">Delete</button></td>
      </tr>`
    );
  }
}

function clearInput() {
  $('.js-first-name').val('');
  $('.js-last-name').val('');
  $('.js-id-number').val('');
  $('.js-title').val('');
  $('.js-salary').val('');
}

function addMonthlySalary() {
  let monthlySalary = 0;
  const maxMonthSal = 20000;

  for (let i = 0; i < employeeList.length; i++) {
    const salary = employeeList[i].salary;
    monthlySalary = monthlySalary + Number(salary);
  }

  if (monthlySalary / 12 > maxMonthSal) {
    $('.employee-table-foot').addClass('makeRed');
  }

  $('.js-monthly-salary').text(Math.round((monthlySalary / 12) * 100) / 100);
}
