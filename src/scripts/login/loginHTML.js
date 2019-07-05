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
    loginComponents.loginDiv.setAttribute("id", "login-div");
    loginComponents.loginDiv.setAttribute("class", "card");

    loginComponents.welcomeText.textContent = "Welcome to Nutshell! 🥜"

    loginComponents.usernameLabel.textContent = "Username:";
    loginComponents.usernameInput.setAttribute("id", "username-input");

    loginComponents.emailInput.setAttribute("id", "email-input");
    loginComponents.emailLabel.textContent = "Email:";

    loginComponents.loginBtn.setAttribute("id", "login-btn");
    loginComponents.loginBtn.setAttribute("class", "btn btn-dark");
    loginComponents.loginBtn.textContent = "Login";

    loginComponents.regBtn.setAttribute("id", "register-btn");
    loginComponents.regBtn.setAttribute("class", "btn btn-dark");
    loginComponents.regBtn.textContent = "Register";

    // append all elements to login div
    loginComponents.loginDiv.appendChild(loginComponents.welcomeText);
    loginComponents.loginDiv.appendChild(loginComponents.usernameLabel);
    loginComponents.loginDiv.appendChild(loginComponents.usernameInput);
    loginComponents.loginDiv.appendChild(loginComponents.emailLabel);
    loginComponents.loginDiv.appendChild(loginComponents.emailInput);
    loginComponents.loginDiv.appendChild(loginComponents.loginBtn);
    loginComponents.loginDiv.appendChild(loginComponents.regBtn);
}

export {createLoginHTML, loginComponents};