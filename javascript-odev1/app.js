let userName = prompt("Lütfen isminizi giriniz.");
let name = document.querySelector("#myName");
if(userName.length > 0){
 name.innerHTML=`${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`;
}
else if(!userName) {
    console.log("İsim bulunamadı. Lütfen isminizi giriniz.");
}

function dateFunction(){
let date = new Date();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
let day = date.getDay();
let hour = date.getHours()
let minute = date.getMinutes();
let second = date.getSeconds();

let dateInformation = document.querySelector("#myClock");
dateInformation.innerHTML=`${hour}:${minute}:${second}  ${days[day]}`;
setInterval(dateFunction,1000);
}

dateFunction();