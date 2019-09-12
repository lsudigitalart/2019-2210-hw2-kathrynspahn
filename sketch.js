function setup(){
    //Kathryn Spahn
    createCanvas(400,269);
    background(255,0,0,30);
    
    stroke(0);
    fill(0)
    strokeWeight(5)
    curve(0,134,0,134,400,134,400,105)

    //red1
    fill(255,0,0)
    stroke(0)
    quad(0,133,400,133,400,100,1,100)
    //red2
    fill(255,0,0)
    stroke(0)
    quad(0,136,400,137,400,182,1,185)
    //red3
    fill(255,0,0)
    stroke(0)
    quad(0,185,400,185,400,400,1,405)

    //white vert
    fill(255)
    stroke(0)
    strokeWeight(10)
    quad(290,100,270,-5,221,-5,240,100)
    //white hor
    fill(255)
    stroke(0)
    strokeWeight(9)
    quad(290,100,285,70,405,68,405,100)

    //leftbottom
    strokeWeight(10)
    curve(0,100,0,100,50,50,220,50,200,100)
    strokeWeight(10)
    curve(0,100,50,50,220,50,200,100)
    //lefttop
    strokeWeight(10)
    curve(0,50,50,50,90,0,90,0)
    //lefttop
    quad(221,-5,210,0,220,10,221,-5)
    //blueleft
    strokeWeight(10)
    curve(0,0,0,0,50,50,50,50,)
    fill(0,0,255)
    quad(0,0,50,50,0,100,0,0)


    //right
    strokeWeight(6)
    fill(255,0,0,0)
    curve(200,20,340,67,340,20,280,30)
    curve(340,20,340,20,280,15,245,15)
    curve(338,15,340,15,338,0,300,10)

    //blueright
    noStroke()
    fill(0,0,255,60)
    quad(399,68,399,0,340,0,340,20,350,68)
    quad(399,68,340,20,350,68)
    quad(0,0,100,0,25,70,0,0)
   
    stroke(29)
    curve(398,68,398,68,398,0,398,0)









    

}

function draw() {
    print(mouseX,mouseY)

}