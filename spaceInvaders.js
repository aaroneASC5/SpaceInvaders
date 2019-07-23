let ship;
let enemy;
let x = 300;
let y = 550;
let xVelocity = 10;
let yVelocity = 3;
let arr=[];
let bulletX;

let q1 = 30;

function setup(){
    createCanvas(600,600);
    for(let q = 0; q < 9; q++){    //enemies       
        rect(q1,10,50,50);
        arr.push(0);
        q1 += 55;
        
    }
    q1=30;
}

function drawShips(){
    for(let q = 0; q < 9; q++){//enemies  
        if(bulletX>q1 && bulletX<q1+50 && yVelocity<50 && yVelocity>10){
            arr[q]= 1;
        }        
        if(arr[q]== 0){
            rect(q1,10,50,50);
        }
        q1 += 55;
    }
    q1=30;

}


    


function draw(){
    background(0, 0, 0);
    drawShips();
    fill(255);
    

    

    rect(x,y,15,15); //shoota
    q1 += 55;
    if (keyIsDown(LEFT_ARROW) && x >= 5 ) {
    x -= xVelocity;
    } 
    if (keyIsDown(RIGHT_ARROW) && x <= 580 ) {
    x += 1* xVelocity;
    }
    if(keyCode === 32){
    fill(250)
    bulletX = x+10;
    ellipse(bulletX,yVelocity, 10,10)   
    yVelocity -= 30
        if(yVelocity < 0){
            keyCode = null;
            yVelocity = 550;
            }
    }   
}

/*function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(ellipse(x + 10,yVelocity, 10,10)>=rect(q1,10,50,50)){
                
                keyCode = null;

            }
        }
    }
}*/






// q += xVelocity;
//         if(q>=600){
//             xVelocity = -1*xVelocity
//         } else if(q<=0){
//             xVelocity = 10;
//         }