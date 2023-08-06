//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let corner_size = 35;

let gem_x = 0; //gem can be positioned relative to the centre, offset is determined below in the draw function
let gem_y = 0;
let centre_gem = true;
let centre_gem_size = 20;
let centre_gem_rot=0;

let offsetx = 100;
let offsety = 100;

let gemoffsetx = 100;
let gemoffsety = 100;

let chooseColour = 3; //set value from 0 to 4 to change color palettes
let colorpalette=[
    ['#FAF5CD','#FACCA5',"#ECBEFA"],
    ['#CAD2C5','#2F3E46','#52796F','#84A98C'],
    ['#F7F0F0','#484349','#8AF3FF'],
    ['#EECFD4','#E6ADEC','#CFD4C5']];
let colorpal = colorpalette[chooseColour];

let sw = 1;//stroke color
let rotating=0;

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
  rect(0,0,200,200);
  fill(random(colorpal));
  stroke(sw);

  noStroke();
  rect(offsetx-corner_size/2,offsety-corner_size/2,corner_size+2,corner_size+2)
  stroke(sw);
  noStroke();

  //cross hatch
  fill(random(colorpal));
  rect(0,35,200,20);
  rect(35,0,20,200);
  rect(145,0,20,200);
  rect(0,145,200,20);
  stroke(255);
  fill(random(colorpal));
  rect(55,55,90,90);
  //side outlines
  
  rect(0,55,200-(20*2)-35-90,90);
  rect(165,55,35,90);
  rect(55,0,90,35);
  rect(55,165,90,35);
  //corner outlines
  rect(0,0,35,35);
  rect(165,0,35,35);
  rect(165,165,35,35);
  rect(0,165,35,35);
  stroke(sw);
  //centre shape diagonal thing with cutouts
  noFill();
  translate(offsetx,offsety);
  rotate(rotating);
  line(-85,-25,-25,-85);//nw
  line(85,25,25,85);//se
  line(-85,25,-25,85);//sw
  line(25,-85,85,-25);//ne
  arc(-85,0,30,50,-90,-270);
  arc(85,0,30,50,90,270);
  arc(0,-85,50,30,0,180);
  arc(0,85,50,30,180,0);
  rotate(-rotating);
  translate(-offsetx,-offsety);
  translate(100,100);
  line(0,-100,0,100);
  line(-100,0,100,0);
  translate(-100,-100);
  

  translate(gemoffsetx,gemoffsety);
  fill(random(colorpal));
  rotate(centre_gem_rot);
  noStroke();
  rect(-corner_size/2,-corner_size/2,corner_size,corner_size);
  stroke(sw);
  arc(0+corner_size/2,0,corner_size,corner_size,-90,90);
  arc(0,corner_size/2+0,corner_size,corner_size,0,180);
  arc(0,0-corner_size/2,corner_size,corner_size,180,0);
  arc(0-corner_size/2,0,corner_size,corner_size,90,270);
  if(centre_gem == true){
    fill(random(colorpal));
    stroke(sw);
    ellipse(0,0,centre_gem_size,centre_gem_size);
  }
  
}