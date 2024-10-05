const dtTime = document.getElementById('dt-time');
const dtDate = document.getElementById('dt-date');
const dtMonth = document.getElementById('dt-month');
const dtYear = document.getElementById('dt-year');
const dtday = document.getElementById('dt-whichday');

function getWeekDay(objDate){
    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    return weekdays[objDate.getDay()];
}

function updateTime (){
    const todayDate = new Date();
    let weekDay  = getWeekDay(todayDate);

    let month = todayDate.getMonth() < 10 ? '0' + todayDate.getMonth() : todayDate.getMonth();
    let date = todayDate.getDate() < 10 ? '0' + todayDate.getDate() : todayDate.getDate();

    dtTime.innerText = todayDate.toLocaleTimeString();
    dtYear.innerText = todayDate.getFullYear();
    dtMonth.innerText = month;
    dtDate.innerText = date;
    dtday.innerText = weekDay;
}
updateTime ();
setInterval( () => {
    updateTime ();
}, 1000)
