document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission
        const email = document.getElementById("form1Example13").value;
        const password = document.getElementById("form1Example23").value;

        if ((email === "admin@gmail.com" && password === "admin123") || (email === "korede@gmail.com" && password === "admin")) {
            window.location.href = "../admin/index.html";
        } else {
            alert("Error logging in");
        }
    })
});
