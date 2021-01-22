class Laser{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    draw(){
        fill("white")
        rectMode(CENTER)
        rect(this.x,this.y,2.5,25)
    }
}