import "./styles.css"

const API_KEY = "08afe61f59f74cac92b192837252207";
const API_PATH = "https://api.weatherapi.com/v1/forecast.json?";

function processForm() {
    const input = document.querySelector("input");
    const submitBtn = document.querySelector("button");

    submitBtn.addEventListener("click", () => {
        getWeather(input.value);
    })
}

async function getWeather(input) {
    const response = await fetch(`${API_PATH}key=${API_KEY}&q=${input}&days=4&qi=no`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

processForm();