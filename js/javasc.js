let step = document.getElementsByClassName('step');
let resetPassword = document.getElementById('reset-password');
let submitBtn = document.getElementById('submit-btn');


let count =step.length;
let current_step = 0;
let stepCount = count-1;

step[current_step].classList.add('d-block');

resetPassword.addEventListener('click',() =>{
current_step++;
let previous_step = current_step - 1;
if ( (current_step > 0)  && (current_step <= stepCount)) {
  step[current_step].classList.add('d-block');
  step[current_step].classList.remove('d-none');
  step[previous_step].classList.add('d-none');
  step[previous_step].classList.remove('d-block');
}
});

submitBtn.addEventListener('click',() =>{
current_step++;
let previous_step = current_step - 1;
if ( (current_step > 1)  && (current_step <= stepCount)) {
  step[current_step].classList.add('d-block');
  step[current_step].classList.remove('d-none');
  step[previous_step].classList.add('d-none');
  step[previous_step].classList.remove('d-block');
}
});
