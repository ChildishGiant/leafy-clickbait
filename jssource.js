function changetext(a){
  var aids = $("#aids");
  $(aids).text(a);
}

$(document).ready(function() {
  changetext(gen());
});

var intensifiers = ["savage ","gay ","deprived ","desperate ","cringy ",
"disgusting ","nasty ","hot ","erotic ", "terrifiying ","angry ", "psychotic"]
var ists = ["nastiest ""cringiest ","hottest ","unhappyist ","scariest ",
"worst ","biggest ","best "]
var noun = ["minecraft animation ","gay ","man ","kid ","video ","woman ",
"girl ","manchild ","rapper ","frozen animation ", "pussy slayer ", "youtuber ",
"music video ","furry "]
var placeish = ["on the internet","on youtube","on earth",
"on the entire internet","to ever touch the internet","to ever be witnessed",
"to ever live in this world"]
var cherry = [" roasts me"," wants me"," drinks bleach"," ever",
" says he is going to kill me"," is in love with me"," (literally eats rocks)",
" (literally drills himself)"," exposes me"]
var fontfaces = ["'Ubuntu', sans-serif", "'Dancing Script', cursive"];

function randombool(){
  var randbool = Math.random()
  return randbool
}

function fontToggle(){
  $('.aids').css('font-family', fontfaces[0]);
  fontfaces.reverse();
}

function gen(){
  aids = "the ";
  if (randombool() > .5){
    aids = aids.concat("most ");
    aids = aids.concat(intensifiers[Math.floor(Math.random() * intensifiers.length)]);
  }
  else{
    aids = aids.concat(ists[Math.floor(Math.random() * ists.length)]);
  }

  aids = aids.concat(noun[Math.floor(Math.random() * noun.length)]);
  aids = aids.concat(placeish[Math.floor(Math.random() * placeish.length)]);

  if (Math.random() > 1/3){
    aids = aids.concat(cherry[Math.floor(Math.random() * cherry.length)]);
  }

  aids = aids.toUpperCase();
  return aids
}

function changetext(a){
  var aids = $("#aids")
  $(aids).text(a)
}
