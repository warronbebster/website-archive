var startingString = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-=!@#$%^&*()_+~`,./;:[]{}<>?"
var inFont, outFont;
var holdFont = [];
var cipher = {};
var isChrome = !!window.chrome && !!window.chrome.webstore; //for checking chrome
var keyRight = "SsNnVvFfRrGgHhJjKkLlAaLlZzMmPpQqWwTtDdYyIiBbEeCcUuXx2345678901-=!@#$%^&*()_+~`,./;:[]{}<>?";
var scream = "AaAaAaAaEeEeEeEeIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi1234567890-=!@#$%^&*()_+~`,./;:[]{}<>?";
var reverseAlph = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-=!@#$%^&*()_+~`,./;:[]{}<>?";
var reverseAlph = "ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa1234567890-=!@#$%^&*()_+~`,./;:[]{}<>?";
var quickFox = {
    A: 'THE',
    a: 'the',
    B: 'QUICK',
    b: 'quick',
    C: 'BROWN',
    c: 'brown',
    D: 'FOX',
    d: 'fox',
    E: 'JUMPS',
    e: 'jumps',
    F: 'OVER',
    f: 'over',
    G: 'THE',
    g: 'the',
    H: 'LAZY',
    h: 'lazy',
    I: 'DOG',
    i: 'dog'
}

//here is where normal JS happens

//this makes the cipher object 
for (var i = 0; i < startingString.length; i++) { //for each letter in the starting string
    cipher[startingString[i]] = [startingString[i], i];
    //make a string key for the digital, and an array value for the visual
}
createDivsInterface();
updateOutput();

$('.visual').bind('keyup', function(event) { //keydown or keyup very different
    // this.innerHTML = ''; //empty element
    var keyCode = event.which || event.keyCode;
    var myDigital = this.previousSibling.innerHTML;
    var newVisual = this.value;
    updateCipher(myDigital, newVisual);
    if (keyCode == 38) { //if up key
        console.log('up!');
        $(this).parent().prev().children('.visual').focus();
        //focus on previous .visual element
    } else if (keyCode == 40) { //if down key
        $(this).parent().next().children('.visual').focus();
        //focus on next .visual element
    }
});

//menu buttons
$('#input-text').bind('keyup', function(event) { //keydown or keyup very different
    updateOutput();
});


$('#update').click(function() { //don't need this for final
    update2();
});

$('#about #exit').click(function() {
    $('.aboutItem').toggleClass('aboutToggle');
});

$('#exit').hover(function() {
    $('.aboutItem').toggleClass('aboutHover');
});

$('#about').click(function() {
    $('.aboutItem').toggleClass('aboutToggle');
});

$('#reset').click(function() {
    reset(startingString);
});

$('#downOne').click(function() {
    oneDown();
});

$('#upOne').click(function() {
    oneUp();
});

$('#download').on('click', function() {
    update2();
    outFont.download();
});

$("#upload").click(function() {
    $("#file").click();
});

$("#keyRight").click(function() {
    preset(keyRight);
});

$("#reverseAlph").click(function() {
    preset(reverseAlph);
});

$("#quickFox").click(function() {
    preset(quickFox);
});

$("#scream").click(function() {
    preset(scream);
});





$("#random").click(function() {
    var sortable = [];

    $.each(cipher, function(key, value) {
        sortable.push([key, cipher[key][1]]);
    });

    sortable = shuffle(sortable);

    // console.log(sortable);

    for (var i = 0; i < sortable.length; i++) {
        updateCipher(sortable[i][0], cipher[sortable[i + 1][0]][0]); // use digital and next visual
    }
    updateCipher(sortable[sortable.length - 1][0], cipher[sortable[0][0]][0]); //last one goes back to beginning
    updateOutput();
    updateInterface();
});

//this is the typing javascript
$("#input-text").typed({
    stringsElement: $('#typed-strings'),
    typeSpeed: 0,
    backDelay: 2500,
    backSpeed: -50,
    startDelay: 1000,
    onStringTyped: function() {
        // console.log('typed!');
        updateOutput();
    },
});

$("#hoverText2").hover(function() {
    $(this).toggleClass("hoverText2");
});

$("#hoverText3").hover(function() {
    $(this).toggleClass("hoverText3");
});







// $('.visual').click(function() {
//         this.innerHTML = ''; //empty element
//         var keyCode = event.which || event.keyCode;
//         var myDigital = this.previousSibling.innerHTML;
//         // var elementIndex = $(this).index(); //number that this is
//         var newVisual = String.fromCharCode(keyCode);
//         // holdFont[elementIndex].new = keyCode; //assign this unicode to the new pairing
//         // console.log(elementIndex, keyCode);
//         //update outfont & drawings
//         // update(outFont, elementIndex, keyCode);
//         updateCipher(myDigital,newVisual);
// });


