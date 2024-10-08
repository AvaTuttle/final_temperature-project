// Function to convert Celsius to Fahrenheit or Fahrenheit to Celsius based on user input
document.getElementById("convertButton").addEventListener("click", function() {
    let tempInput = document.getElementById("temperatureInput").value.trim();
    let temperature, resultText;
    
    // Check if input contains 'C' or 'F' to determine which conversion to perform
    if (tempInput.toLowerCase().endsWith("c")) {
        temperature = parseFloat(tempInput.slice(0, -1)); // Get temperature without 'C'
        let fahrenheit = (temperature * 9/5) + 32;
        resultText = `${fahrenheit.toFixed(2)} °F`;
        updateThermometer(fahrenheit); // Update thermometer based on Fahrenheit
        changeBackground(temperature); // Change background based on Celsius
    } else if (tempInput.toLowerCase().endsWith("f")) {
        temperature = parseFloat(tempInput.slice(0, -1)); // Get temperature without 'F'
        let celsius = (temperature - 32) * 5/9;
        resultText = `${celsius.toFixed(2)} °C`;
        updateThermometer(temperature); // Update thermometer based on Fahrenheit
        changeBackground(celsius); // Change background based on converted Celsius
    } else {
        resultText = "Please enter a valid temperature (e.g., 32C or 89F)";
    }

    // Update the result paragraph
    document.getElementById("result").textContent = resultText;

    // Change background based on temperature (Celsius assumed in input)
    function changeBackground(temp) {
        if (temp <= 0) { // Adjusted to use Celsius
            document.body.style.backgroundImage = "url('img/snow.jpg')"; // Cold
        } else if (temp > 0 && temp <= 20) { // Adjusted to use Celsius
            document.body.style.backgroundImage = "url('img/warm.jpg')"; // Mild
        } else {
            document.body.style.backgroundImage = "url('img/hot.jpg')"; // Hot
        }
    }
});

