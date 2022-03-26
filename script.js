var container = document.querySelector("#container")
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentday = document.querySelector("#currentDay")
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDay.innerText = new Date().toLocaleString("en-US", options)

for (var i = 0; i < hoursArray.length; i++) {
    var timeblock = document.createElement("div")
    timeblock.classList.add('row', 'time-block')
    timeblock.innerHTML = `<div class="col-md-1 hour">${hoursArray[i]}</div>
    <textarea class="col-md-10 description ${getTimeClass(hoursArray[i])}">${localStorage.getItem(hoursArray[i]) ? localStorage.getItem(hoursArray[i]) : ""
        }</textarea>
    <button class="saveBtn btn col-md-1" onclick="saveNote(this)" data-hour="${hoursArray[i]}">
      <i class="fas fa-save"></i>
    </button>`
    container.append(timeblock)
}

function getTimeClass(hour) {
    var currentHour = new Date().getHours()

    if (hour < currentHour) return 'past'
    else if (hour > currentHour) return 'future'
    else return 'present'
}

function saveNote(button) {
    var textToSave = (button.parentNode.children[1].value)
    console.log(button.dataset.hour)
    localStorage.setItem(button.dataset.hour, textToSave)
}