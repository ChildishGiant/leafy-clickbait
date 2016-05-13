function changetext(a){
  var answer = $("#answer");
  $(answer).text(a);
}

$(document).ready(function() {
  changetext(gen());
});

$(document).on("keypress", function (e) {
    // use e.which
    console.log(e.which)
    if (e.which == 32){
      changetext(gen());
    }
});

var intensifiers = ["savage ","gay ","deprived ","desperate ","cringy ",
"disgusting ","nasty ","hot ","erotic ", "terrifiying ","angry ", "psychotic ",
"miserable ","savage cringey ","offensive "];

var ists = ["nastiest ","cringiest ","hottest ","unhappyist ","scariest ",
"worst ","biggest ","best ","sexiest ","dirtiest ","maddest ","craziest ",
"saddest ","spookiest ","filthiest "];

var noun = ["minecraft animation ","gay ","man ","kid ","video ","woman ",
"girl ","manchild ","rapper ","frozen animation ", "pussy slayer ", "youtuber ",
"music video ","furry ","human being ","human ","animation ","girls ",
"cyber bully"];

var placeish = ["on the internet","on youtube","on earth","on planet earth",
"on the entire internet","to ever touch the internet","to ever be witnessed",
"to ever live in this world","ever to be created on the internet","to ever live"
];

var cherry = [" roasts me"," wants me"," drinks bleach"," ever",
" says he is going to kill me"," is in love with me"," (literally eats rocks)",
" (literally drills themself)"," exposes me"," ever to be made",
" (literally eats bricks)"," (literally breaks into military base)",
" (literally eats cat hair)"];

var fontfaces = ["'Ubuntu', sans-serif", "'Dancing Script', cursive"];

function randombool(){
  var randbool = Math.random()
  return randbool
}

function fontToggle(){
  $('.answer').css('font-family', fontfaces[0]);
  fontfaces.reverse();
}

function gen(){
  newTitle = "the ";
  if (randombool() > .5){
    newTitle = newTitle.concat("most ");
    newTitle = newTitle.concat(intensifiers[Math.floor(Math.random() * intensifiers.length)]);
  }
  else{
    newTitle = newTitle.concat(ists[Math.floor(Math.random() * ists.length)]);
  }

  newTitle = newTitle.concat(noun[Math.floor(Math.random() * noun.length)]);
  newTitle = newTitle.concat(placeish[Math.floor(Math.random() * placeish.length)]);

  if (Math.random() > 1/3){
    newTitle = newTitle.concat(cherry[Math.floor(Math.random() * cherry.length)]);
  }

  newTitle = newTitle.toUpperCase();
  return newTitle
}
