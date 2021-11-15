///27.

//1.

let now = new Date(2021, 1, 20, 2);
alert(now);

//2.

function getWeekDay(date){

   let days = [ 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA' ];

   return days[date.getDay()];
}
let date = new Date(2021, 1, 2);

alert(getWeekDay(date));
   
//3.

function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
  }

//4.

function getDateAgo(date, days){
    let dateCopy = new Date(date);
    date.setDate(date.getDate() - days);
    return date.getDate();
}

//5.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

//6.

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }

//7.

function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
}

//8.
function formatDate(date){
    let diff = new Date() - date;
    if (diff < 1000) {
      return `현재`; 
    }
}