//on first font load
opentype.load('fonts/RepMo.otf', function(err, font) { //this is where the font is loaded
    if (err) { //if something tries to use the font before it's loaded
        console.log(err);
    }
    inFont = font; //set global var infont to the font just loaded
    outFont = font; //sets outfont to the same pattern;

    for (prop in inFont.glyphs.glyphs) { //for each glyph in the font
        var holdMe = new Object(); //make new holder object
        holdMe.path = inFont.glyphs.glyphs[prop].path;
        holdMe.unicode = inFont.glyphs.glyphs[prop]['unicode'];
        holdMe.name = inFont.glyphs.glyphs[prop]['name'];
        holdMe.advanceWidth = inFont.glyphs.glyphs[prop]['advanceWidth'];
        holdMe.leftSideBearing = inFont.glyphs.glyphs[prop]['leftSideBearing'];
        holdMe.character = String.fromCharCode(inFont.glyphs.glyphs[prop]['unicode']);
        holdFont.new = [inFont.glyphs.glyphs[prop]['unicode']];
        holdFont[inFont.glyphs.glyphs[prop].index] = holdMe;
    }

    // document.getElementById('glyphs').innerHTML = ''; //comment this out for drawing glyphs
    // for (var i = 0; i < outFont.glyphs.length; i++) { //for every glyph in the font, draw a canvas
    //     var glyph = outFont.glyphs.get(i);
    //     var ctx = createGlyphCanvas(glyph, 100);
    //     glyph.draw(ctx, 30, 60, 50);
    // }

});


// function createGlyphCanvas(glyph, size) { //comment this out for drawing glyphs
//     var canvasId, html, glyphsDiv, wrap, canvas, ctx;
//     canvasId = 'c' + glyph.index;
//     html = '<div class="wrapper" style="width:' + size + 'px"><canvas id="' + canvasId + '" width="' + size + '" height="' + size + '"></canvas><span>' + glyph.index + '</span><span>' + glyph.name + '</span><span>U ' + glyph.unicode + '</span></div>';
//     glyphsDiv = document.getElementById('glyphs');
//     wrap = document.createElement('div');
//     wrap.innerHTML = html;
//     glyphsDiv.appendChild(wrap);
//     canvas = document.getElementById(canvasId);
//     ctx = canvas.getContext('2d');
//     return ctx;
// }

