console.log('hey');

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

  console.log(firstName, lastName, idNum, title, salary);
}
