export const errorMessage = () => {

  const errorMsg = document.querySelector('.errorMessage');

  const successMsg= document.querySelector('.successMessage');

  successMsg.textContent = '';

  errorMsg.textContent = 'credenciales invalidas';

}

export const successMessage = () => {

  const successMsg= document.querySelector('.successMessage');

  const errorMsg = document.querySelector('.errorMessage');

  errorMsg.textContent = '';

  successMsg.textContent = 'inicio de sesion exitoso';

}