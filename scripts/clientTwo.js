console.log('Salary Calculator');

const employeeList = [];

$(document).ready(onReady);

// event listeners for buttons
function onReady() {
  $('.js-submit-btn').on('click', grabForm);
  $('.js-employee-list').on('click', '.js-delete-btn', deleteEmployee);
} // end onReady

// grabs the info from the input fields
function grabForm() {
  const firstName = $('.js-first-name').val();
  const lastName = $('.js-last-name').val();
  const idNum = $('.js-id-number').val();
  const title = $('.js-title').val();
  const salary = $('.js-salary').val();

  storeForm(firstName, lastName, idNum, title, salary);
  render();
  clearInput();
} // end grabForm function

// stores input values to an object and pushes it to employeeList array
function storeForm(firstName, lastName, id, title, salary) {
  const employee = {
    firstName,
    lastName,
    id,
    title,
    salary,
  };

  checkInputs(firstName, lastName, id, title, salary, employee);
} // end storeForm function

// displays the employee info onto page
function render() {
  const list = $('.js-employee-list');
  let annualSalary = 0;

  list.empty();
  for (let i = 0; i < employeeList.length; i++) {
    const info = employeeList[i];
    const salary = Number(employeeList[i].salary);

    annualSalary += salary;

    list.append(
      `<tr class="employee-list">
              <td>${info.firstName}</td>
              <td>${info.lastName}</td>
              <td>${info.id}</td>
              <td>${info.title}</td>
              <td>$${Number(info.salary)
                .toFixed(2)
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</td>
              <td><button class="js-delete-btn" data-index="${i}">Delete</button></td>
              </tr>`
    );
  }
  calcMonthly(annualSalary);
} // end render function

// calculates the monthly costs for employees
function calcMonthly(annualSalary) {
  const maxMonthly = 20000;
  const monthsInYear = 12;

  monthlySalary = annualSalary / monthsInYear;

  $('.js-monthly-salary').text(
    monthlySalary.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );

  makeTotalRed(maxMonthly, monthlySalary);
} // end calcMonthly function

// makes footer of table red once monthly total passes 20,000
function makeTotalRed(maxMonthly, monthlySalary) {
  if (monthlySalary > maxMonthly) {
    $('.employee-table-foot').addClass('makeRed');
  } else {
    $('.employee-table-foot').removeClass('makeRed');
  }
} // end makeTotalRed function

// deletes employees info from the DOM and adjusts total monthly value
function deleteEmployee() {
  const index = $(this).data('index');

  employeeList.splice(index, 1);
  render();
} // end deleteEmployee function

// verifies that all input fields have values
function checkInputs(firstName, lastName, idNum, title, salary, employee) {
  if (
    Object.keys(firstName).length === 0 ||
    Object.keys(lastName).length === 0 ||
    Object.keys(idNum).length === 0 ||
    Object.keys(title).length === 0 ||
    Object.keys(salary).length === 0
  ) {
    alert('Please Fill All Fields');
  } else {
    employeeList.push(employee);
  }
} // end checkInputs

// clears the values from the input boxes
function clearInput() {
  $('.js-first-name').val('');
  $('.js-last-name').val('');
  $('.js-id-number').val('');
  $('.js-title').val('');
  $('.js-salary').val('');
} // end clearInput function
