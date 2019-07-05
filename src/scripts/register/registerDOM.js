import {createRegHTML, regComponents} from "./registerHTML";

const addRegisterToDOM = () => {
    createRegHTML();
    document.querySelector("body").appendChild(regComponents.regDiv);
}

export {addRegisterToDOM};