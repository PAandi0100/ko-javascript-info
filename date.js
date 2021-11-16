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
    let set = Math.floor(diff / 1000);  // n초 단위
    let min = Math.floor(diff / 60000); // n분 단위

    if (diff < 1000) {
      return `현재`; 
    }

    if(diff < set){
      return set + `초 전`;
    }

    if(diff < min){
      return min + `분 전`;
    }

    let d = date;
    d = [
      d.getFullYear(),
      (d.getMonth() + 1),
      d.getDate(),
      d.getHours(), 
      d.getMinutes()
    ];

    return `${d[2]}.${d[1]}.${d[0]} ${d[3]}:${d[4]}`;
}

