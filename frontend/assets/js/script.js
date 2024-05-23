    document.addEventListener('DOMContentLoaded', function() {
        const loginButton = document.getElementById('loginButton');
        loginButton.addEventListener('click', function() {
            const email = document.getElementById("form1Example13").value;
            const password = document.getElementById("form1Example23").value;

            if (email === "admin@gmail.com" && password === "admin123") {
                window.location.href = "about.html";
            } else {
                alert("Error logging in");
            }
        })
    });
