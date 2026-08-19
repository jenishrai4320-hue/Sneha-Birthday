const birthday = new Date("August 25, 2026 00:00:00").getTime();

setInterval(function() {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds ❤️";

}, 1000);


function openLetter() {

    document.getElementById("letter").style.display = "block";

}


function openSurprise() {

    document.getElementById("surprise").style.display = "flex";

}