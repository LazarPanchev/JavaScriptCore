let stormWatcher = (function () {
    let id = 0;
    return class Storm {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }
        get status(){
            if ((this.temperature < 20) && (this.pressure < 700 || this.pressure > 900) && (this.windSpeed > 25)) {
                return 'Stormy';
            }else {
                return 'Not stormy';
            }
        }

        toString() {
            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.status}`;
        }
    }
})();
let result = stormWatcher;
// let record1 = new Record(32, 66, 760, 12);
// console.log(record1.toString());
//
// let record2 = new Record(10, 40, 680, 30);
// console.log(record2.toString());
let record1 = new result(32, 66, 760, 12);
let report1 = record1.toString();

let record2 = new result(10, 40, 680, 30);
let report2 = record2.toString();