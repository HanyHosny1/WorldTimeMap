//Search for abstract TIme API

async function getUser(place) {
  const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=f682bfdec3e84154a895ba7b4b41757f&location=${place}`;

  const response = await fetch(api_url);

  const data = await response.json();

  time = await data.datetime;
  // arr = Array.from(time)
  // arr.splice(0, 11)
  // arr.toString()
  // timezone = (arr.splice(0, 5)).join("");
  document.getElementById(
    "time"
  ).innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`;
}

document.querySelectorAll(".allPaths").forEach((e) => {
  e.setAttribute("class", `allPaths ${e.id}`);
  e.addEventListener("mouseover", function () {
    window.onmousemove = function (j) {
      x = j.clientX;
      y = j.clientY;
      document.getElementById("name").style.top = y - 60 + "px";
      document.getElementById("name").style.left = x + 10 + "px";
    };
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      country.style.fill = "#1aff00";
    });
    document.getElementById("name").style.opacity = 1;

    document.getElementById("namep").innerText = e.id;
  });
  e.addEventListener("mouseleave", function () {
    const classes = e.className.baseVal.replace(/ /g, ".");
    document.querySelectorAll(`.${classes}`).forEach((country) => {
      country.style.fill = "#ececec";
    });
    document.getElementById("name").style.opacity = 0;
  });

  //To get the time of the country
  e.addEventListener("click", function () {
    getUser(e.id);
  });
});
