const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>`;

const LastModified = document.getElementById("LastModified").textContent = document.lastModified;


function calculateWindChill(temperature, speed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (speed ** 0.16)) + (0.3965 * temperature * (speed ** 0.16))
};



const temperature_str = document.querySelector("#temperature");
const speed_str = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#WindChill");

const temperature = parseFloat(temperature_str.textContent);
const speed = parseFloat(speed_str.textContent);

if ((temperature <= 10) && (speed > 4.8)) {
    const chill = calculateWindChill(temperature, speed);
    windChillElement.textContent = `${chill.toFixed(1)} °C`;

} else {
    windChillElement.textContent = "N/A"
}