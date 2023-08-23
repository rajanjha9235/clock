
function show_clock(){
    let h = document.querySelector('.hr');
    let m = document.querySelector('.mn');
    let s = document.querySelector('.ss');

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30*hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('sound.mp3');
    sound.play();
}

setInterval(show_clock,1000);