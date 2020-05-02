var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");


// let body = document.getElementsByTagName("body")[0];

// var comeBackDate = localStorage.getItem("hour");

//retrieve info from local storage

var parseTodayPlanner = JSON.parse(localStorage.getItem("text"));
console.log(parseTodayPlanner);

var todayPlanner =[];

var amPm = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"];

var momentAmPm = []
//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];


/*populate empty array todayPlanner with strings from the the amPm array
to create an object for every timeblock*/
function populateObject(){

   for (var i = 0; i < amPm.length; i++){

    var hourToPlanner = {hour: amPm[i], text: ""};
    //put a moment in hour


    todayPlanner.push(hourToPlanner);
    //console.log(todayPlanner);

   
}
}
populateObject();

//trying to change the text value of each object in the array
//console.log comes back with undefined for text: key
//it's undefined because since there's no value when "" is being replaced it is undefined
//added a conditional, no more undefined
function populateObjectWithText(){
    for (var i = 0; i < todayPlanner.length; i++){

        var textValue = document.querySelectorAll(".description").value;

        var characters = "abcdefghijklmnopqrstuvwxyz0123456789".split();

        if (textValue === characters){

            todayPlanner[i].text = textValue;
        }
    }
}


//Click Event for Save Button
//local storage not working
function saveText(){
    saveButton.addEventListener("click", function(event){
        event.preventDefault();

       // populateObjectWithText();   

    });
    
     //stringify and send to local storage
     var stringifyTodayPlanner = JSON.stringify(todayPlanner);
        
     localStorage.setItem("text", stringifyTodayPlanner);
     //console.log(localStorage);
}
//saveText();
// console.log(todayDate);

//initilize moment using LL format of date
//grab id of div where date will go
//print the moment onto webpage

var dateMoment = moment().format("LL");

var todaysDate = document.getElementById("currentDay");

todaysDate.innerHTML = dateMoment;

//use moment for color-changing

var startOfDayHour = moment().startOf("day").fromNow()
var endOfDayHour = moment().endOf("day").fromNow()



var hourMoment = moment().format("h");

var momentAmPm = [];

//won't work because it'll replace every string with the same hour
// function changeHour(){
// for (var i = 0; i < amPm.length; i++){
//     var replaceHour = amPm[i].replace(amPm[i], hourMoment);
//     momentAmPm.push(replaceHour);
// }
// }console.log(momentAmPm);

function movingColors(){

    //run through created array of objects to
    //trying to get the moment to check againt the hour in the array of objects
    
    //might work if can change the 

    for (var i = 0; i < todayPlanner.length; i++){

        if (todayPlanner[i].hour === (hourMoment.subtract("hours", 1))){
            textareaE1.setAttribute("style", "background: grey")
        }
        else if (todayPlanner[i].hour === (hourMoment.add("hours", 1))){
            textareaE1.setattribute("style", "background: blue")
        }
        else if (todayPlanner[i].hour === hourMoment){
            textareaE1.setattribute("style", "background: yellow")
        } 
    }
}
movingColors();




// function populateLocalStorage(){
//     localStorage.setItem("hour", textEntry);
// }


//loop through empty array, that would grow with objects, to push id of textarea to be a key and value written in textarea as value in an object pair 
// for (var i = 0; i < date.length; i++){
//     var textareaId = document.querySelectorAll("id").label;
//     var textEntry = document.querySelectorAll("textarea").value;
    
//     date.push(date[i][textareaId] = textEntry);
    

// }console.log(date)

//to get save button to save what's in textarea to local storage

//click event with function that has:
//preventdefault
//document.querySelectorAll("textarea").value = varName
//
//localStorage.setItem(hourDiv, varName); 
//this associates the hour div to the textarea that way even if i change the hours from 24hrs to am/pm it should still work

//later to retrieve
//var savedText = localStorage.getItem("text")


//toggling between 24hrs and am/pm

//var timeFormat = "amPm"

//hourSwitcher.addEventListener("click", function(){
//   if (timeFormat === "amPm"){
        //timeFormat === "military"; //or put moment() here
        //$hourDiv.(jquery method of setAttribute)()
    //}
// })

// create an array of am/pm that include am/pm in each string
//create an array of 24hrs, that is strings seperated by commas from 0-24 
//
//
// when the hourSwitcher is toggled it does a loop where it loops through the array,
// replacing each number in it's correct slot. a loop within a loop?


//varName = moment()

//addeventlistener for savebutton
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 


//instead of setting text in the hour div when changed to am/pm to say am/pm
//you can call moment to bring that too

//Logic for changing colors in real-time

//should each text area have it's own class name to refer to to change?

