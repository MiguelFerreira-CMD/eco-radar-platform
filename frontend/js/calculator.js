document.addEventListener("DOMContentLoaded", function () {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const kmRange = document.getElementById("kmRange");
    const energyRange = document.getElementById("energyRange");
    const smokeRange = document.getElementById("smokeRange");

    const co2Value = document.getElementById("co2Value");

    const barFill = document.getElementById("barFill");
    const statusText = document.getElementById("statusText");

    const historyList = document.getElementById("historyList");

    if (!kmRange) return;

    function calculate() {
        const km = Number(kmRange.value) || 0;
        const energy = Number(energyRange.value) || 0;
        const smoke = Number(smokeRange.value) || 0;

        const total = (km * 0.21) + (energy * 0.41) + (smoke * 1.8);

        co2Value.innerText = total.toFixed(1);

        let quality = 100 - (total / 5);
        if (quality < 5) quality = 5;
        if (quality > 100) quality = 100;

        barFill.style.width = quality + "%";

        if (total <= 90) {
            statusText.innerText = "AMBIENTE CONTROLADO";
            statusText.style.color = "#8DAA3F";
            barFill.style.background = "#8DAA3F";
        } else if (total <= 180) {
            statusText.innerText = "AMBIENTE MODERADO";
            statusText.style.color = "#c7a600";
            barFill.style.background = "#c7a600";
        } else {
            statusText.innerText = "ESCASSA";
            statusText.style.color = "#cc4b37";
            barFill.style.background = "#cc4b37";
        }

    }

    kmRange.addEventListener("input", calculate);
    energyRange.addEventListener("input", calculate);
    smokeRange.addEventListener("input", calculate);

    calculate();

});