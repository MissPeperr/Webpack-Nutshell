const loginComponents = {
    loginDiv: document.createElement("div"),
    welcomeText: document.createElement("h1"),
    usernameLabel: document.createElement("label"),
    usernameInput: document.createElement("input"),
    emailLabel: document.createElement("label"),
    emailInput: document.createElement("input"),
    loginBtn: document.createElement("button"),
    regBtn: document.createElement("button")
}

const createLoginHTML = () => {
    loginHTML.loginDiv.setAttribute("id", "login-div");
    loginHTML.loginDiv.setAttribute("class", "card");

    loginHTML.welcomeText.textContent = "Welcome to Nutshell! 🥜"

    loginHTML.usernameLabel.textContent = "Username:";
    loginHTML.usernameInput.setAttribute("id", "username-input");

    loginHTML.emailInput.setAttribute("id", "email-input");
    loginHTML.emailLabel.textContent = "Email:";

    loginHTML.loginBtn.setAttribute("id", "login-btn");
    loginHTML.loginBtn.textContent = "Login";

    loginHTML.regBtn.setAttribute("id", "register-btn");
    loginHTML.regBtn.textContent = "Register";

    // append all elements to login div
    loginHTML.loginDiv.appendChild(welcomeText);
    loginHTML.loginDiv.appendChild(usernameLabel);
    loginHTML.loginDiv.appendChild(usernameInput);
    loginHTML.loginDiv.appendChild(emailLabel);
    loginHTML.loginDiv.appendChild(emailInput);
    loginHTML.loginDiv.appendChild(loginBtn);
    loginHTML.loginDiv.appendChild(regBtn);
}

const addLoginToDOM = () => {
    createLoginHTML();
    // append login div to body
    document.querySelector("body").appendChild(loginDiv);
}

export {addLoginToDOM, loginComponents};