function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var resultContainer = document.getElementById('result');

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        resultContainer.innerHTML = 'Invalid email address';
        return;
    }

    // Display the validated data
    resultContainer.innerHTML = 'Name: ' + name + '<br>Email: ' + email;
}
