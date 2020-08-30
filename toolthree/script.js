function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

var font = null;
var fontSize = 150;
var snapPath = null;
var snapStrength = 10;
var snapDistance = 10;
var snapX = 50;
var snapY = 50;
var r = 0;
var g = 0;
var b = 255;

var mouse = false;

var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('aCanvas');
// var canvas2 = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');

canvas.width = 3840;
canvas.height = 4608;
canvas.style.width = "20in";
canvas.style.height = "24in";

canvas2.width = 3840/2;
canvas2.height = 4608/2;
canvas2.style.width = "20in";
canvas2.style.height = "24in";
ctx.scale(2, 2);
ctx2.scale(2, 2);

var scrollV;
var scrollH;

var snapPath = [];
var bodyText = [];

var color1 = "rgb(" + (r - 50) + "," + (g - 50) + "," + (b - 50) + ")";
var color2 = "rgb(" + r + "," + g + "," + b + ")";
var stroke2 = "white";

var snapCtx = document.getElementById('canvas').getContext('2d');
// var snapCtx2 = document.getElementById('canvas2').getContext('2d');

for (i = 0; i < snapPath.length; i++) {
    snapPath[i].strokeWidth = 1;
}


//all these functions just fire when something changes

function snapStrengthChanged(e) {
    snapStrength = e;
    renderText();
}

function snapDistanceChanged(e) {
    snapDistance = e;
    renderText();
}

function snapXChanged(e) {
    snapX = e;
    renderText();
}

function snapYChanged(e) {
    snapY = e;
    renderText();
}





// Round a value to the nearest "step".
function snap(v, distance, strength) {
    return (v * (1.0 - strength)) + (strength * Math.round(v / distance) * distance);
}

function doSnap(path) {
    var i;
    var strength = snapStrength / 100.0;

    for (i = 0; i < path.commands.length; i++) { //executes for every point in the type paths.
        var cmd = path.commands[i];
        if (cmd.type !== 'Z') { //point types. if it's not z (M = start? Z = end? L = point? Q/C = handles? )
            //these change the x/y of each point. – at the end is the grid adjustment
            cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
            cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
        }
        if (cmd.type === 'Q' || cmd.type === 'C') {
            cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
            cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
        }
        if (cmd.type === 'C') {
            cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
            cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
        }
    }
}

function bodySnap(path) {
    var i;
    var strength = snapStrength / 500.0;

    for (i = 0; i < path.commands.length; i++) { //executes for every point in the type paths.
        var cmd = path.commands[i];
        if (cmd.type !== 'Z') { //point types. if it's not z (M = start? Z = end? L = point? Q/C = handles? )
            //these change the x/y of each point. – at the end is the grid adjustment
            cmd.x = snap(cmd.x + snapX, snapDistance/2, strength) - snapX;
            cmd.y = snap(cmd.y + snapY, snapDistance/2, strength) - snapY;
        }
        if (cmd.type === 'Q' || cmd.type === 'C') {
            cmd.x1 = snap(cmd.x1 + snapX, snapDistance/2, strength) - snapX;
            cmd.y1 = snap(cmd.y1 + snapY, snapDistance/2, strength) - snapY;
        }
        if (cmd.type === 'C') {
            cmd.x2 = snap(cmd.x2 + snapX, snapDistance/2, strength) - snapX;
            cmd.y2 = snap(cmd.y2 + snapY, snapDistance/2, strength) - snapY;
        }
    }
}





