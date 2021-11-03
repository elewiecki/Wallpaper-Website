let games = [
    "images/Doom.jpg",
    "images/Sekiro.jpg",
    "images/TheLastOfUs.jpg",
    "images/TheLastOfUs2.jpg",
    "images/Bloodborne.jpg",
    "images/DemonSouls.jpg",
];

let movies = [
    "images/StarWars.png",
    "images/Avengers.jpg",
    "images/BackToTheFuture.jpg"
];

let nature = [
    "images/Waterfall.jpeg",
    "images/Stars.jpg",
    "images/Forest.jpg"
];

let themeArr = [games, movies, nature];
let themes = ["games", "movies", "nature"];

var nextBtn = document.getElementById("next");
var centerImg = document.getElementById("center");
var leftImg = document.getElementById("left");
var rightImg = document.getElementById("right");

var themeButtons = createButtons(themes);

function createButtons(buttons) {
    var button;
    var butts = [];
    for (let i = 0; i < buttons.length; ++i) {
        button = document.createElement("button");
        button.id = buttons[i];
        button.innerText = buttons[i];
        document.getElementById("themes").appendChild(button);
        butts.push(button);
        button.addEventListener("click", function() {
            if (curTheme != themeArr[i]) {
                clicked(themeButtons[i]);
                changeCurPics(themeArr[i]);
                curThemeIndex = i;
            }
        });
    }
    butts[0].style.backgroundColor = "#2e1263";
    butts[0].style.color = "#F69680";
    return butts;
}

let curTheme = games;
centerImg.src = curTheme[0];
let numPics = curTheme.length;
let counter = 0;
let first = true;
let curThemeIndex = 0;


function changeCurPics(a) {
    (curTheme === a) ? curTheme: curTheme = a;
    counter = 0;
    numPics = curTheme.length;
    rotatePic();
}

nextBtn.addEventListener("click", function() {
    rotatePic();
});

function clicked(button) {
    button.style.backgroundColor = "#2e1263";
    button.style.color = "#F69680";
    themeButtons[curThemeIndex].style.backgroundColor = "#F69680";
    themeButtons[curThemeIndex].style.color = "#2e1263";
}

function rotatePic() {
    if (counter >= numPics) counter = 0;
    leftImg.src = (counter === 0) ? curTheme[curTheme.length - 1] : curTheme[counter - 1];
    centerImg.src = curTheme[counter];
    rightImg.src = (counter === numPics - 1) ? curTheme[0] : curTheme[counter + 1];
    counter++;
}