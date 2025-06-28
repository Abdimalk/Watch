const day = document.querySelector("#day")
const months = document.querySelector("#months")
const year = document.querySelector("#year")
const hour = document.querySelector("#hour")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const Ampm = document.querySelector("#Ampm")

const MonthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"] 
const clock = () => {
    const Datetime = new Date()
    day.innerHTML = Datetime.getDate()
    // months.innerHTML = Datetime.getMonth()+1
    months.innerHTML = MonthsNames[Datetime.getMonth()]
    year.innerHTML = Datetime.getFullYear()
    hour.innerHTML = Datetime.getHours()
    if (Datetime.getHours() <10){
       hour.innerHTML = `0 ${Datetime.getHours()} :`
    }
    else{
       hour.innerHTML = Datetime.getHours() + " :"

    }

    minutes.innerHTML = Datetime.getMinutes()
     if (Datetime.getMinutes() <10){
       minutes.innerHTML = `0 ${Datetime.getHours()} :`
    }
    else{
       minutes.innerHTML = Datetime.getHours() + " :"

    }

    // seconds.innerHTML = Datetime.getSeconds()
    if (Datetime.getSeconds() <10){
       seconds.innerHTML = `0${Datetime.getSeconds()}`
    }
    else{
       seconds.innerHTML = Datetime.getSeconds()

    }
    
}
setInterval(clock)