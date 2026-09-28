let username = localStorage.getItem("username");

if (document.getElementById("welcome")) {
    document.getElementById("welcome").innerText =
        "Hello " + username;
}