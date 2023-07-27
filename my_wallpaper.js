//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let corner_size = 50;
let gem_x = 0; //gem can be positioned relative to the centre, offset is determined below in the draw function
let gem_y = 0;
let centre_gem = true;
let centre_gem_size = 100;
let offsetx = 30;
let offsety = -30;
let colorpal=['rgb(255,128,255)','rgb(128,255,255)','rgb(255,255,128)'];
let sw = 3;//stroke width

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); //develop_glyph
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
  //arc(offsetx,offsety,200,200,0,360,OPEN);
  noStroke();
  rect(offsetx-corner_size/2,offsety-corner_size/2,corner_size+2,corner_size+2)
  stroke(sw);
  arc(offsetx+corner_size/2,offsety,corner_size,corner_size,-90,90);
  arc(offsetx,corner_size/2+offsety,corner_size,corner_size,0,180);
  arc(offsetx,offsety-corner_size/2,corner_size,corner_size,180,0);
  arc(offsetx-corner_size/2,offsety,corner_size,corner_size,90,270);
  
  //arc(offsetx+90-corner_size/2, offsety+corner_size/2,corner_size, corner_size, 270, 0);

  fill(random(colorpal));

  stroke(1);
  //rect(offsetx-10,offsety-10,20,20);

  fill(random(colorpal));
  if(centre_gem == true){
    stroke(sw);
    ellipse(100+offsetx,100+offsety,centre_gem_size,centre_gem_size);
    /*beginShape(LINES);
      vertex(100+offsetx-35,100+offsety-35);
      vertex(100+offsetx+35,100+offsety+35);
    endShape();*/

  }
  
}