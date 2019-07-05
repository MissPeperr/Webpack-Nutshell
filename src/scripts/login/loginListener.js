import {loginComponents} from "./loginHTML";
import { API } from "../DataManager";

const addLoginListener = () => {
    loginComponents.loginBtn.addEventListener("click", () => {
        API.getAll("users")
        .then(users => {
            users.forEach(user => {
                if(loginComponents.usernameInput.value === user.username && loginComponents.emailInput.value === user.email){
                    sessionStorage.setItem("activeUser", user.username);
                    let SSUser = sessionStorage.getItem("activeUser");
                    console.log(`User ${SSUser} logged in.`);
                }
            })
        })
        .then(document.querySelector("body").removeChild(loginComponents.loginDiv))
    })
}

export {addLoginListener};