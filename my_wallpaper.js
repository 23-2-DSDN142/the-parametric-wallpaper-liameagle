//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let flower = true;
let flowerOffsetX = 100; //Flower can be positioned relative to the centre
let flowerOffsetY = 100;
let flowerCentreSize = 20; 	//Size of the middle of the flower 
let flowerRotation = 80; //Spin the flower in degrees
let petalSize = 70; //Width of the arc() shape that draws each petal

let crossOffsetX = 100;
let crossOffsetY = 100;
let crossRotation = 0;

let cornerFill = true; 
let chooseColour = 1; //set value from 0 to 4 to change color palettes

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); //develop_glyph
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
	//A nice set of colour palettes to change between.
  let colorPalettes=[
		['#FAF5CD','#FACCA5',"#ECBEFA"],
		['#CAD2C5','#2F3E46','#52796F','#84A98C'],
		['#F7F0F0','#484349','#8AF3FF'],
		['#EECFD4','#E6ADEC','#CFD4C5']];
  let chosenPalette = colorPalettes[chooseColour]; //once chooseColour is set then we assign the global palette to use one of the pre-designated ones.
  if(chooseColour > 3){	//Just incase someone inputs a bad value for the palette picker, just reset it to the first pick so code runs properly
	chosenPalette = colorPalettes[0];
  }
  fill(random(chosenPalette)); //Randomly assigning colours to add visual variety to the tiles, so its not too monotonous
  stroke(0);
  noStroke();
  rect(crossOffsetX-petalSize/2,crossOffsetY-petalSize/2,petalSize+2,petalSize+2)
  stroke(0);
  noStroke();

  //cross hatch
  fill(random(chosenPalette));
  rect(0,35,200,20);
  rect(35,0,20,200);
  rect(145,0,20,200);
  rect(0,145,200,20);
  stroke(255);	//Here stroke is changed to white, suggested by Tom, because it adds more clarity and reduces visual noise than if it were black.
  fill(random(chosenPalette));
  rect(55,55,90,90);

  //side fill
  rect(0,55,200-(20*2)-35-90,90);
  rect(165,55,35,90);
  rect(55,0,90,35);
  rect(55,165,90,35);

  //corner squares, when taken away affect the balance of the image buy putting white space in the corners, reinforcing the centre design
  if(cornerFill == true){
	rect(0,0,35,35);
	rect(165,0,35,35);
	rect(165,165,35,35);
	rect(0,165,35,35);
  }
  stroke(0);

  //Cross shape
  noFill();
  translate(crossOffsetX,crossOffsetY);
  rotate(crossRotation);	//I can rotate the shape with the parameter...
  //I drew the shape diagonally because I didnt think I would change its rotation later
  line(-85,-25,-25,-85);//NW line
  line(85,25,25,85);	//SE line
  line(-85,25,-25,85);	//SW line
  line(25,-85,85,-25);	//NE line
  arc(-85,0,30,50,-90,-270);//W Arc
  arc(85,0,30,50,90,270);	//E Arc
  arc(0,-85,50,30,0,180);	//N Arc
  arc(0,85,50,30,180,0);	//S Arc
  rotate(-crossRotation);	//Then unrotate the proceeding drawn shapes to isolate roation on just one

  //Mid-tiling lines, throws off the tiling of the grid and makes everything seem offset 
  translate(-crossOffsetX,-crossOffsetY);
  translate(100,100);
  line(0,-100,0,100);
  line(-100,0,100,0);
  translate(-100,-100);
  
  //Flower drawing
  if(flower == true){	//Adding toggle ability for the flower
	translate(flowerOffsetX,flowerOffsetY);
	fill(random(chosenPalette));
	rotate(flowerRotation);
	noStroke();
	rect(-petalSize/2,-petalSize/2,petalSize,petalSize);
	stroke(0);
	//This draws each side of the petal, scaled by the petalSize parameter
	arc(0+petalSize/2,0,petalSize,petalSize,-90,90);
	arc(0,petalSize/2+0,petalSize,petalSize,0,180);
	arc(0,0-petalSize/2,petalSize,petalSize,180,0);
	arc(0-petalSize/2,0,petalSize,petalSize,90,270);
	fill(random(chosenPalette));
	stroke(0);
	ellipse(0,0,flowerCentreSize,flowerCentreSize);
  }
  
}