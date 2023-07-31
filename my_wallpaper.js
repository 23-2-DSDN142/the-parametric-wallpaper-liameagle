//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let corner_size = 23;
let gem_x = 0; //gem can be positioned relative to the centre, offset is determined below in the draw function
let gem_y = 0;
let centre_gem = true;
let centre_gem_size = 5;
let offsetx = 100;
let offsety = 100;
let colorpal=['#A5ECFA','#FAF7E6','#FAF5CD','#FACCA5',"#ECBEFA"];
let sw = 3;//stroke width

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); //develop_glyph
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
  fill(random(colorpal));
  arc(offsetx+corner_size/2,offsety,corner_size,corner_size,-90,90);
  arc(offsetx,corner_size/2+offsety,corner_size,corner_size,0,180);
  arc(offsetx,offsety-corner_size/2,corner_size,corner_size,180,0);
  arc(offsetx-corner_size/2,offsety,corner_size,corner_size,90,270);

  noStroke();
  //arc(offsetx+90-corner_size/2, offsety+corner_size/2,corner_size, corner_size, 270, 0);
  //arc(offsetx+90, offsety+corner_size*1.5,corner_size*1.3,corner_size*1.8, 180, 270);
  fill(random(colorpal));
  //accent lines
  rect(0,35,200,20);
  rect(35,0,20,200);
  rect(145,0,20,200);
  rect(0,145,200,20);
  stroke(sw);
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
  noFill()
  line(15,75,75,15);
  line(185,125,125,185);
  line(15,125,75,185);
  line(125,15,185,75);
  arc(15,100,30,50,-90,-270);
  arc(185,100,30,50,90,270);
  arc(100,15,50,30,0,180);
  arc(100,185,50,30,180,0);

  line(100,0,100,200);
  line(0,100,200,100);
  stroke(1);
  //rect(offsetx-10,offsety-10,20,20);

  noFill();
  arc(offsetx+corner_size/2,offsety,corner_size,corner_size,-90,90);
  arc(offsetx,corner_size/2+offsety,corner_size,corner_size,0,180);
  arc(offsetx,offsety-corner_size/2,corner_size,corner_size,180,0);
  arc(offsetx-corner_size/2,offsety,corner_size,corner_size,90,270);
  if(centre_gem == true){
    fill(random(colorpal));
    stroke(sw);
    ellipse(offsetx,offsety,centre_gem_size,centre_gem_size);
    /*beginShape(LINES);
      vertex(100+offsetx-35,100+offsety-35);
      vertex(100+offsetx+35,100+offsety+35);
    endShape();*/

  }
  
}