function renderText() { //this is what actually draws the text
    if (!font) return;

    snapPath[0] = font.getPath('tool()', 100, 400, 400); //this gets the font info? is a path w/all points.
    snapPath[1] = font.getPath('"Place":', 40, 600, 150); //this gets the font info?
    snapPath[2] = font.getPath('Applications/Implications', 100, 760, 150); //this gets the font info?
    snapPath[3] = font.getPath("Panel Discussion, 4/15, 6:30, BEB 106", 100, 920, 80); //this gets the font info?
    snapPath[4] = font.getPath("Moderated by Shawn Greenlee (Foundation)", 100, 1020, 80); //this gets the font info?
    snapPath[5] = font.getPath("Jer Thorp (The Office for Creative Research)", 100, 1120, 80); //this gets the font info?
    snapPath[6] = font.getPath("Paula Gaetano-Adi (Foundation)", 100, 1220, 80);
    snapPath[7] = font.getPath("Brian House (brianhouse.net)", 100, 1320, 80);
    snapPath[8] = font.getPath("Daniel Peltz (FAV)", 100, 1420, 80);
    snapPath[9] = font.getPath("Lynnette Widder (Columbia University)", 100, 1520, 80);
    snapPath[10] = font.getPath("Kyle Steinfeld (UC Berkeley)", 100, 1620, 80);
    snapPath[11] = font.getPath("Lecture, 4/16 6:30, Jer Thorp", 100, 1720, 80);

    bodyText[0] = font.getPath("Place is perhaps the oldest contextual material available to", 100, 1820, 20);
    bodyText[1] = font.getPath("artists and designers. In addition to drawing from local context", 100, 1850, 20);
    bodyText[2] = font.getPath("for inspiration in the process of creation, the production of", 100, 1880, 20);
    bodyText[3] = font.getPath("work varies widely based on tools and techniques hewn by", 100, 1910, 20);
    bodyText[4] = font.getPath("regional climate, culture and infrastructure. The offshoring of", 100, 1940, 20);
    bodyText[5] = font.getPath("traditional manufacturing has threatened this spiritual", 100, 1970, 20);
    bodyText[6] = font.getPath("connection between place and craft, as many trained designers", 100, 2000, 20);
    bodyText[7] = font.getPath("no longer have direct access to the means of production. The", 100, 2030, 20);
    bodyText[8] = font.getPath("advent of advanced manufacturing, the ubiquity of DIY", 100, 2060, 20);
    bodyText[9] = font.getPath("fabrication tools and the diffusion of digital media further", 100, 2090, 20);
    bodyText[10] = font.getPath("challenge the landscape. Using this common thread of Place,", 100, 2120, 20);
    bodyText[11] = font.getPath("faculty will present work ranging from the preservation of ", 100, 2150, 20);
    bodyText[12] = font.getPath("traditional local tools and techniques to new modes of artistic", 100, 2180, 20);
    bodyText[13] = font.getPath("and design production using locational data and techniques", 100, 2210, 20);
    bodyText[14] = font.getPath("such as crowdsourcing and sensing.", 100, 2240, 20);
    bodyText[15] = font.getPath("risdtool.org", 100, 80, 20);


    for (i = 0; i < snapPath.length; i++) {
        snapPath[i].fill = color2;
        snapPath[i].stroke = stroke2;
        doSnap(snapPath[i]);
        snapPath[i].draw(snapCtx);
    }
    ctx.clearRect(50,1790,1000,500);
    ctx.clearRect(55,15,200,100);
    for (i = 0; i < bodyText.length; i++) {
        bodyText[i].fill = color1;

        bodySnap(bodyText[i]);
        bodyText[i].draw(snapCtx);
    }


    if (b > 0 && g == 0) {
        if (b >= 255) {
            r = r + 5;
        }
        if (r >= 255) {
            b = b - 5;
        }
    }

    if (r > 0) {
        if (r >= 255 && b == 0) {
            g = g + 5;
        }
        if (g >= 255) {
            r = r - 5;
        }
    }

    if (g > 0) {
        if (g >= 255 && r == 0) {
            b = b + 5;
        }
        if (b >= 255) {
            g = g - 5;
        }
    }

    if (r >= 255) {
        r = 255;
    }
    if (g >= 255) {
        g = 255;
    }
    if (b >= 255) {
        b = 255;
    }

    color2 = "rgb(" + r + "," + g + "," + b + ")";
    color1 = "rgb(" + (r - 50) + "," + (g - 50) + "," + (b - 50) + ")";
}






function onFontLoaded(font) { //when font is loaded, which is basically when page loads
    var i, x, y, fontSize;
    window.font = font;

    amount = Math.min(100, font.glyphs.length);
    x = 50;
    y = 120;

    //wow! if you load the font info here, you can adjust it over time, instead of each frame. results in a constant degradation

    // snapPath[0] = font.getPath('tool()', 100, 400, 400); //this gets the font info? is a path w/all points.
    // snapPath[1] = font.getPath('"Place":', 40, 600, 150); //this gets the font info?
    // snapPath[2] = font.getPath('Applications/Implications', 100, 760, 150); //this gets the font info?
    // snapPath[3] = font.getPath("Panel Discussion 4/15 6:30", 100, 920, 80); //this gets the font info?
    // snapPath[4] = font.getPath("Moderated by Shawn Greenlee (Foundation)", 100, 1020, 80); //this gets the font info?
    // snapPath[5] = font.getPath("Jer Thorp (The Office for Creative Research)", 100, 1120, 80); //this gets the font info?
    // snapPath[6] = font.getPath("Paula Gaetano-Adi (Foundation)", 100, 1220, 80);
    // snapPath[7] = font.getPath("Brian House (brianhouse.net)", 100, 1320, 80);
    // snapPath[8] = font.getPath("Daniel Peltz (FAV)", 100, 1420, 80);
    // snapPath[9] = font.getPath("Lynnette Widder (Columbia University)", 100, 1520, 80);
    // snapPath[10] = font.getPath("Kyle Steinfeld (UC Berkeley)", 100, 1620, 80);
    // snapPath[11] = font.getPath("Lecture, 4/16 6:30, Jer Thorp", 100, 1720, 80);

    renderText(); //this is where render is called, onFontLoaded is called at bottom
}


//below stuff is actually happening

opentype.load('fonts/Lyon Text-Regular No. 2.otf', function(err, font) {
    var amount, glyph, ctx, x, y, fontSize;
    if (err) {
        return;
    }
    onFontLoaded(font);
});


//below are listners/stuff

$(document).mousemove(function(e) { //on mouse move
    x = e.pageX;
    y = e.pageY;
    snapDistanceChanged(x / 20);
    snapStrengthChanged(y / 25);

    canvas2.style.backgroundColor="rgb(" + (255 - r) + "," + (255 - g) + "," + (255 - b) + ")";;

    if (mouse) {
        color2 = "white";
        color1 = "black";
        renderText();
    }
});

$(window).scroll(function() { //on scroll
    scrollV = $(window).scrollTop();
    scrollH = $(window).scrollLeft();
    // snapStrengthChanged(scrollV+scrollH+10);
    snapYChanged(scrollV);
    snapXChanged(scrollH * 1.5);

});

$(document).mousedown(function() {
    mouse = true;
    color1 = "black";
    color2 = "black";
    stroke2 = "white";
    renderText();
});

$(document).mouseup(function() {
    mouse = false;
    color1 = "red";
    stroke2 = "white";
});
