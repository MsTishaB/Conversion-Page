var calculateDistance = function (event) {
	event.preventDefault();
	let feetInput = document.querySelector("#feet");
	let covertToMeters = Math.round(feetInput.value * 0.304);
	let metricDistance = document.querySelector("#meters");
	return (metricDistance.innerHTML = `The converted distance is ${covertToMeters} m`);
};

var calculateVolume = function (event) {
	event.preventDefault();
	let cupsInput = document.querySelector("#cups");
	let covertToMilliliters = Math.round(cupsInput.value * 236.6);
	let metricVolume = document.querySelector("#milliliters");
	return (metricVolume.innerHTML = `The converted volume is ${covertToMilliliters} mL`);
};

//calculateVolume(2);

var calculateTemp = function (event) {
	event.preventDefault();
	let fahrenheitInput = document.querySelector("#fahrenheit");
	let celsiusTemp = Math.round((fahrenheitInput.value - 32.2) * (5 / 9));
	let metricTemp = document.querySelector("#celsius");
	return (metricTemp.innerHTML = `The converted temperature is ${celsiusTemp}°C`);
};

//calculateTemp(80);

let distanceForm = document.querySelector("#distance");

distanceForm.addEventListener("submit", calculateDistance);

let volumeForm = document.querySelector("#volume");

volumeForm.addEventListener("submit", calculateVolume);

let temperatureForm = document.querySelector("#temperature");

temperatureForm.addEventListener("submit", calculateTemp);
