import { renderLogin } from "./login/loginDOM";
import { API } from "./DataManager";
import "../styles/main.scss";
import { addRegisterListener } from "./register/registerListener";

console.log("main.js works! 👍");
// add if statement for login
// If user is logged in already don't run renderLogin()
// else, run it
renderLogin();
addRegisterListener();