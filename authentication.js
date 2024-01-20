function signupWithEmail() {
    // Simple validation (you may want to enhance this)
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        // Successful sign-up
        document.getElementById('errorMessage').innerText = '';
        alert('Sign up successful with email!');
    } else {
        // Display error message
        document.getElementById('errorMessage').innerText = 'Please provide email and password';
    }
}

function signupWithGoogle() {
    // Redirect to Google sign-up page (replace with actual OAuth implementation)
    window.location.href = 'https://accounts.google.com/signup';
}
