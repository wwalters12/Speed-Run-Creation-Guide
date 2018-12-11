// Gets user input to define the title of the guide, saves the results to resultTitle, and then removes the guideButton and guideName elements
var resultTitle = null;
var guideNameBoolean = false;
function getGuideTitle() {
    var guideName = document.getElementById("nameOfGuide");
    if (guideName.value == "") {
        trueBtn.style.display = "none";
        falseBtn.style.display = "none";
        body.textContent = "A name for the guide is required";
        openPopUp();
    } else {
        guideNameBoolean = true;
        resultTitle = document.getElementById("resultName");
        var guideButton = document.getElementById("buttonName");
        resultTitle.textContent = guideName.value;
        guideName = document.getElementById("nameOfGuide");
        guideButton.setAttribute("style", "display: none");
        guideName.setAttribute("style", "display: none");
    }
}

// Gets user input to define the name of the section, saves the results to resultName, and then removes the sectionButton and sectionName elements
var resultName = null;
var nameCounter = 0;
function getSectionName() {
    var sectionName = document.getElementsByClassName("nameOfSection")[x].value;
    resultName = document.getElementsByClassName("resultSection")[x];
    var sectionButton =  document.getElementsByClassName("buttonSection")[x];
    resultName.textContent = sectionName;
    sectionName = document.getElementsByClassName("nameOfSection")[x];
    sectionButton.setAttribute("style", "display: none");
    sectionName.setAttribute("style", "display: none");
    nameCounter += 1;
}

// declares btnColumnCounter. Displays a certain column depending on the value
var btnColumnCounter = 0;
var columnCounter = 0;
function addColumnDisplay() {
    var Column1 = document.getElementsByClassName("columns1");
    var Column2 = document.getElementsByClassName("columns2");
    var Column3 = document.getElementsByClassName("columns3");
    if (btnColumnCounter == 0) {
        Column1[x].setAttribute("style", "display: flex;");
        btnColumnCounter += 1;
        columnCounter += 1;
        scrollToBottom();
    } else if (btnColumnCounter == 1) {
        Column2[x].setAttribute("style", "display: flex;");
        btnColumnCounter += 1;
    } else if (btnColumnCounter == 2) {
        Column3[x].setAttribute("style", "display: flex;");
        btnColumnCounter += 1;
    } else {
    }
}

// Hides the last column displayed by the addColumnDisplay function
function removeColumnDisplay() {
    var Column1 = document.getElementsByClassName("columns1");
    var Column2 = document.getElementsByClassName("columns2");
    var Column3 = document.getElementsByClassName("columns3");
    if (btnColumnCounter == 1) {
        Column1[x].setAttribute("style", "display: none;");
        btnColumnCounter -= 1;
        columnCounter -= 1;
    } else if (btnColumnCounter == 2) {
        Column2[x].setAttribute("style", "display: none;");
        btnColumnCounter -= 1;
    } else if (btnColumnCounter == 3) {
        Column3[x].setAttribute("style", "display: none;");
        btnColumnCounter -= 1;
    } else {
    }
}

// Clones the guideHolder div and all of its children
var cloneDiv = null;
var x = 0; // Counter variable to handle NodeList arrays from .getElementsByClassName
var y = 0; // Counter variable for after guide is finished
function cloneGuide() {
    var getDiv = document.getElementsByClassName("guideHolder")[0];
    cloneDiv = getDiv.cloneNode(true);
}

// Appends cloneDiv to the document if the section has been named and there is at least one column
function appendGuide() {
    if (nameCounter == 1 && columnCounter == 1) {
        trueBtn.style.display = "inline";
        falseBtn.style.display = "inline";
        body.textContent = "You can't edit this section after adding another. Are you sure you want to advance?";
        openPopUp();
        appendChoice();
    } else {
        trueBtn.style.display = "none";
        falseBtn.style.display = "none";
        body.textContent = "You need to name the section and add at least one column before you add another section";
        openPopUp();
    }
}

// Checks if the user has pressed yes or no on the popup. It repates the functon ever 100 milliseconds until the user makes a choice
function appendChoice() {
    if (sectionBoolean == true) {
        hideButtons();
        inputIntoText();
        closePopUp();
        sectionBoolean = null;
        document.body.appendChild(cloneDiv.cloneNode(true)); // Copy contents of CloneDiv (They are
        x += 1;                                              // lost after appending)
        setTimeout(scrollToBottom, 700);
    } else if (sectionBoolean == false) {
        closePopUp();
        sectionBoolean = null;
    } else {
        setTimeout(appendChoice, 100);
    }
}

