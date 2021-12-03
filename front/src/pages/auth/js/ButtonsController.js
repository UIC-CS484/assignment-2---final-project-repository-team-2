import { AuthController } from "../../../js/export"

const { login, logout, register } = AuthController;

const BTNS = {
  registerBtn: document.getElementById('registerBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  loginBtn: document.getElementById('loginBtn')
}

function showBtn(btnSelector) {
  btnSelector.removeAttribute('disabled')
}

function hideBtn(btnSelector) {
  btnSelector.setAttribute('disabled', true)
}

class ButtonsControllerClass {
  
  constructor() {
    showBtn(BTNS.loginBtn)
    // Button listeners
    BTNS.loginBtn.addEventListener('click', login)
    BTNS.registerBtn.addEventListener('click', register)
  }

  stateChanged = (newState) => {
    const { 
      loginBtn, 
      logoutBtn 
    } = BTNS;

    if (!newState.authenticated) {
      showBtn(loginBtn);
      hideBtn(logoutBtn);
    } 
    else {
      hideBtn(loginBtn);
      showBtn(logoutBtn);
    }
  }
}

export default new ButtonsControllerClass()
