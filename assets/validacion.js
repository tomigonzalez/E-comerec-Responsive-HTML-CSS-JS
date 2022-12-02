// declarar variables
const form = document.getElementById("form");
const nameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")



const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = nameInput.value.trim();
  // verificamos si el campo esta ok o no

  if(isEmpty(username)){
    showError(nameInput, "El nombre es obligatorio") // va a mostrar mi mensaje de error
  } else if(!isBetween(username.length, min, max)) {
    showError(nameInput, `El nombre debe tener entre ${min} y ${max} caracteres`)
  } else {
    showSuccess(nameInput); // va a mostrar mi mensaje de exito
    valid = true;
  }
  return valid
}

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  if(isEmpty(emailValue)){
    showError(emailInput, 'El email es obligatorio');
  } else if(!isEmailValid(emailValue)){ // checkeamos si el email es valido o no
    showError(emailInput, 'El email no es valido');
  } else {
    showSuccess(emailInput); // va a mostrar mi mensaje de exito
    valid = true;
  }
  return valid
}

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();
  if(isEmpty(password)){
    showError(passInput, 'La contraseña es obligatoria')
  } else if(!isPassValid(password)){
    showError(passInput, 'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un caracter especial')
  } else {
    showSuccess(passInput);
    valid = true;
  }
  return valid;
}



const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //testear
  return re.test(email)
}

const isPassValid = (pass) => {
  const re =  /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  return re.test(pass)
}





// creamos la funcion para validar si un campo esta vacio
const isEmpty = (value) => value === "";

// creamos la funcion para validar si un campo numerico esta entre los valores dados por min y max
const isBetween = (length, min, max) => length < min || length > max ? false : true;

//funcion para mostrar el error 
// recibir el input y el msg de error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success")
  formField.classList.add("error")
  const error = formField.querySelector("small");
  error.textContent = message;
}
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error")
  formField.classList.add("success")
  const error = formField.querySelector("small");
  error.textContent = "";
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  // guardar el estado de los inputs en variables
  let isUsernameValid = checkUsername();
 
  let isPasswordValid = checkPassword();
  let isEmailValid = checkEmail();

  console.log('isUsernameValid ==>',isUsernameValid)
  console.log('isEmailValid ==>',isEmailValid)
  console.log('isPasswordValid ==>',isPasswordValid)
 

  let isFormValid = isUsernameValid && isEmailValid && isPasswordValid ;

  if(isFormValid){
    form.submit();
  }
})

const debounce = (fn, delay = 1000) => {
  let timeoutId;
  return(...args) => {
    //cancelar el timer anterior
    if(timeoutId) clearTimeout(timeoutId);

    // seteamos un nuevo timer
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id){
      case 'username':
        checkUsername();
        break;
      case 'email':
        checkEmail();
        break;
      case 'password':
        checkPassword();
        break;
    }
  })
)