function update2() {

    $.each(cipher, function(key, value) { //go through each thing in cipher
        var unicodeDigital = key.charCodeAt(0);
        var digitalIndex; //make a variable for which glyph to update

        for (i = 0; i < holdFont.length; i++) { //check for if it's in Holdfont
            // console.log(inFont.glyphs.glyphs[prop].path);
            if (holdFont[i].unicode == unicodeDigital) { //if it matches the 
                digitalIndex = i;
            }
        }
        var unicodeVisual;
        var visualIndex;

        if (cipher[key][0].length == 1) { //if there's only one letter in the visual array


            unicodeVisual = cipher[key][0].charCodeAt(0);
            // console.log(unicodeVisual);
            visualIndex; //make a variable for which glyph to get the visual path from

            //figure out which path to do
            for (i = 0; i < holdFont.length; i++) { //check for if it's in Holdfont
                if (holdFont[i].unicode == unicodeVisual) { //if it matches the 
                    visualIndex = i;
                }
            }

            outFont.glyphs.glyphs[digitalIndex].path = holdFont[visualIndex].path; //this needs to be changed
            outFont.glyphs.glyphs[digitalIndex].advanceWidth = holdFont[visualIndex].advanceWidth;
            outFont.glyphs.glyphs[digitalIndex].leftSideBearing = holdFont[visualIndex].leftSideBearing;
        } else { //if there's more than one letter in the visual array
            console.log('theres more!');

            unicodeVisual = []; //make an array for the unicode values
            visualIndex = []; //make an array for all the glyphs to get paths from

            //this for loop fills unicodeVisual with the unicode values
            for (var j = 0; j < cipher[key][0].length; j++) { //loop through all letters in the visual array
                unicodeVisual[j] = cipher[key][0][j].charCodeAt(0); //add the unicode value to the array to check against
            }

            //this for loop finds where the unicodes are in the font file
            for (var u = 0; u < unicodeVisual.length; u++) { //finds the match in holdfont
                for (i = 0; i < holdFont.length; i++) { //check for if it's in Holdfont
                    if (holdFont[i].unicode == unicodeVisual[u]) { //if it matches the unicode
                        visualIndex[u] = i;
                    }
                }
            }

            console.log(holdFont[visualIndex[1]].path.commands);
            console.log(unicodeVisual);
            console.log(visualIndex);

            //start glyph with first thing
            outFont.glyphs.glyphs[digitalIndex].path = holdFont[visualIndex[0]].path; //this needs to be changed

            outFont.glyphs.glyphs[digitalIndex].leftSideBearing = holdFont[visualIndex[0]].leftSideBearing;

            var currentWidth = holdFont[visualIndex[0]].advanceWidth;

            for (var g = 1; g < visualIndex.length; g++) { //for every obect in the visual index
                console.log(g);
                // var oldCommands = holdFont[visualIndex[g]].path.commands; //get commands of visual path
                // var oldCommands = $.extend( true, {}, holdFont[visualIndex[g]].path.commands );
                var newCommands = holdFont[visualIndex[g]].path.commands;
                var oldCommands = [];
                for (var c = 0; c < newCommands.length; c++) {
                    oldCommands[c] = $.extend(true, {}, newCommands[c]);
                }
                console.log(oldCommands);
                var newAdvanceWidth = holdFont[visualIndex[g]].advanceWidth; //get advancewidth of visual glyph
                console.log(newAdvanceWidth);

                for (var c = 0; c < oldCommands.length; c++) {

                    oldCommands[c].x += currentWidth;
                    if ('x1' in oldCommands[c]) {
                        oldCommands[c]['x1'] += currentWidth;
                    }
                    if ('x2' in oldCommands[c]) {
                        oldCommands[c]['x2'] += currentWidth;
                    }
                }
                console.log(oldCommands);

                var commandUpdate = outFont.glyphs.glyphs[digitalIndex].path.commands;

                commandUpdate.push.apply(outFont.glyphs.glyphs[digitalIndex].path.commands, oldCommands); //+= oldCommands; //this needs to be changed
                console.log(outFont.glyphs.glyphs[digitalIndex].path.commands);

                currentWidth += newAdvanceWidth; //adds width of current character to totalwidth
            }
            outFont.glyphs.glyphs[digitalIndex].advanceWidth = currentWidth; //set total width of character to total width
            // console.log(outFont.glyphs.glyphs[digitalIndex]);
            //here is where I need to combine the glyphs
        }


        // var glyph = outFont.glyphs.glyphs[digitalIndex]; //comment this out for drawing glyphs
        // var canvasToUpdate = document.getElementById('c' + digitalIndex);
        // ctx = canvasToUpdate.getContext('2d');
        // ctx.clearRect(0, 0, 500, 500);
        // glyph.draw(ctx, 30, 60, 50);

    });
if (outFont.names.fontFamily.en){
   outFont.names.fontFamily.en = 'cipherFont'; 
}
    outFont.names.fontFamily.en = 'cipherFont';
    outFont.names.fullName.en = 'cipherFont';
    outFont.names.preferredFamily.en = 'cipherFont';
    outFont.names.postScriptName.en = 'cipherFont';
    outFont.names.version.en = 'Version 001';
    console.log(outFont.names);
    // console.log(outFont.glyphs);
}


function createDivsInterface() {
    interface = document.getElementById('cipher');
    for (var i = 0; i < startingString.length; i++) { //for each letter in the starting string
        var div = document.createElement('div'); //make a div
        div.innerHTML = '<img class="svg arrow" src="svg/arrow.svg"/><div class="digital left">' + startingString[i] + '</div><textarea maxlength="10" class="visual left">' + startingString[i] + '</textarea>'
            // div.id = holdFont[i].name;
        div.className = 'pair'; //class is pair
        interface.appendChild(div);
    }
}

function updateCipher(digital, visual) { //function to update one key in the cipher
    cipher[digital][0] = visual;
    //other functionality here to update other stuff
    updateOutput();
    console.log(cipher);
}

function updateInterface() { //update the letters interface based on the cipher
    $.each(cipher, function(key, value) { //go through each thing in cipher
        $(".visual").eq(cipher[key][1]).val(cipher[key][0]);
    });
}

function updateOutput() {
    var inputText = $('#input-text').val();
    var outputText = [];
    // console.log(inputText);
    for (var t = 0; t < inputText.length; t++) { //for every letter in the input box
        var check = inputText.charAt(t);
        if (check in cipher) { //if the character being checked is in the cipher
            // console.log('found!');
            outputText[t] = cipher[check][0];
            // console.log(cipher[check][0]);
        } else {
            outputText[t] = inputText[t];
        }

    }
    $('#output-text').html(outputText);
}

