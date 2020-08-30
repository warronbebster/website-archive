 $(document).ready(function() {

     var clickcount = 0;
     var mouse = false;
     var x;
     var y;

     var needFirstPoint = true;
     // var angleInDegrees;

     function drawNextLine(ctx, x, y) {
         if (needFirstPoint) {
             ctx.lineWidth = 2;
             ctx.beginPath();
             ctx.moveTo(x, y);
             needFirstPoint = false;
         } else {
             ctx.lineTo(x, y);
             ctx.strokeStyle = 'rgba(0,255,0,.7)';
             ctx.stroke();
         }
     }

     var fontsize;

     var words = [
         "tool( )",
         "Interfaces",
         "<->",
         "Imagination",
         "Wednesday 3/18 @6:00",
         "CIT 103 (panel and workshops)",
         "Moderated by Brooks Hagan",
         "Participants:",
         "Robert Hodgin",
         "Paolo Cardini (ID)",
         "Evelyn Eastmond (D+M)",
         "Cas Holman (ID)",
         "Duann Scott",
         "Thursday 3/19 @6:30, CIT 103",
         "Robert Hodgin, lecture",
         "For most of the computer era, the dominant model",
         "of digital design within creative fields has presented",
         "a clear division between those who develop tools",
         "and those who use them. However, this division has",
         "been dissolving in recent years, due in part to",
         "external factors such as greater transparency in digital",
         "interfaces, as well as community-grown efforts to",
         "develop and extend software for individual use. In",
         "effect, the “tool” is the outcome itself, with successive",
         "refinements provoked by interesting applications that",
         "arise from its use. The corresponding shifts in the land-",
         "scape of tool use has also led to novel interfaces which",
         "materialize the digital, promote education through",
         "play, and broker the transition to a new imagination",
         "embracing algorithm, commands, and simulation.",
         "risdtool.org"

     ];

     var instructions = [
         "start over!",
         "click again!",
         "try dragging!",
         "and again!",
         "#time",
         "@where",
         "our leader:",
         "**the**",
         "the one and only",
         "the absolutely only",
         "the only-est",
         "the most only",
         "the only",
         "the next day…",
         "he speaks!",
         "and now the content:",
         "click again (again)",
         "wanna read more?",
         "more!",
         "the end (jk)",
         "the real end?",
         "nope there’s more",
         "click",
         "click",
         "bang!",
         "lol jk",
         "u tool",
         "get it?",
         "inter(your)face",
         "imagination!",
         "the website:"

     ];

     $(document).bind('mousemove', function(e) {
         $('.popup').css({
             left: e.pageX + 40,
             top: e.pageY - 40,
             // "transform": "rotate3d(10,10,10," + .01 * (e.pageX + e.pageY) + "deg)"
         });
     });

     var canvas = document.getElementById('canvas');
     var canvas2 = document.getElementById('canvas2');
     var ctx = canvas.getContext('2d');
     var ctx2 = canvas2.getContext('2d');

     canvas.width = 3840;
     canvas.height = 4608;
     canvas.style.width = "20in";
     canvas.style.height = "24in";

     canvas2.width = 3840;
     canvas2.height = 4608;
     canvas2.style.width = "20in";
     canvas2.style.height = "24in";

     ctx.fillStyle = "blue";
     ctx.font = "bold " + fontsize + "px Freight Big Pro Light";

     var img = new Image();
     img.src = 'pattern.png';

     ctx.scale(2, 2);
     ctx2.scale(2, 2);


     // mousedown
     $('#canvas').mousedown(function() {

         if (clickcount == 0) {
             fontsize = 300;
             ctx.fillStyle = "green";
         } else if (clickcount <= 3 && clickcount > 0) {
             fontsize = 120;
             ctx.fillStyle = "green";
         } else if (clickcount > 3 && clickcount < 15) {
             fontsize = 60;
             ctx.fillStyle = "green";
         } else {
             fontsize = 30;
             ctx.fillStyle = "white";
         }

         ctx.font = "bold " + fontsize + "px Freight Big Pro Light";

         ctx.fillText(words[clickcount], x, y + .5 * fontsize);
         mouse = true;

     });

     // move
     $('#canvas').mousemove(function(e) {
         x = e.pageX;
         y = e.pageY;

         $('#popup').css({
             left: x + 20,
             top: y + 20,
         });

         if (mouse == false) {
             ctx2.clearRect(0, 0, canvas.width, canvas.height);
             ctx2.drawImage(img, x - 1000, y - 1000);
             return;
         }
         // Mouse click + moving logic here
         if (clickcount < 15) {
             ctx.fillStyle = "rgba(255,255,0,.3)";
         } else {
             ctx.fillStyle = "rgba(255,255,200,.3)";
         }
         // ctx.fillStyle = "rgba(255,255,0,.3)";
         ctx.fillText(words[clickcount], x, y + .5 * fontsize);


     });

     // mouseup
     $('#canvas').mouseup(function() {
         drawNextLine(ctx, x, y);
         ctx.fillStyle = "blue";
         ctx.fillText(words[clickcount], x, y + .5 * fontsize);

         mouse = false;
         //reset clickcount and fontsize below
         clickcount += 1;
         if (clickcount >= words.length) {
             clickcount = 0;
         }
         document.getElementById("popup").textContent = instructions[clickcount];

     });








 });
