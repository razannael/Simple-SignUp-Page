const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit',e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) =>{
 const inputControl = element.parentElement;
 const errorDisplay = inputControl.querySelector('.error');

 errorDisplay.innerText = message;
 inputControl.classList.add('error');
 inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
   
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
   }


   const isValidEmail = email =>{
    const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(String(email).toLocaleLowerCase());
   }

const validateInputs = () =>{
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if(nameValue === ''){
     setError(name,'name is required');
  }else{
    setSuccess(name);
  }

  if(emailValue === ''){
    setError(email,'email is required');
 }else if(!isValidEmail(emailValue)){
  setError(email , 'enter a valid email');
 }else{
   setSuccess(email);
 }

 if(passwordValue === ''){
    setError(password,'password is required');
 }else{
   setSuccess(password);
 }

 if(confirmPasswordValue === ''){
    setError(confirmPassword,'please confirm password');
 }else if(confirmPasswordValue != passwordValue){
   setError(confirmPassword, ' passwords does not match')
 }else{
   setSuccess(confirmPassword);
 }


};