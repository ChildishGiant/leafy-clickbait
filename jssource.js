function changetext(a){
  var answer = $("#answer");
  $(answer).html(a);
}

$(document).ready(function() {
  changetext(gen());
});

$(document).keypress(function(e) {
  changetext(gen());
});

var intensifiers = ["savage ","gay ","deprived ","desperate ","cringy ",
"disgusting ","nasty ","hot ","erotic ", "terrifiying ","angry ", "psychotic ",
"miserable ","savage cringey ","offensive ","insane ","sexually desperate ",
"offended ","racist ","crazed ","annoying ","motivational ","upset ","hardcore "
];

var ists = ["nastiest ","cringiest ","hottest ","unhappyist ","scariest ",
"worst ","biggest ","best ","sexiest ","dirtiest ","maddest ","craziest ",
"saddest ","spookiest ","filthiest ","angriest ","strangest ","fattest ",
"angriest "
];

var noun = ["minecraft animation ","gay ","man ","kid ","video ","woman ",
"girl ","manchild ","rapper ","frozen animation ", "pussy slayer ", "youtuber ",
"music video ","furry ","human being ","human ","animation ","girls ",
"cyber bully ","feminist ","emo man ","nazi girl ","feminist chick ",
"mental breakdown ","youtube girl ","vegan ","diss track ","speech ","emo ",
"racist squad ","vegan girl "
];

var placeish = ["on the internet","on youtube","on earth","on planet earth",
"on the entire internet","to ever touch the internet","to ever be witnessed",
"to ever live in this world","ever to be created on the internet","to ever live"
,"on all of youtube","to exist on youtube ever","on youtube to ever exist",
"of all time","ever","you'll ever witness on this website","ever to be made",
"on this entire website"
];

var cherry = [" roasts me"," wants me"," drinks bleach"," ever",
" says they are going to kill me"," is in love with me"," (literally eats rocks)",
" (literally drills themself)"," exposes me"," (literally eats bricks)",
" (literally breaks into military base)"," (literally eats cat hair)",
" says they are literally going to find and kill me",
" tries to have sex with a melon"," rages at me"," claims teletubbies did 9/11",
" takes a bath with me"," strikes again"," returns with fire",
" claims i raped him"," says they will never shave themself"," tries to be cute",
" tries to get some ass"," verbally abuses science class itself",
" wants to literally fart in your face",
" makes a virus that makes your computer explode",
" (calls themself the tupac of youtube)"," says all white people are racist",
" attempts to rap"," starts a youtube plague"," becomes female",
" (kid overdoses)"," (the sluttiest girl on all of youtube)",
" literally dumps bucket of cum on head"," (worst rap on all of youtube)",
" returns mad with fire"," (literally smoking an egg & carrot)",
" tries to end it all by burning themself in an actual oven"," triggered by me",
" starts crying"," (the cringiest kid ever gets very angry)",
" (buzzfeed must be stopped now)"," says black people are cows",
" (the rise of the robots)"
];

var fontfaces = ["'Tiresias', sans-serif","'Lobster', cursive"];

function fontToggle(){
  $('.answer').css('font-family', fontfaces[0]);
  fontfaces.reverse();
}

function gen(){
  newTitle = "the ";
  if (Math.random() > .5){
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
  return newTitle;
}
