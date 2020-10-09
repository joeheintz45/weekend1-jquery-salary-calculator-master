console.log('Salary Calculator');

const employeeList = [];

$(document).ready(onReady);

function onReady() {
  console.log('in onReady');

  $('.js-submit-btn').on('click', grabForm);
}

function grabForm() {
  const firstName = $('.js-first-name').val();
  const lastName = $('.js-last-name').val();
  const idNum = $('.js-id-number').val();
  const title = $('.js-title').val();
  const salary = $('.js-salary').val();

  //console.log(firstName, lastName, idNum, title, salary);
  storeForm(firstName, lastName, idNum, title, salary);
  render();
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
      `<li>${info.firstName}</li>
      <li>${info.lastName}</li>
      <li>${info.id}</li>
      <li>${info.title}</li>
      <li>${info.salary}</li>`
    );
  }
}
