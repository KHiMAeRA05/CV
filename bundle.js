var n = function (n) {
  var t = {loading: !0}, e = document.getElementById("get-weather");
  fetch("https://weatherdbi.herokuapp.com/data/weather/Innopolis").then((function (n) {
    return n.text()
  })).then((function (n) {
    return JSON.parse(n)
  })).then((function (n) {
    (t = n).currentConditions ? (e.innerText = t.currentConditions.temp.c.toString(), e.innerText += "℃ | " + t.currentConditions.temp.f + "℉\nInnopolis,\nRepublic of Tatarstan", console.log(e)) : t.status && (e.innerText = "There is no such a location")
  })), t.loading && (e.innerText = "Please Stand By 💿")
};
window.onload = function () {
  var t = document.getElementById("update-btn");
  console.log(t), t.addEventListener("click", n)
};
