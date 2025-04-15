const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function showWeather() {
    const cityInput = document.getElementById('cityInput').value.trim();
    const weatherOutput = document.getElementById('weatherOutput');
    const cityData = weatherData[cityInput];

    if (cityData) {
        weatherOutput.innerHTML = `
            <h2>Thời tiết tại ${cityInput}:</h2>
            <p>${cityData.icon} ${cityData.description}</p>
            <p>Nhiệt độ: ${cityData.temperature}°C</p>
            <p>Độ ẩm: ${cityData.humidity}%</p>
            <p>Tốc độ gió: ${cityData.windSpeed} km/h</p>
        `;
    } else {
        weatherOutput.innerHTML = `
            <p class="error">Rất tiếc, không có thông tin thời tiết cho thành phố: ${cityInput}.</p>
        `;
    }
}
