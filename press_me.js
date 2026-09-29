function login() {
    let username = document.getElementById("username").value;

    localStorage.setItem("username", username);

    window.location.href = "home.html";
}