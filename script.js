// Get elements
const buyClashOfClansButton = document.getElementById('buyClashOfClans');
const popup = document.getElementById('buyPopup');
const closePopup = document.getElementById('closePopup');

// Show popup when "Buy" button is clicked
buyClashOfClansButton.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Close popup when "X" button is clicked
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});