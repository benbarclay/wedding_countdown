function calculateTime(date, element) {
    console.log("starting timer");
    timer = window.setInterval(function() {
        var now = new Date();
        var difference = date.getTime() - now.getTime();

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((difference / (1000 * 60)) % 60);
        var seconds = Math.floor((difference / 1000) % 60);

        element.getElementsByClassName('days')[0].innerText = days;
        element.getElementsByClassName('hours')[0].innerText = hours;
        element.getElementsByClassName('minutes')[0].innerText = minutes;
        element.getElementsByClassName('seconds')[0].innerText = seconds;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    calculateTime(new Date(2013, 6, 5, 13, 30), document.getElementById("bandf"));
    calculateTime(new Date(2013, 11, 21, 13, 30), document.getElementById("pandk"));
});