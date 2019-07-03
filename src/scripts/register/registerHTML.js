const addRegisterToDOM = () => {
    const loginDiv = document.createElement("div");
    loginDiv.setAttribute("id", "login-div");
    loginDiv.setAttribute("class", "card");

    const welcomeText = document.createElement("h1");
    welcomeText.textContent = "Welcome to Nutshell! 🥜"

    const usernameInput = document.createElement("input");
    usernameInput.setAttribute("id", "username-input");
    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username:";

    const emailInput = document.createElement("input");
    emailInput.setAttribute("id", "email-input");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";

    const loginBtn = document.createElement("button");
    loginBtn.setAttribute("id", "login-btn");
    loginBtn.textContent = "Login";

    const regBtn = document.createElement("button");
    regBtn.setAttribute("id", "register-btn");
    regBtn.textContent = "Register";

    // append all elements to login div
    loginDiv.appendChild(welcomeText);
    loginDiv.appendChild(usernameLabel);
    loginDiv.appendChild(usernameInput);
    loginDiv.appendChild(emailLabel);
    loginDiv.appendChild(emailInput);
    loginDiv.appendChild(loginBtn);
    loginDiv.appendChild(regBtn);

    // append login div to body
    document.querySelector("body").appendChild(loginDiv);
}

export {addLoginToDOM};