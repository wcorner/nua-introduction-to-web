document.getElementById("temp").value = null;

let button = document.getElementById("button");

const tempCalc = function (){

    let kelvin = document.getElementById("temp").value;   
    kelvin = Number(kelvin);

    const celsius = Math.floor(kelvin - 273);
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    const rankine = Math.floor(kelvin * 1.8);

    const kValue = document.getElementById("kelvin");
    const cValue = document.getElementById("celsius");
    const fValue = document.getElementById("fahrenheit");
    const rValue = document.getElementById("rankine");

    kValue.innerHTML = `The temperature is ${kelvin.toString()} degrees Kelvin.`;
    cValue.innerHTML = `The temperature is ${celsius.toString()} degrees Celsius.`;
    fValue.innerHTML = `The temperature is ${fahrenheit.toString()} degrees Fahrenheit.`;
    rValue.innerHTML = `The temperature is ${rankine.toString()} degrees Rankine.`; 
};

button.addEventListener("click", tempCalc)

document.addEventListener("keydown", (event) => {
    if(event.key === " ") {
        tempCalc();
    }
})