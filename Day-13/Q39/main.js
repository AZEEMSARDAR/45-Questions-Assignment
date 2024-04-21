"use strict";
function city_country(city, country = "Pakistan") {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Italy", "Milan"));
console.log(city_country("Tokyo", "Japan"));
