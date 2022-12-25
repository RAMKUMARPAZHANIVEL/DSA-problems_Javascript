/*Find out the numbers of 
seconds elapsed from January 1, 1970 to now.*/
function elapsingTime(){
    let date = new Date(2022, 12, 25, 22, 00, 00, 00);
    let sec = Math.floor(date/1000);
    return sec;

}

console.log(elapsingTime());
