document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('menu-overlay');

    function toggleMenu() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    if (hamburger && menu) {
        hamburger.addEventListener('click', toggleMenu);
    }

    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
});


lucide.createIcons();

const kmRange = document.getElementById("kmRange");
const energyRange = document.getElementById("energyRange");
const smokeRange = document.getElementById("smokeRange");

const kmValue = document.getElementById("kmValue");
const energyValue = document.getElementById("energyValue");
const smokeValue = document.getElementById("smokeValue");

const co2Value = document.getElementById("co2Value");
const barFill = document.getElementById("barFill");
const statusText = document.getElementById("statusText");

const localInput = document.getElementById("localInput");
const timeInput = document.getElementById("timeInput");
const resultInput = document.getElementById("resultInput");
const historyList = document.getElementById("historyList");

function calculate() {

    const km = Number(kmRange.value);
    const energy = Number(energyRange.value);
    const smoke = Number(smokeRange.value);

    kmValue.innerText = km + " km";
    energyValue.innerText = energy + " kWh";
    smokeValue.innerText = smoke + " un";

    const total =
        (km * 0.21) +
        (energy * 0.41) +
        (smoke * 1.8);

    co2Value.innerText = total.toFixed(1);

    resultInput.value = total.toFixed(1) + " kg CO₂";

    let quality = 100 - (total / 5);

    if (quality < 5) quality = 5;
    if (quality > 100) quality = 100;

    barFill.style.width = quality + "%";

    if (total <= 90) {
        statusText.innerText = "ÓTIMA";
        statusText.style.color = "#8DAA3F";
        barFill.style.background = "#8DAA3F";
    }
    else if (total <= 180) {
        statusText.innerText = "MODERADA";
        statusText.style.color = "#c7a600";
        barFill.style.background = "#c7a600";
    }
    else {
        statusText.innerText = "ALTA";
        statusText.style.color = "#cc4b37";
        barFill.style.background = "#cc4b37";
    }

}

calculate();