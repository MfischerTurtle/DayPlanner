// Arrat for hours
var hours = [
    "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"
]

// loop for save button event
for (var i = 9; i < 18; i++) {
    $("#hour-"+i).children("button").on("click", performSave)    
}

// loop for saved text 
for (var i = 9; i < 18; i++) {
    var savedNote = localStorage.getItem(hours[i-9])
    console.log(savedNote)
    $("#hour-"+i).children("textarea").val(savedNote)
}
// loop for time classes
for (var i = 9; i < 18; i++) {
    var currentHour = moment().format("H");

    if(currentHour == i) {
        $("#hour-"+i).children("textarea").addClass("present")
    }
    else if (currentHour > i) {
        $("#hour-"+i).children("textarea").addClass("past")
    }
    else if (currentHour < i) {
        $("#hour-"+i).children("textarea").addClass("future")
    }

}
// time of day
function setTime() {
    $('#currentDay').text(moment().format('dddd, MMMM Do,LTS'));
}
// saved text button
function performSave(event) {
    var targetTextArea = $(event.currentTarget).siblings("textarea");
    var noteToBeSaved = targetTextArea.val();

    var targetDiv = $(event.currentTarget).siblings("div")
    var key = targetDiv.text().trim();

    localStorage.setItem(key, noteToBeSaved)
}

setInterval(setTime,1000)