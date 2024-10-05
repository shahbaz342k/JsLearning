const body = document.body
const inputDate = document.getElementById('input-date');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
console.log(inputDate.value) ;

const updateCountDown = () => {
    const endTime = new Date(inputDate.value+' 23:59:59')
    const startTime = new Date();
    const diff = endTime-startTime; 
    // console.log('end time :', endTime, 'start time: ', startTime)   
    const days = Math.floor(diff/1000/60/60/24);
    const hours = Math.floor( diff /1000/60/60 ) % 24;
    const minutes = Math.floor( diff /1000/60 ) % 60;
    const seconds = Math.floor( diff/1000 ) % 60;
    // console.log(Math.floor(diff/1000/60)%60);

    daysEl.innerHTML    = days < 10 ? '0'+days : days;
    hoursEl.innerHTML   = hours < 10 ? '0'+hours : hours;
    minutesEl.innerHTML =  minutes < 10 ? '0'+minutes : minutes;
    secondsEl.innerHTML =  seconds < 10 ? '0'+seconds : seconds;

}

// ===============  disable previous date ===================
function disablePrevousDate() {
    const dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    
    // add '0' before month  if month is less than 10
    month = month < 10 ? `0${month.toString()}` : month;
    
    // add '0' before date  if date is less than 10
    day = day < 10 ? `0${day.toString()}` : day;

    const maxDate = `${year}-${month}-${day}`;
    const ipd = document.getElementById('input-date');
    ipd.setAttribute('min', maxDate);
    // let maxDate = `${year}-${month}-${day}`;
    // document.getElementById('input-date').setAttribute('min', maxDate);
}
disablePrevousDate();
///////////////////////////////////////////////

inputDate.addEventListener('change', function(){
    // console.log('date changed....');
    // console.log(inputDate.value+ ' 23:59:59');
    // console.log('end time: ', new Date(inputDate.value+' 23:59:59'));
    document.getElementsByClassName('countdown-wrapper')[0].style.display = 'block';
    updateCountDown();
    setInterval( () => {
        updateCountDown();
    }, 1000)
})

// updateCountDown();















