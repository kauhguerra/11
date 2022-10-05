var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 

path = createSprite(200,200,40,40);
path.addImage(pathImg)

//Criando menino que corre 

boy= createSprite (300,300,200,200);

boy.addAnimation("menino",boyImg);
boy.scale=0.1

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
boy.x = mouseX

edges= createEdgeSprites();
boy.collide(leftBoundary);
boy.collide(rightBoundary);


 //Reiniciar o fundo v
 if(path.y>400){
    path.y= 0


 }
 



 drawSprites();

 }




