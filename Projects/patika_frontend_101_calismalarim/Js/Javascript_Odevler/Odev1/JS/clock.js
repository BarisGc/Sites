setInterval(showTime, 1000);

function showTime() {
    const date = new Date();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    const d = new Date();
    let day = weekday[d.getDay()];

document.getElementById("myClock").innerHTML = `${date.toLocaleTimeString()} ${day}`;
}



function nameAsk() {
    let person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("myName").innerHTML = person;
    }
}
nameAsk();