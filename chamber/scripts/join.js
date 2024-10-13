// Set the timestamp value to the current date and time in ISO format
document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();
});

// Handle modal display for membership cards
const modals = document.querySelectorAll('.modal');
const links = document.querySelectorAll('.membership-cards .card a');

// Attach click event listeners to membership links
links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        modals[index].classList.add('active'); // Show the corresponding modal
    });
});

// Close modals when clicking outside the modal content
modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active'); // Close the modal
        }
    });
});
