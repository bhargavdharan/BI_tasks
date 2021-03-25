// let currentDate = new Date();
// let cDay = currentDate.getDate();
// let cMonth = currentDate.getMonth() + 1;
// let cYear = currentDate.getFullYear();
// let cHour = currentDate.getHours();
// let cMin = currentDate.getMinutes();
// let cSec = currentDate.getSeconds();
// console.log(cHour);
// console.log(cMin);
// console.log(cSec);
// console.log(cDay);
// console.log(cMonth);
// console.log(cYear);

// console.log("<b>" + cDay + "/" + cMonth + "/" + cYear + "<\br>");

// let currentDate = new Date();
// let cDay,cMonth,cYear;
//     cDay   = currentDate.getDate();
//     cMonth = currentDate.getMonth();
//     cYear  = currentDate.getYear();

// let cHours,cMinutes,cSeconds;
//     cHours   = currentDate.getHours();
//     cMinutes = currentDate.getMinutes();
//     cSeconds = currentDate.getSeconds();


// let cTime = cHours + " : " + cMinutes + " : " + cSeconds;
// let cDate = cYear + " /" + cMonth + " /" +cDay;
// let timeDate = cTime + "<br> " + cDate;
// console.log(timeDate);

// setInterval(() => {
//     currentDate = new Date();
//     date = a.toLocaleDateString(undefined, options);
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.getElementById('time').innerHTML = time + "<br> " + date;
// }, 1000)



function clock(){
        
        let currentDate = new Date();
        let cDay,cMonth,cYear;
            cDay   = currentDate.getDate();
            cMonth = currentDate.getMonth();
            cYear  = currentDate.getYear();
        let cHours,cMinutes,cSeconds;
            cHours   = currentDate.getHours();
            cMinutes = currentDate.getMinutes();
            cSeconds = currentDate.getSeconds();
    
        let period = "AM";
        if(cHours==0)
        {
            cHours=12;
        }
        else if(cHours>=12)
        {
            cHours = cHours - 12;
        }
    
        cHours = cHours<10 ? "0" + cHours : cHours;
        cMinutes = cMinutes<10 ? "0" + cMinutes : cMinutes;
        cSeconds = cSeconds<10 ? "0" + cSeconds : cSeconds;

    let cTime = cHours + " : " + cMinutes + " : " + cSeconds;
    let cDate = cDay + " /" + cMonth + " /" +cYear;
    document.getElementById("clock").innerHTML =  cTime+ "</br>" + cDate;
    setTimeout(clock,1000);

}
clock();

