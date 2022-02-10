document.getElementById('login-btn').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //checked valid user email and password
    if (userEmail == 'talat49@gmail.com' && userPassword == 'Rafsanre') {
        window.location.href = 'banking.html'
    }
    else {
        console.log('invalid password')
    }
})