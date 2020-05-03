
//grabs id of future switch
//grabs all textarea elements to create a nodelist, that is later used in a for loop to associate moment() with textarea

var hourSwitcher = document.querySelector("#customSwitch1");
var textareaE1 = document.querySelectorAll("textarea");


//Function for displaying current day in header of html is called at top of script so it loads first
currentDay();


//for loop that loops through localStorage object to retrieve user input that was saved in local Storage when the save button was clicked

/*Instead of calling on all 24 key:value pairs for each textarea, a # (refers to id located on textarea elements) and i (i=integer) and textarea class are concatenated. 
They represent the jQuery selector the localStorage is targeting to deposit stored input. "hour" and i are also concantenated 
to represent the key localStorage is refrencing in order to retrieve connected input*/
for (var i = 0; i < localStorage.length; i++){
    $("#" + [i] + ".description").val(localStorage.getItem("hour" + [i]));
}



//for a future feature, toggling between am/pm and 24hr time format
// var twentyFour = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];


/*jQuery selector, targeting class of saveBtn. This is a click event for saving inputted text in textarea element to localStorage */
$(".saveBtn").on("click", function(event){

    //prevents normal function of browser, so it won't refresh before input is stored in localStorage
    event.preventDefault();

    
    /*creates a variable to target the sibling of the button that has the class of saveBtn, 
    the sibling is textarea element with the class of description. It grabs the value of the textarea element*/
    var note = $(this).siblings(".description").val();

    /*creates variable to target id attribute of parent element to save button and text area element*/
    var idNote = $(this).parent().attr("id");
    
    //creates varaible to key for key:value pair in localStorage. 
    var hour = "hour" + idNote;

    
 //sets key of var hour, and var note (value) as a key:value pair to save to localStorage. The hour key is what is referred to in localStorage.getItem()
 localStorage.setItem(hour, note);

});


//initilize moment using LL format of date, LL element looks like this: May 2 2020
//grab id of div where date will appear
//print the moment, the current date parsed, onto webpage
function currentDay(){

var dateMoment = moment().format("LL");

var todaysDate = document.getElementById("currentDay");

todaysDate.innerHTML = dateMoment;
}


/*parse moment and set to a variable. hour() refers to the hours in a day*/

var currentHour = moment().hour();

/*function with a loop that loops through the nodelist of textareaE1, that is a variable that grabbed all textarea tags.
nodelist of textareaE1 is grabbing the ids of each textarea element, the ids are a series of strings, this must be parsed 
into an integer in order to compare against the moment()(which is an integer). If the integer id matches the current hour (moment())
then the textarea background color will change to a specific color, represeting the preset. If the integer id is greater then the 
current hour then it a different color, representing the future. Else the color will change to represent the past*/

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
//functino is called

