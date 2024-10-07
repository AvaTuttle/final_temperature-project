// Function to update the thermometer fill based on Fahrenheit temperature
function updateThermometer(fahrenheit) {
    let heightPercentage;

    // Map Fahrenheit to a height percentage (e.g., -20°F to 120°F)
    if (fahrenheit <= 20) {
        heightPercentage = 0;  // Too cold, set it to 0%
    } else if (fahrenheit >= 120) {
        heightPercentage = 100; // Too hot, set it to 100%
    } else {
        heightPercentage = (fahrenheit + 20) / 1.4; // Scale to fit within the thermometer
    }

    // Get the thermometer fill element and set its height
    const thermometerFill = document.getElementById("thermometer-fill");
    thermometerFill.style.height = `${heightPercentage}%`;

    // Change the thermometer color based on the temperature
    if (fahrenheit < 32) {
        thermometerFill.style.backgroundColor = 'blue';  // Cold
    } else if (fahrenheit >= 32 && fahrenheit <= 80) {
        thermometerFill.style.backgroundColor = 'green'; // Moderate
    } else {
        thermometerFill.style.backgroundColor = 'red';   // Hot
    }
}