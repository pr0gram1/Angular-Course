export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      // basically if the promise is rejected by click on the server tab it reaches to setTimeout
      (resolve, reject ) => {
        setTimeout(() =>{
          resolve(this.loggedIn);
          // timeout : in the momment of server tab onclick it takes 800 ms to take you back to home page from server tab
        }, 800)
        return promise;

      }
    )
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
