 canvas=document.getElementById("canvass");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
      bg_img= new Image();
      bg_img.onload=uploadbackground;
      bg_img.src=background_image;
      rover_img= new Image();
      rover_img.onload=uploadrover;
      rover_img.src=rover_image;
}
function uploadbackground(){
    ctx.drawImage(bg_img, 0,0,canvas.width, canvas.height);
}
function uploadrover(){
ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
       W();
       console.log("up");
    }
    if(keypressed=="38"){
        S();
        console.log("down");
     }
     if(keypressed=="37"){
        A();
        console.log("left");
     }
     if(keypressed=="37"){
        D();
        console.log("right");
     }

}
function W(){
  if(rover_y>=0){
     rover_y=rover_y-10;
     console.log("When up arrow is pressed x="+rover_x+"y="+rover_y);
     uploadbackground();
     uploadrover();
  } 
}
function S(){
   if(rover_y<=500){
      rover_y=rover_y+10;
      console.log("When up arrow is pressed x="+rover_x+"y="+rover_y);
      uploadbackground();
      uploadrover();
   } 
 }
 function D(){
   if(rover_x<=700){
      rover_x=rover_x+10;
      console.log("When up arrow is pressed x="+rover_x+"y="+rover_y);
      uploadbackground();
      uploadrover();
   } 
 }
 function A(){
   if(rover_x<=0){
      rover_x=rover_x-10;
      console.log("When up arrow is pressed x="+rover_x+"y="+rover_y);
      uploadbackground();
      uploadrover();
   } 
 }