//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let corner_size = 20;
let centre_gem = true;
let centre_gem_size = 100;
let sw = 3;//stroke width

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  stroke(sw);
  //going to replace with arc() for a more artisnal aesthetic.
  beginShape(LINES);
    vertex(corner_size,0);
    vertex(corner_size,corner_size/2);
    vertex(corner_size,corner_size/2);
    vertex(corner_size/2,corner_size/2);
    vertex(corner_size/2,corner_size/2);
    vertex(corner_size/2,corner_size);
    vertex(corner_size/2,corner_size);
    vertex(0,corner_size);

    vertex(200-corner_size,200);
    vertex(200-corner_size,200-corner_size/2);
    vertex(200-corner_size,200-corner_size/2);
    vertex(200-corner_size/2,200-corner_size/2);
    vertex(200-corner_size/2,200-corner_size/2);
    vertex(200-corner_size/2,200-corner_size);
    vertex(200-corner_size/2,200-corner_size);
    vertex(200,200-corner_size);

    vertex(200-corner_size,0);
    vertex(200-corner_size,corner_size/2);
    vertex(200-corner_size,corner_size/2);
    vertex(200-corner_size/2,corner_size/2);
    vertex(200-corner_size/2,corner_size/2);
    vertex(200-corner_size/2,corner_size);
    vertex(200-corner_size/2,corner_size);
    vertex(200,corner_size);

    vertex(corner_size,200);
    vertex(corner_size,200-corner_size/2);
    vertex(corner_size,200-corner_size/2);
    vertex(corner_size/2,200-corner_size/2);
    vertex(corner_size/2,200-corner_size/2);
    vertex(corner_size/2,200-corner_size);
    vertex(corner_size/2,200-corner_size);
    vertex(0,200-corner_size);
  endShape();

  if(centre_gem == true){
    stroke(sw);
    ellipse(100,100,centre_gem_size,centre_gem_size);
  }
  
}