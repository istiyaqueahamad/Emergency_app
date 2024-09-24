// JavaScript to handle the button click
document.getElementById('displayButton').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 90000000) + 10000000; // Generate a random number between 10000000 and 99999999
    document.getElementById('numberDisplay').textContent = randomNumber; // Display the number
});

document.getElementById('submitButton').addEventListener('click', function() {
    // Get values from the form (if needed)
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;

    // Here you can handle the form submission logic, e.g., sending the data to a server.

    // Show success message
    document.getElementById('successMessage').style.display = 'block';

    // Optional: Clear the form fields after submission
    document.getElementById('address').value = '';
    document.getElementById('description').value = '';
    document.getElementById('image-upload').value = '';
});
