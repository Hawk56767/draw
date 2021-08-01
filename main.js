canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var lastpositionofx,lastpositionofy;
color="black";
widthofline=9;
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
mouse_event="mouseDown";
color=document.getElementById("color").value;
widthofline=document.getElementById("line").value
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
mouse_event="mouseUp";

}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){

mouse_event="mouseleave";

}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
console.log("test");
current_positon_of_mouseX=e.clientX-canvas.offsetLeft;
current_positon_of_mouseY=e.clientY-canvas.offsetTop;
if(mouse_event=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(lastpositionofx,lastpositionofy);
ctx.lineTo(current_positon_of_mouseX,current_positon_of_mouseY);
ctx.stroke();
}
lastpositionofx=current_positon_of_mouseX;
lastpositionofy=current_positon_of_mouseY;

}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

