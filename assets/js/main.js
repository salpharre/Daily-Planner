


var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");


//located here so the date is updated first
currentDay();



for (var i = 0; i < localStorage.length; i++){
    $("#" + [i] + ".description").val(localStorage.getItem("hour" + [i]));
}

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


