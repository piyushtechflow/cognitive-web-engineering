const api_url =
  "https://api.open-meteo.com/v1/forecast?latitude=28.31&longitude=77.20&hourly=temperature_2mis";

const mainContainer = document.querySelector(".main-container");

async function getWeatherData() {
  try {
    const response = await fetch(api_url);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status ${response.status}`);
    }
    const data = await response.json();

    const times = data.hourly.time;
    const temperature = data.hourly.temperature_2m;
    const units = data.hourly_units.temperature_2m;

    const container = document.createElement("div");

    for (let i = 0; i < times.length; i++) {
      const showEl = document.createElement("p");
      showEl.style.background = "#f9f9f9";
      showEl.style.fontFamily = "sans-serif";
      showEl.style.padding = "2rem";
      showEl.style.margin = "2rem";
      showEl.style.border = "2px solid black";
      showEl.style.borderRadius = "8px";
      showEl.textContent = `Time: ${times[i]} - ${temperature[i]}${units}`;
      container.append(showEl);
      mainContainer.append(container);
    }
  } catch (err) {
    console.log(err);
  }
}
getWeatherData();
