const countdown = () => {
    const countDate = new Date("December 25, 2021 00:00:00").getTime();
    const countNow = new Date().getTime();
    const RT = countDate - countNow; 

//RT-remaninin time
//How it works
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Calculate the time
const textDay = Math.floor(RT / day);
const textHour = Math.floor((RT % day)/hour);
const textMinute = Math.floor((RT % hour)/minute);
const textSecond = Math.floor((RT % minute)/second);

document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;

}

setInterval(countdown, 1000);