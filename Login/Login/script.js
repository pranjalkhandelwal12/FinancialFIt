const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('redirect-button').disabled = true;

// Check if the two columns are filled
function checkColumnsFilled() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');

    if (column1.value && column2.value) {
    // Enable the redirect button
    document.getElementById('redirect-button').disabled = false;
    } else {
    // Disable the redirect button
    document.getElementById('redirect-button').disabled = true;
    }
}

// Add event listeners to the two columns
document.getElementById('column1').addEventListener('input', checkColumnsFilled);
document.getElementById('column2').addEventListener('input', checkColumnsFilled);

// Add a click event listener to the redirect button
document.getElementById('redirect-button').addEventListener('click', function() {
  // Redirect to the other page
    window.location.href = '/Transaction/index.html';
});