// hides the Add Column, Delete Column, and Add Section buttons
function hideButtons() {
    var getButtons = document.getElementsByClassName("columnButtons")[x];
    getButtons.setAttribute("style", "display: none");
    btnColumnCounter = 0;
    columnCounter = 0;
    nameCounter = 0;
}

// scrolls to the bottom of the document. Called when a column or section is added
function scrollToBottom() {
    window.scrollTo(0,document.body.scrollHeight);
}

function scrollToTop() {
    window.scrollTo(document.body.scrollHeight, 0);
}
// Appends the content of each textarea in a section to a <p> element. Displays the
// <p> element while hiding the text area. If a text area is blank it hides both the text area and the <p> elemenet
var inputCounter = 0;
function inputIntoText() {
    var textAreas = document.getElementsByClassName("columnInput");
    var inputAreas = document.getElementsByClassName("txtGuide");
    for (i = 0; i < inputAreas.length; i++){
        textAreas[i].textContent = inputAreas[i].value;
        if (inputAreas[i].value == "") {
            textAreas[i].setAttribute("style", "display: none");
            inputAreas[i].setAttribute("style", "display: none");
        } else {
            textAreas[i].setAttribute("style", "display: inline");
            inputAreas[i].setAttribute("style", "display: none");
        }
    }
    inputCounter = document.getElementsByClassName("txtGuide").length;
}

// Timer that is used in the upper right corner of the window
var totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds /3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

// when called starts the timer
function startTimer() {
    finishBoolean = true;
    var startButton = document.getElementById("buttonStart");
    startButton.style.display = "none";
    var timeStart = setInterval(countTimer, 1000);
}

// Code for the popup
var popup = document.getElementById("popupBox");
var body = document.getElementById("bodyContent");
var trueBtn = document.getElementById("booleanYes");
var falseBtn = document.getElementById("booleanNo");
var sectionBoolean = null;
function trueBtnClick() {
    sectionBoolean = true;
}
function falseBtnClick() {
    sectionBoolean = false;
}
function openPopUp() {
    popup.style.display = "block";
}
function closePopUp() {
    popup.style.display = "none";
}

// Checks if the user has pressed yes or no on the popup. It repates the functon ever 100 milliseconds until the user makes a choice
var finishBoolean = false;
function finishChoice() {
    if (sectionBoolean == true) {
        hideButtons();
        inputIntoText();
        closePopUp();
        endCleanUp();
        finishBoolean = true;
        setTimeout(scrollToTop, 700);
    } else if (sectionBoolean == false) {
        closePopUp();
        sectionBoolean = null;
    } else {
        setTimeout(finishChoice, 100);
    }
}

function finishGuide() {
    if (guideNameBoolean == true) {
        trueBtn.style.display = "inline";
        falseBtn.style.display = "inline";
        body.textContent = "Are you sure you want to finish the guide? This will be permanent";
        openPopUp();
        finishChoice()
    } else {
        trueBtn.style.display = "none";
        falseBtn.style.display = "none";
        body.textContent = "You need to name the guide before finishing";
        openPopUp();
    }
}

function endCleanUp() {
    var sectionInput = document.getElementsByClassName("nameOfSection")[x];
    var sectionButton = document.getElementsByClassName("buttonSection")[x];
    var finishButton = document.getElementById("buttonFinish");
    var startButton = document.getElementById("buttonStart");
    finishButton.style.display = "none";
    sectionButton.style.display = "none";
    sectionInput.style.display = "none";
    startButton.style.display = "inline";
}

var pointCounter = 0;
function scrollToPoint() {
    var scrollPoint = document.getElementsByClassName("scrollPoint")[pointCounter];
    scrollPoint.scrollIntoView();
    pointCounter += 1
}

function keyPress(a) {
    if (finishBoolean == true) {
        if (a.keyCode == 65) {
            appendTime();
            scrollToPoint();
        }
    }
}

function appendTime() {
    var doneTime = document.getElementById("timer").innerHTML;
    var timeStamp = document.getElementsByClassName("timeStamp")[y];
    timeStamp.textContent = doneTime;
    timeStamp.style.display = "block";
    y += 1;
}
