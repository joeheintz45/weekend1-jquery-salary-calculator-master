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
  addTotalSalary();
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
      <td>${info.salary}</td>
      <td></td>
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

function addTotalSalary() {
  let totalSalary = 0;

  for (let i = 0; i < employeeList.length; i++) {
    const salary = employeeList[i].salary;
    totalSalary += parseInt(salary);
  }
  $('.js-total-salary').text(totalSalary);
}
