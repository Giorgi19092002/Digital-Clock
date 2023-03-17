let hour = document.getElementById('hour')
let minuts = document.getElementById('minute')
let second = document.getElementById('second')


const clock = setInterval(function time(){
    let dayToday = new Date()
    let hr = dayToday.getHours()
    let min = dayToday.getMinutes()
    let sec = dayToday.getSeconds()

    if(hr < 10){
        hr = '0' + hr
    }

    if(min < 10){
        min = '0' + min
    }

    if(sec < 10){
        sec = '0' + sec
    }




    hour.innerHTML = hr
    minuts.innerHTML =min
    second.innerHTML = sec
},1000)