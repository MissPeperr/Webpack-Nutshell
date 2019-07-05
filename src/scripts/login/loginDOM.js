import {createLoginHTML, loginComponents} from "./loginHTML";
import {addLoginListener} from "./loginListener";

const renderLogin = () => {
    createLoginHTML();
    document.querySelector("body").appendChild(loginComponents.loginDiv);
    addLoginListener();
}

export {renderLogin};