function reset(cipherString) {

    for (var i = 0; i < cipherString.length; i++) { //for each letter in the string
        cipher[cipherString[i]] = [cipherString[i], i];
        //make a key for the letter, and an array for the 
    }
    updateOutput();
    updateInterface();
}

function oneUp() {
    var sortable = [];

    $.each(cipher, function(key, value) {
        sortable.push([key, cipher[key][1]]);
    });

    sortable.sort(function(a, b) {
        return a[1] - b[1]
    });

    console.log(sortable);

    for (var i = 0; i < sortable.length - 1; i++) {
        updateCipher(sortable[i][0], cipher[sortable[i + 1][0]][0]); // use digital and next visual
    }
    updateCipher(sortable[sortable.length - 1][0], cipher[sortable[0][0]][0]); //last one goes back to beginning

    updateOutput();
    updateInterface();
}

function oneDown() {
    var sortable = [];

    $.each(cipher, function(key, value) {
        sortable.push([key, cipher[key][1]]);
    });

    sortable.sort(function(a, b) {
        return a[1] - b[1]
    });

    console.log(sortable);

    for (var i = sortable.length - 1; i > 0; i--) {
        console.log(sortable[i]);
        updateCipher(sortable[i][0], cipher[sortable[i - 1][0]][0]); // use digital and next visual
    }
    updateCipher(sortable[0][0], cipher[sortable[sortable.length - 1][0]][0]); //last one goes back to beginning

    updateOutput();
    updateInterface();
}

function preset(toPreset) {
    if (toPreset.substring) {
        for (var i = 0; i < toPreset.length; i++) {
            updateCipher(startingString.charAt(i), toPreset.charAt(i));
        }
    } else {
        for (key in toPreset) {
            console.log(toPreset);
            if (toPreset.hasOwnProperty(key)) {
                updateCipher(key, toPreset[key]);
            }
        }

    }
    updateOutput();
    updateInterface();

}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



//file upload stuff
document.getElementById('file').addEventListener('change', onReadFile, false);

function onReadFile() {

    if ($('#file').prop('files')[0]) {
        // var file = e.target.files[0];
        var file_data = $('#file').prop('files')[0];
        // var file = e.target.files[0];
        var filename = $('#file').val().replace(/C:\\fakepath\\/i, ''); //name of file

        var form_data = new FormData(); //new formData object?
        form_data.append('file', file_data);
        console.log(form_data);
        $.ajax({ //send it to server
            url: 'upload.php', // point to server-side PHP script 
            dataType: 'text', // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(php_script_response) {
                console.log(php_script_response); // display response from the PHP script, if any
                var newStyle = document.createElement('style');
                newStyle.appendChild(document.createTextNode("@font-face {font-family: 'newFont'; src: url('uploads/" + filename + "');} #cipher-interface{font-family: 'newFont';}"));
                document.head.appendChild(newStyle);


                opentype.load('uploads/' + filename, function(err, font) { //this is where the font is loaded
                    if (err) { //if something tries to use the font before it's loaded
                        console.log(err);
                    }
                    inFont = font; //set global var infont to the font just loaded
                    outFont = font; //sets outfont to the same pattern;

                    // console.log("A".charCodeAt(0)); //gets unicode
                    // console.log(String.fromCharCode(65)); //gets string from unicode value

                    for (prop in inFont.glyphs.glyphs) { //for each glyph in the font
                        var holdMe = new Object(); //make new holder object
                        holdMe.path = inFont.glyphs.glyphs[prop].path;
                        holdMe.unicode = inFont.glyphs.glyphs[prop]['unicode'];
                        holdMe.name = inFont.glyphs.glyphs[prop]['name'];
                        holdMe.advanceWidth = inFont.glyphs.glyphs[prop]['advanceWidth'];
                        holdMe.leftSideBearing = inFont.glyphs.glyphs[prop]['leftSideBearing'];
                        holdMe.character = String.fromCharCode(inFont.glyphs.glyphs[prop]['unicode']);
                        holdFont.new = [inFont.glyphs.glyphs[prop]['unicode']];
                        holdFont[inFont.glyphs.glyphs[prop].index] = holdMe;
                    }
                    console.log('added new font!');

                    // document.getElementById('glyphs').innerHTML = ''; //comment this out for drawing glyphs
                    // for (var i = 0; i < outFont.glyphs.length; i++) { //for every glyph in the font, draw a canvas
                    //     var glyph = outFont.glyphs.get(i);
                    //     var ctx = createGlyphCanvas(glyph, 100);
                    //     glyph.draw(ctx, 50, 120, 60);
                    // }
                });
            }
        });
    }
}
