var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
playerX = 10;
playerY = 10;
var player_object = ""
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:playerY, 
            left:playerX
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", myKeydown);
function myKeydown (e){
       keypressed= e.keyCode;
       console.log(keypressed);
       if(e.shiftKey == true && keypressed == '80'){
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
       }
       if(e.shiftKey == true && keypressed == '77'){
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
       }
       if(keypressed=="37"){
        left();
       }
       if(keypressed=="38"){
        up();
       }
       if(keypressed=="39"){
        right();
       }
       if(keypressed=="40"){
        down();
       }
       if(keypressed == "87"){
        new_image("wall.jpg")
       }
       if(keypressed == "71"){
        new_image("ground.png")
       }
       if(keypressed == "76"){
        new_image("light_green.png")
       }
       if(keypressed == "84"){
        new_image("trunk.jpg")
       }
       if(keypressed == "82"){
        new_image("roof.jpg")
       }
       if(keypressed == "89"){
        new_image("yellow_wall.png")
        
       }
       if(keypressed == "68"){
        new_image("dark_green.png")
       }
       if(keypressed == "85"){
        new_image("unique.png")
       }
       if(keypressed == "67"){
        new_image("cloud.jpg")
       }
}