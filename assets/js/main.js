var hourSwitcher = document.querySelector("#customSwitch1");
var hourDiv = document.querySelectorAll(".hour");
var saveButton = document.querySelector(".saveBtn");
var textArea = document.querySelectorAll(".description");
var textareaE1 = document.querySelectorAll("textarea");




// let body = document.getElementsByTagName("body")[0];

// var comeBackDate = localStorage.getItem("hour");


//located here so the date is updated first
currentDay();

var parseTodayPlanner = JSON.parse(localStorage.getItem("text"));
//console.log(parseTodayPlanner);

var todayPlanner =[
    {
        hour: "00:00",
        text: ""
    },
    {
        hour: "01:00",
        text: ""
    },
    {
        hour: "02:00",
        text: ""
    },
    {
        hour: "03:00",
        text: ""
    },
    {
        hour: "04:00",
        text: ""
    },
    {
        hour: "05:00",
        text: ""
    },
    {
        hour: "06:00",
        text: ""
    },
    {
        hour: "07:00",
        text: ""
    },
    {
        hour: "08:00",
        text: ""
    },
    {
        hour: "09:00",
        text: ""
    },
    {
        hour: "10:00",
        text: ""
    },
    {
        hour: "11:00",
        text: ""
    },
    {
        hour: "12:00",
        text: ""
    },
    {
        hour: "13:00",
        text: ""
    },
    {
        hour: "14:00",
        text: ""
    },
    {
        hour: "15:00",
        text: ""
    },
    {
        hour: "16:00",
        text: ""
    },
    {
        hour: "17:00",
        text: ""
    },
    {
        hour: "18:00",
        text: ""
    },
    {
        hour: "19:00",
        text: ""
    },
    {
        hour: "20:00",
        text: ""
    },
    {
        hour: "21:00",
        text: ""
    },
    {
        hour: "22:00",
        text: ""
    },
    {
        hour: "23:00",
        text: ""
    }
];

//var amPm = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"];


//placed call here because the array of objects had just been created
movingColors();

//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];



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
//console.log(todayPlanner);


//Click Event for Save Button
//local storage not working
function saveText(){
    saveButton.addEventListener("click", function(event){
        event.preventDefault();

        populateObjectWithText();   

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
function currentDay(){
var dateMoment = moment().format("LL");

var todaysDate = document.getElementById("currentDay");

todaysDate.innerHTML = dateMoment;
}

//use moment for color-changing

var hourMoment = moment();

var hourSubtract = hourMoment.subtract(1, "hours")

var hourAdd = hourMoment.add(1, "hours");



var startOfDayHour = moment().startOf("day").fromNow()
var endOfDayHour = moment().endOf("day").fromNow()

function movingColors(){

    //run through created array of objects to
    //trying to get the moment to check againt the hour in the array of objects
    
    //might work if can change the todayPlanner.hour to a moment

    //can i make it work?

    

    // m = moment().format("00").isBefore("23");
    // console.log(m);
    var m = moment()

    //if (m = moment()




    // for (var m = moment(firstMoment); m.isBefore(lastMoment); m.add(1, "hour")){
    //     console.log(m.format("HH:mm"));
    // }


    // for (var i = 0; i < todayPlanner.length; i++){

        
    //     if (todayPlanner[i].hour === hourSubtract){
    //         textareaE1.setAttribute("style", "background: grey")
    //     }
    //     else if (todayPlanner[i].hour === hourAdd){
    //         textareaE1.setattribute("style", "background: blue")
    //     }
    //     else if (todayPlanner[i].hour === hourMoment){
    //         textareaE1.setattribute("style", "background: yellow")
    //     } 
    
}
//movingColors();




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

