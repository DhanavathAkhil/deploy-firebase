<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="authentication.css">
</head>
<body>

    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signupForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <input type="submit" id="signup" name="signup_submit" value="Sign Up"/>

            <button type="button" onclick="signupWithEmail()">Sign Up with Email</button>

            <div class="social-buttons">
                <button type="button" onclick="signupWithGoogle()">Sign Up with Google</button>
            </div>
        </form>
        <p id="errorMessage" class="error-message"></p>
    </div>

    <script src="authentication.js"></script>
    
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
    
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyA52lwicJjawC9LlQRNz61pds_uUHqh9hY",
            authDomain: "authentication-42fbc.firebaseapp.com",
            databaseURL: "https://authentication-42fbc-default-rtdb.firebaseio.com",
            projectId: "authentication-42fbc",
            storageBucket: "authentication-42fbc.appspot.com",
            messagingSenderId: "336964657483",
            appId: "1:336964657483:web:df6618c52c341e121848ce"
          };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        const auth = getAuth();
    
        document.getElementById('signupForm').addEventListener('submit', function (e) {
            e.preventDefault();
            
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
    
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    set(ref(database, 'users/' + user.uid), {
                        email: email,
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        });
    
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                alert('User created!');
            }
        });
    </script>
</body>
</html>
