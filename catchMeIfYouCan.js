var box=document.getElementById("box");

var viewHeight=window.innerHeight;
var viewWidth=window.innerWidth;

window.addEventListener("resize",function(event){
    viewHeight=window.innerHeight;
    viewWidth=window.innerWidth;
});


box.addEventListener("mouseover",function(event){
    var boxAttr=box.getBoundingClientRect();
    var position=getNewPosition(boxAttr.width,boxAttr.height);
    box.style.top=position.y +"px";
    box.style.left=position.x +"px";
});

// the boxWidth and boxHeight are subtracted so that they cannot move out from right and bottom direction.
function getNewPosition(boxWidth,boxHeight){
    // math.random will return value 0 t0 viewWidth and adding 1 so that it will be from 1 to viewwidth.
    var newX=Math.floor((Math.random()*viewWidth)+1-boxWidth);
    var newY=Math.floor((Math.random()*viewHeight)+1-boxHeight);
// this will satify that box will not move out in the top and left direction
    if(newX<0){
        newX=0;
    }
    if(newY<0){
        newY=0;
    }
// return Objects as key value pairs
    return {x:newX , y:newY};
    // return[newX,newY];
}
