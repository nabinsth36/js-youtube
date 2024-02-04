const celsiusToFahrenheit = function(celsiusTemps) {
    let fahrenheitTemps = [];

    for(let i=0; i<celsiusTemps.length; i++) {
        let celsius = celsiusTemps[i];
        let fahrenheit = (celsius * 9/5) + 32;
        fahrenheitTemps.push(fahrenheit);
    }
    return fahrenheitTemps;
}

let celsiusTemperatures = [25, 28, 32, 27, 24, 29, 34];
let fahrenheitTemperatures = celsiusToFahrenheit(celsiusTemperatures);

console.log(`Celsius Temperatures: ${celsiusTemperatures}`);
console.log(`Fahrenheit Temperature: ${fahrenheitTemperatures}`);