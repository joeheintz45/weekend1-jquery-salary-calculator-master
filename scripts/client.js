console.log('Salary Calculator');

const employeeList = [];

$(document).ready(onReady);

function onReady() {
  $('.js-submit-btn').on('click', grabForm);
  $('.js-employee-list').on('click', '.js-delete-btn', deleteEmployee);
}

// collecting input data and executing functions for what to do with the data
function grabForm() {
  const firstName = $('.js-first-name').val();
  const lastName = $('.js-last-name').val();
  const idNum = $('.js-id-number').val();
  const title = $('.js-title').val();
  const salary = $('.js-salary').val();

  storeForm(firstName, lastName, idNum, title, salary);
  render();
  addMonthlySalary();
  clearInput();
} // end grabForm function

// stores employee info to object
function storeForm(firstName, lastName, id, title, salary) {
  const employee = {
    firstName,
    lastName,
    id,
    title,
    salary,
    isDeleted: false,
  };

  checkInputs(firstName, lastName, id, title, salary, employee);
  //employeeList.push(employee);
} // end storeForm function

// renders the employee info to the DOM
function render() {
  const list = $('.js-employee-list');

  list.empty();
  for (let i = 0; i < employeeList.length; i++) {
    const info = employeeList[i];

    if (employeeList[i].isDeleted === true) {
    } else {
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
  }
} // end render function

// clears the values from the input boxes
function clearInput() {
  $('.js-first-name').val('');
  $('.js-last-name').val('');
  $('.js-id-number').val('');
  $('.js-title').val('');
  $('.js-salary').val('');
} // end clearInput function

// adds employees salaries and calculates their total monthly salary
function addMonthlySalary() {
  let monthlySalary = 0;
  const maxMonthSal = 20000;

  for (let i = 0; i < employeeList.length; i++) {
    const salary = employeeList[i].salary / 12;
    monthlySalary += Number(salary);
  }

  monthlySalary = deleteSal();

  $('.js-monthly-salary').text(
    monthlySalary.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );
} // end addMonthlySalary function

// deletes employee info from DOM on click
function deleteEmployee() {
  const index = $(this).data('index');
  employeeList[index].isDeleted = true;

  $(this).parent().parent().empty();
  deleteSal();
} // end delete employee function

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

// subtracts deleted salary from output
function deleteSal() {
  let monthlySalary = 0;
  const maxMonthSal = 20000;

  for (let i = 0; i < employeeList.length; i++) {
    salary = employeeList[i];
    monthlySalary += salary.salary / 12;

    if (salary.isDeleted) {
      monthlySalary -= salary.salary / 12;
    }
  }

  makeTotalRed(maxMonthSal, monthlySalary);

  $('.js-monthly-salary').text(
    monthlySalary.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  );

  return monthlySalary;
} // end deleteSal function

// makes footer red if the max monthly value is surpassed
function makeTotalRed(maxMonthSal, monthlySalary) {
  if (monthlySalary > maxMonthSal) {
    $('.employee-table-foot').addClass('makeRed');
  } else if (monthlySalary <= maxMonthSal) {
    $('.employee-table-foot').removeClass('makeRed');
  }
} // end makeTotalRed function
