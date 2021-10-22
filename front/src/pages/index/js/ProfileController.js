import { StateController } from "../../../js/export";

class ProfileControllerClass {

  constructor() {
    this.getProfile();
  }

  stateChanged({ profile }) {
    this.displayProfileInfo(profile.username);
  } 

  getProfile() {
    fetch("/profile", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
    })
    .then(res => res.json())
    .then((res) => {
      StateController.set({ profile: res });
    });
  }

  displayProfileInfo(name) {
    document.getElementById(
      'WelcomeHeader'
    ).textContent = `Welcome! \n${name}`
  }
}

export default new ProfileControllerClass()
