var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");


//located here so the date is updated first
currentDay();



for (var i = 0; i < localStorage.length; i++)

$("#0 .description").val(localStorage.getItem("hour0"));
$("#1 .description").val(localStorage.getItem("hour1"));
$("#2 .description").val(localStorage.getItem("hour2"));
$("#3 .description").val(localStorage.getItem("hour3"));
$("#4 .description").val(localStorage.getItem("hour4"));
$("#5 .description").val(localStorage.getItem("hour5"));
$("#6 .description").val(localStorage.getItem("hour6"));
$("#7 .description").val(localStorage.getItem("hour7"));
$("#8 .description").val(localStorage.getItem("hour8"));
$("#9 .description").val(localStorage.getItem("hour9"));
$("#10 .description").val(localStorage.getItem("hour10"));
$("#11 .description").val(localStorage.getItem("hour11"));
$("#12 .description").val(localStorage.getItem("hour12"));
$("#13 .description").val(localStorage.getItem("hour13"));
$("#14 .description").val(localStorage.getItem("hour14"));
$("#15 .description").val(localStorage.getItem("hour15"));
$("#16 .description").val(localStorage.getItem("hour16"));
$("#17 .description").val(localStorage.getItem("hour17"));
$("#18 .description").val(localStorage.getItem("hour18"));
$("#19 .description").val(localStorage.getItem("hour19"));
$("#20 .description").val(localStorage.getItem("hour20"));
$("#21 .description").val(localStorage.getItem("hour21"));
$("#22 .description").val(localStorage.getItem("hour22"));
$("#23 .description").val(localStorage.getItem("hour23"));
$("#24 .description").val(localStorage.getItem("hour24"));
console.log(localStorage)


//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];



$(".saveBtn").on("click", function(event){

    event.preventDefault();

    console.log("click");
    var note = $(this).siblings(".description").val();//textarea tag is a sibling to the button tag
    var idNote = $(this).parent().attr("id");//id of row, row is a parent to button and textarea
    

    var hour = "hour" + idNote;

    
   
 localStorage.setItem(hour, note);

});


//initilize moment using LL format of date
//grab id of div where date will go
//print the moment onto webpage
function currentDay(){
var dateMoment = moment().format("LL");

var todaysDate = document.getElementById("currentDay");

todaysDate.innerHTML = dateMoment;
}

//use moment for color-changing

var currentHour = moment().hour();

function movingColors(){

    for (var i = 0; i < textareaE1.length; i++){

        
        if (parseInt(textareaE1[i].getAttribute("id")) == currentHour){
            textareaE1[i].setAttribute("style", "background: rgb(225, 165, 199)")
        }
        else if (parseInt(textareaE1[i].getAttribute("id")) > currentHour){
            textareaE1[i].setAttribute("style", "background: rgb(113, 183, 243)")
        }
        else{
            textareaE1[i].setAttribute("style", "background: rgb(187, 213, 198)")
        } 
    
}
}
movingColors();


