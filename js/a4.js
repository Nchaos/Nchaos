


function alertTitle(){
	alert(document.title);
}
alertTitle();

function validateEmail(email) { 
  // http://stackoverflow.com/a/46181/11236
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
alert(validateEmail("nhchao@smu.edu"));

function changeBGC(color){
    document.bgColor = color;
}
changeBGC("black");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(1000, 400, 125, 0, 1 * Math.PI);
ctx.lineTo(875,150);
ctx.arc(1000, 150, 125, 1 * Math.PI, 0);
ctx.lineTo(1125,400);
ctx.closePath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#87CEFA"
ctx.fillStyle = "#87CEFA";
ctx.fill();
ctx.stroke();