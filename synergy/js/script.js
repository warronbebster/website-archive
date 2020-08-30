

var companies = [
    "Uber",
    "Airbnb",
    "Tinder",
    "Dropbox",
    "Yelp",
    "Facebook",
    "Twitter",
    "Uber",
    "Instagram",
    "Myspace",
    "Bitcoin",
    "Couchsurfing",
    "Google",
    "LinkedIn",
    "Oculus",
    "WhatsApp",
    "Groupon",
    "Snapchat",
    "Youtube",
    "Skype",
    "Spotify",
    "Venmo",
    "Pinterest",
    "Upworthy",
    "Codeacademy",
    "Skillshare",
    "eBay",
    "Buzzfeed",
    "Maps",
    "Pixar",
    "Kickstarter",
    "Foursquare",
    "Match.com",
    "Pornhub",
    "Cloud",
    "WebMD",
    "Apple",
    "Analytics",
    "Reports",
    ];

var nouns = [
    "Button",
    "Note",
    "Cat",
    "Cloud",
    "Coffin",
    "Coin",
    "Tree",
    "Boat",
    "House",
    "Belt",
    "Pen",
    "Table",
    "Oven",
    "Wheel",
    "Bike",
    "Train",
    "Chair",
    "Paper",
    "Book",
    "Shop",
    "Beat",
    "Boat",
    "Trashcan",
    "Whale",
    "Beard",
    "Sponge",
    "Pickle",
    "Biscuit",
    "Tween",
    "Plumber",
    "Farmer",
    "Frat",
    "Armchair",
    "Sticker",
    "Desk",
    "Racecar",
    "Concert",
    "Sock",
    "Boot",
    "Lamp",
    "Convict",
    "Snack",
    "Towel",
    "Submarine",
    "Keg",
    "Map",
    "Face",
    "Bathtub",
    "Developer",
    "Interface",
    "Ameoba",
    "Particle",
    "Umbrella",
    "File",
    "Dentist",
    "Mason",
    "Squid",
    "Analytic",
    "Astronaut",
    "Printer",
    ];

var buzzwords = [
    "Synergy.",
    "Entrepreneurship.",
    "Critical making.",
    "Connectivity.",
    "Disruption.",
    "Hacking.",
    "Problem solving.",
    "Engineering.",
    "Development.",
    "Crowdfunding.",
    "Crowdsourcing.",
    "Cryptocurrency.",
    "Branding.",
    "Leverage.",
    "Paradigm.",
    "Making.",
    "Ephemeral.",
    "Viral.",
    "Investment.",
    "Sustainability.",
    "Strategic communication.",
    "Outside the box.",
    "Robust.",
    "Evolutionary.",
    "Pivot.",
    "Augmented reality.",
    "Community.",
    "Untapped Potential.",
    "Growth Markets",
    ];

var icons = [
    "a",
    "b",  
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    ];

var newName = nouns[Math.floor(0 + Math.random() * (nouns.length))];

var imagearray1 = [
    "images/edit01.jpg",
    "images/edit02.jpg",
    "images/edit03.jpg",
    "images/edit04.jpg",
    "images/edit05.jpg",
    "images/edit06.jpg",
    "images/edit08.jpg",
    "images/edit09.jpg",
    "images/edit11.jpg",
    "images/edit12.jpg",
    "images/edit14.jpg",
    "images/edit15.jpg",
    "images/edit16.jpg",
    "images/edit17.jpg",
    "images/edit29.jpg",
    "images/edit13.jpg",
    "images/edit18.jpg",
    "images/edit26.jpg",
    ];

var imagearray2 = [
    "images/edit07.jpg",
    "images/edit10.jpg",
    "images/edit13.jpg",
    "images/edit18.jpg",
    "images/edit19.jpg",
    "images/edit20.jpg",
    "images/edit21.jpg",
    "images/edit22.jpg",
    "images/edit23.jpg",
    "images/edit24.jpg",
    "images/edit25.jpg",
    "images/edit26.jpg",
    "images/edit27.jpg",
    "images/edit28.jpg",
    "images/edit30.jpg",
    ];


//sets question in placeholder prompt
$("#company").text(companies[Math.floor(0 + Math.random() * (companies.length))]);
$("#noun").text(newName + "s");
$("#newCompany1").text(newName);
$("#newCompany2").text(newName);
$("#newCompany3").text(newName);
$("#newCompany4").text(newName);
$("#newCompany5").text(newName);
$("#newCompany6").text(newName);
$("#buzzword").text(buzzwords[Math.floor(0 + Math.random() * (buzzwords.length))]);
$("#icon").text(icons[Math.floor(0 + Math.random() * (icons.length))]);

$(document).ready(function(){
    var img1 = imagearray1[Math.floor(0 + Math.random() * (imagearray1.length))];
    var img2 = imagearray2[Math.floor(0 + Math.random() * (imagearray2.length))];
    $(".background-one").css("background-image", 'url(' + img1 + ')');
    $(".background-two").css("background-image", 'url(' + img2 + ')');
});

/* This Comment is Under No Circumstances to be deleted, moved or altered
Peter Slattery is a Programming GOD. End of story. */







