// Get elements
const buyClashOfClansButton = document.getElementById('buyClashOfClans');
const pricePopup = document.getElementById('pricePopup');
const closePricePopup = document.getElementById('closePricePopup');

// Show popup when "ចុចទិញ" is clicked
buyClashOfClansButton.addEventListener('click', function() {
    pricePopup.style.display = 'flex';
});

// Close popup when "X" is clicked
closePricePopup.addEventListener('click', function() {
    pricePopup.style.display = 'none';
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === pricePopup) {
        pricePopup.style.display = 'none';
    }
});
