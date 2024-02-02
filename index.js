function ToggleColor(){
    var element = document.getElementById("watch");
    element.classList.toggle("colour");
}

function ShowTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if (hours<10){
        hours = "0" + hours;
        session = "AM";
    }
    else if (hours<12){
        session = "AM";
    }
    else {
        session = "PM";
    }

    if (minutes<10){
        minutes = "0" + minutes;
    }

    if (seconds<10){
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds + " " + session;

    document.getElementById("watch").innerHTML = time;

    setInterval(ShowTime, 1000);
}

ShowTime();