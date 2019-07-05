import { addRegisterToDOM } from "./registerDOM";
import { loginComponents } from "../login/loginHTML";
import { regComponents } from "./registerHTML";
import { API } from "../DataManager";

const bodyTag = document.querySelector("body");

const addRegisterListener = () => {
    if (loginComponents.regBtn) {
        loginComponents.regBtn.addEventListener("click", () => {
            bodyTag.removeChild(loginComponents.loginDiv);
            addRegisterToDOM();
        });
    }
    if (regComponents.regBtn) {
        regComponents.regBtn.addEventListener("click", () => {
            const newUser = {
                username: regComponents.usernameInput.value,
                email: regComponents.emailInput.value
            }
            API.createNew("users", newUser)
                .then(user => {
                    console.log("new user:", user);
                    if (regComponents.usernameInput.value === user.username && regComponents.emailInput.value === user.email) {
                        sessionStorage.setItem("activeUser", user.username);
                        let SSUser = sessionStorage.getItem("activeUser");
                        console.log(`User ${SSUser} logged in.`);
                    }
                })
                .then(bodyTag.removeChild(regComponents.regDiv));
        })
    }
}

export { addRegisterListener };