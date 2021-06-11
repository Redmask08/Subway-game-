//Set Up Variable {System}
let d = document;
let canvas = d.querySelector('#canvas')
let c = canvas.getContext('2d')
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
let cW = canvas.width;
let cH = canvas.height;
//Set Up Variabale {Component}
let fps = 60;
let jumpT = true;
let jumpF = false;
let p1 = {x:0,y:cH-100,w:100,h:100,c:'red'};
let p2 = {x:cW-100,y:cH-100,w:100,h:100,c:'black'}
let scr = 0;
//Drawing
draw()
function draw(){
	c.clearRect(0,0,cW,cH);
	c.beginPath();
	c.fillStyle = p1.c;
	c.fillRect(p1.x,p1.y,p1.w,p1.h)
	c.fill()
	collision()
	canvas.onclick = jump;
	c.fillStyle = p2.c;
	c.fillRect(p2.x,p2.y,p2.w,p2.h)
	c.fill()
	scr+=1
	run()
	c.font = '40px arial';
	c.fillText('Score:'+scr,0,50,100)
}
setInterval(draw,1000/fps)
function jump(){
	if(jumpT){
		p1.y-=100
		jumpT=false;
		jumpF=true;
	}
	if(jumpF){
		setTimeout(()=>{
		p1.y+=100;
		jumpT=true;
		jumpF=false;
		},1000)
	}
	
}
function run(){
	p2.x-=6
}
function collision(){
	if(p1.y>cH-100){
		p1.y=cH-100
	}
	if(p2.x<0){
		p2.x=cW-100
	}
	if(p1.x+100>p2.x && p1.y+100>p2.y){
		alert('You Lose And You Score:'+scr)
	}

}
