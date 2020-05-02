var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");


//located here so the date is updated first
currentDay();

// var parseTodaySchedule = JSON.parse(localStorage.getItem("text"));
// console.log(parseTodaySchedule);

$("#0 .description").val(localStorage.getItem("hour0"));
console.log(localStorage)

//print saved text back into webpage
$("hour0").text()


//movingColors();

//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];



$(".saveBtn").on("click", function(event){

    event.preventDefault();

    console.log("click");
    var note = $(this).siblings(".description").val();//textarea tag is a sibling to the button tag
    var idNote = $(this).parent().attr("id");//id of row, row is a parent to button and textarea
    //console.log(note);
    //console.log(idNote);

    var hour = "hour" + idNote;

    //console.log(note);
   
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

var hourMoment = moment();

//var hourSubtract = hourMoment.subtract(1, "hours")

//var hourAdd = hourMoment.add(1, "hours");



var startOfDayHour = moment().startOf("day").fromNow()
var endOfDayHour = moment().endOf("day").fromNow()
var currentHour = moment().hour();

function movingColors(){

//     //run through created array of objects to
//     //trying to get the moment to check againt the hour in the array of obje



console.log(textareaE1);

    for (var i = 0; i < textareaE1.length; i++){

        
        if (parseInt(textareaE1[i].getAttribute("id")) == currentHour){
            textareaE1[i].setAttribute("style", "background: grey")
        }
        else if (parseInt(textareaE1[i].getAttribute("id")) > currentHour){
            textareaE1[i].setAttribute("style", "background: blue")
        }
        else{
            textareaE1[i].setAttribute("style", "background: yellow")
        } 
    
}}
movingColors();

// m = moment().format("00").isBefore("23");
    // console.log(m);
    //var m = moment()
//if (m = moment()

// for (var m = moment(firstMoment); m.isBefore(lastMoment); m.add(1, "hour")){
    //     console.log(m.format("HH:mm"));
    // }
//}
