function changetext(a){
  var answer = $("#answer");
  $(answer).html(a);
}

$(document).ready(function() {
  changetext(gen(location.search));
});

function seedToUrl(seed) {
  location.search = seed;
  gen(text);
};


var intensifiers = ["savage","gay","deprived","desperate","cringy",
"disgusting","nasty","hot","erotic","terrifiying","angry","psychotic",
"miserable","savage cringey","offensive","insane","sexually desperate",
"offended","racist","crazed","annoying","motivational","upset","hardcore",
"racist"
];

var ists = ["nastiest","cringiest","hottest","unhappyist","scariest",
"worst","biggest","best","sexiest","dirtiest","maddest","craziest",
"saddest","spookiest","filthiest","angriest","strangest","fattest",
];

var noun = ["minecraft animation","gay","man","kid","video","woman",
"girl","manchild","rapper","frozen animation","pussy slayer","youtuber",
"music video","furry","human being","human","animation","girls",
"cyber bully","feminist","emo man","nazi girl","feminist chick",
"mental breakdown","youtube girl","vegan","diss track","speech","emo",
"racist squad","vegan girl","girl with dick","north korea","anime","song",
"mom","buzzfeed feminist","emo girl","little gay boy","16 year old girl",
"school shooter","bully","internet","safespace youtuber"
];

var placeish = ["on the internet","on youtube","on earth","on planet earth",
"on the entire internet","to ever touch the internet","to ever be witnessed",
"to ever live in this world","ever to be created on the internet","to ever live"
,"on all of youtube","to exist on youtube ever","on youtube to ever exist",
"of all time","ever","you'll ever witness on this website","ever to be made",
"on this entire website","in the history of the human race","you will ever see"
];

var cherry = ["roasts me","wants me","drinks bleach","ever",
"says they are going to kill me","is in love with me","(literally eats rocks)",
"(literally drills themself)","exposes me","(literally eats bricks)",
"(literally breaks into military base)","(literally eats cat hair)",
"says they are literally going to find and kill me",
"tries to have sex with a melon","rages at me","claims teletubbies did 9/11",
"takes a bath with me","strikes again","returns with fire",
"claims i raped them","says they will never shave themself","tries to be cute",
"tries to get some ass","verbally abuses science class itself",
"wants to literally fart in your face",
"makes a virus that makes your computer explode",
"(calls themself the tupac of youtube)","says all white people are racist",
"attempts to rap","starts a youtube plague","becomes female",
"(kid overdoses)","(the sluttiest girl on all of youtube)",
"literally dumps bucket of cum on head","(worst rap on all of youtube)",
"returns mad with fire","(literally smoking an egg & carrot)",
"tries to end it all by burning themself in an actual oven",
"is triggered by me","starts crying",
"(the cringiest kid ever gets very angry)","(buzzfeed must be stopped now)",
"says black people are cows","(the rise of the robots)",
"loses their own mind and now flirts with plants","makes diss track on me",
"makes fire diss track on everyone","(facecam)","(watching will cause death)",
"(roasts me and everyone that watches me)",
"gets sexually harassed then 0 - 10000 triggered","(man goes completely mental)",
"makes diss track roasting me again","(extreme rage)","is officially triggered",
"cries then rages because of emojis","has officially doomed the planet earth",
"gets 100% naked","paints fake bra/panties on then walks around in public",
"(man murdered by mental grandma)","makes diss track roasting me",
"(100 layers of cum girl slut/fat shamed then roasts me)",
"(listening will actually kill you)","(the death of youtube itself)",
"has become racist","roasts me and literally puts a demon curse on me",
"says all white men must die","enraged with more reasons to have sex with dogs",
"returns","returns to say \"i've stolen your girl, she's a bad hoe\"",
"wants me to go to jail for cyberbullying her",
"drops diss track saying they hate my youtube channel and christmas",
"kills themself",
"returns for sexual revenge","teaches you how to make a \"sex cup\"",
"(psychologically proven)",
"then starts living in a tree after weed drug battle","goes homeless",
"says that he wants to fist fight me",
"tells her best friend that she wants to have a threesome with her boyfriend",
"drops out of highschool cause shes \"the next jake paul of youtube\" on dr phil",
"breaksdown", "gets a second boob job", "must be stopped now",
"(not even clickbaiting)", "has a message for anyone who watches my videos"
];

// Returns a random element from an array
function random(passedArray){
  return passedArray[Math.floor(Math.random() * passedArray.length)]
}

function gen(seed){
  if (!seed || seed.length === 0){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    seedToUrl(text);
  }else{
    Math.seedrandom(seed);
  }


  newTitle = "the ";
  if (Math.random() > .5){
    newTitle += "most " + random(intensifiers) +" ";
  }
  else{
    newTitle += random(ists) + " ";
  }

  newTitle += random(noun) + " " + random(placeish)

  // 2/3 chance
  if (Math.random() > 1/3){
    newTitle += " " + random(cherry);
  }

  newTitle = newTitle.toUpperCase();

  return newTitle;
}
