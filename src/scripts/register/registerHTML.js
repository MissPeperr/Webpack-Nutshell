const regComponents = {
    regDiv: document.createElement("div"),
    welcomeText: document.createElement("h1"),
    registerText: document.createElement("h3"),
    usernameLabel: document.createElement("label"),
    usernameInput: document.createElement("input"),
    emailLabel: document.createElement("label"),
    emailInput: document.createElement("input"),
    regBtn: document.createElement("button")
}

const createRegHTML = () => {
    regComponents.regDiv.setAttribute("id", "reg-div");
    regComponents.regDiv.setAttribute("class", "card");

    regComponents.welcomeText.textContent = "Welcome to Nutshell! 🥜";
    regComponents.registerText.textContent = "Please register below:";

    regComponents.usernameInput.setAttribute("id", "username-input");
    regComponents.usernameLabel.textContent = "Username:";

    regComponents.emailInput.setAttribute("id", "email-input");
    regComponents.emailLabel.textContent = "Email:";

    regComponents.regBtn.setAttribute("id", "register-btn");
    regComponents.regBtn.setAttribute("class", "btn btn-light");
    regComponents.regBtn.textContent = "Register";

    // append all elements to login div
    regComponents.regDiv.appendChild(regComponents.welcomeText);
    regComponents.regDiv.appendChild(regComponents.registerText);
    regComponents.regDiv.appendChild(regComponents.usernameLabel);
    regComponents.regDiv.appendChild(regComponents.usernameInput);
    regComponents.regDiv.appendChild(regComponents.emailLabel);
    regComponents.regDiv.appendChild(regComponents.emailInput);
    regComponents.regDiv.appendChild(regComponents.regBtn);
}

export {createRegHTML, regComponents};