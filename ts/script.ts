const getWeather = (event: MouseEvent) => {

  let weather:WData|WError|WLoading = {loading: true}
  const resWeather = document.getElementById("get-weather");

  fetch("https://weatherdbi.herokuapp.com/data/weather/" + "Innopolis")
    .then((res) => res.text())
    .then((res) => JSON.parse(res) as WData|WError)
    .then((res) => {
      weather = res;
      if((weather as WData).currentConditions) {
        resWeather.innerText = (weather as WData).currentConditions.temp.c.toString();
        resWeather.innerText += '℃ | ' + (weather as WData).currentConditions.temp.f +'℉\nInnopolis,\nRepublic of Tatarstan';
        console.log(resWeather);
      }
      else if ((weather as WError).status) resWeather.innerText = "There is no such a location";
    });
  if((weather as WLoading).loading) resWeather.innerText = "Please Stand By 💿";
}

const main = () => {
  const update = document.getElementById("update-btn");
  console.log(update);
  update.addEventListener("click", getWeather);
}

window.onload = main;

interface WError {
  status: string;
}
interface WLoading {
  loading: boolean;
}

interface WData {
  region: string;
  currentConditions: {
    temp: {
      c: number;
      f: number;
    }
  }
}
