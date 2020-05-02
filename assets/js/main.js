var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");




// let body = document.getElementsByTagName("body")[0];

// var comeBackDate = localStorage.getItem("hour");


//located here so the date is updated first
currentDay();

// var parseTodaySchedule = JSON.parse(localStorage.getItem("text"));
// console.log(parseTodaySchedule);

$("#0 .description").val(localStorage.getItem("hour0"));
console.log(localStorage)

//print saved text back into webpage
$("hour0").text()

//prints saved text back onto webpage
// for (var i = 0; i < parseTodayPlanner.length;i++){
//    var note = parseTodayPlanner[i].text
//    var time = parseTodayPlanner[i].hour
//    //console.log(time)
//    console.log(note);
//   $("#00:00").val(note)//grabs specific text for the specific hour
//    //note.innerHTML =
// }

// var note = parseTodayPlanner[0].text
//    var time = parseTodayPlanner[0].hour
//    //console.log(time)
//    console.log(note);
//   $(time).val(note)//grabs specific text for the specific hour
//    //note.innerHTML =

// var todaySchedule ={
//         hour1: "",
//         hour2: "",
//         hour3: "",
//         hour4: "",
//         hour5: "",
//         hour6: "",
//         hour7: "",
//         hour8: "",
//         hour9: "",
//         hour10: "",
//         hour11: "",
//         hour12: "",
//         hour13: "",
//         hour14: "",
//         hour15: "",
//         hour16: "",
//         hour17: "",
//         hour18: "",
//         hour19: "",
//         hour20: "",
//         hour21: "",
//         hour22: "",
//         hour23: "",
//         hour24: "",
      
//     };
//console.log(todaySchedule.hour1);

//var amPm = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"];


//placed call here because the array of objects had just been created
//movingColors();

//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];



//trying to change the text value of each object in the array
//console.log comes back with undefined for text: key
//it's undefined because since there's no value when "" is being replaced it is undefined
//added a conditional, no more undefined
// function populateObjectWithText(){
//     for (var i = 0; i < todayPlanner.length; i++){

//         var textValue = $(".description").value;

//         var characters = "abcdefghijklmnopqrstuvwxyz0123456789".split();
//         console.log(textValue);
//         console.log(characters);
//         if (textValue === characters){

//             todayPlanner[i].text = textValue;
//         }
//     }
// }
//console.log(today);


$(".saveBtn").on("click", function(event){

    event.preventDefault();

    console.log("click");
    var note = $(this).siblings(".description").val();//textarea tag is a sibling to the button tag
    var idNote = $(this).parent().attr("id");//id of row, row is a parent to button and textarea
    //console.log(note);
    //console.log(idNote);

    var hour = "hour" + idNote;

    //console.log(note);
   // populateObjectWithText();  
   
   //stringify and send to local storage



//  var stringifyTodaySchedule = JSON.stringify(todaySchedule);
    
 localStorage.setItem(hour, note);

});








//Click Event for Save Button
//local storage not working
//function saveText(){

     
//}
//saveText();
// console.log(todayDate);

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

// function movingColors(){

//     //run through created array of objects to
//     //trying to get the moment to check againt the hour in the array of objects
    

//     for (var i = 0; i < todayPlanner.length; i++){

        
//         if (todayPlanner[i].hour == startOfDayHour){
//             textareaE1.setAttribute("style", "background: grey")
//         }
//         else if (todayPlanner[i].hour === endOfDayHour){
//             textareaE1.setattribute("style", "background: blue")
//         }
//         else if (todayPlanner[i].hour === hourMoment){
//             textareaE1.setattribute("style", "background: yellow")
//         } 
    
// }
// movingColors();

// m = moment().format("00").isBefore("23");
    // console.log(m);
    //var m = moment()
//if (m = moment()

// for (var m = moment(firstMoment); m.isBefore(lastMoment); m.add(1, "hour")){
    //     console.log(m.format("HH:mm"));
    // }
//}
