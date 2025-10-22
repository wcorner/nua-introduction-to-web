document.getElementById("temp").value = null;

const button = document.getElementById("button");

const tempCalc = () => {
    
    let kelvin = document.getElementById("temp").value;
    kelvin = Number(kelvin);

    const celsius = Math.floor(kelvin - 273);
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    const rankine = Math.floor(kelvin * 1.8);

    const results = [
        ["kelvin", kelvin], 
        ["celsius", celsius], 
        ["fahrenheit", fahrenheit], 
        ["rankine", rankine]
    ]

    for(const result of results) {
        const text = document.querySelector(`#${result[0]} span`)
        
        if(text) {
            text.innerHTML = result[1].toString();
        }
    }

};

button.addEventListener("click", tempCalc);

document.addEventListener("keydown", (event) => {
    // console.log(event.key)
    if (event.key === "Enter") {
        tempCalc();
    } else if (event.key === "Escape"){ 
        document.getElementById("temp").value = 0;
        tempCalc();
    }
});