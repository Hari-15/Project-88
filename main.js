canvas = new fabric.Canvas('MyCanvas');
block_image_width = 5;
block_image_height = 5;
ball_y = 0;
ball_x = 0;
hole_x = 800;
hole_y = 400;
var ball_img_object = "";
var hole_img_object = "";

function load_img(){
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_img_object = Img;
		ball_img_object.scaleToWidth(50);
		ball_img_object.scaleToHeight(50);
		ball_img_object.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_img_object);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_img_object = Img;
		hole_img_object.scaleToWidth(50);
		hole_img_object.scaleToHeight(50);
		hole_img_object.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_img_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(ball_x == hole_x && ball_y == hole_y) {
		document.getElementById("heading").innerHTML = "You Win!!";
		document.getElementById("MyCanvas").style.borderColor = "red";
		canvas.remove(ball_img_object);
	}
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	}
	
	function up()
	{
		if(ball_y >= 5) {
			ball_y = ball_y - 10;
			canvas.remove(ball_img_object);
			load_img();
		}
	}

	function down()
	{
		if(ball_y <= 600) {
			ball_y = ball_y + 10;
			canvas.remove(ball_img_object);
			load_img();
		}
	}

	function left()
	{
		if(ball_x >= 5)
		{
			ball_x = ball_x - 10;
			canvas.remove(ball_img_object);
			load_img();
		}
	}

	function right()
	{
		if(ball_x <=1000)
		{
			ball_x = ball_x + 10;
			canvas.remove(ball_img_object);
			load_img();
		}
	}
	


