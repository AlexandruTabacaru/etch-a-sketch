const container=document.getElementById('container');
let gridRow=document.getElementsByClassName('grid-row');
let cells=document.getElementsByClassName('cell');
const clear=document.getElementById('clear');
const erase=document.getElementById('erase');
const rainbow=document.getElementById('random');
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
initialSketch();
function initialSketch(){
    makeRow(16);
    makeCol(16);
}
function makeRow(rowNum){
    for(let r=0;r<rowNum;r++){
        let row=document.createElement('div');
        container.appendChild(row).className="grid-row";
    }
}
function makeCol(cellNum){
    for(let i=0;i<gridRow.length;i++){
        for(let j=0;j<cellNum;j++){
            var cell=document.createElement('div');
            cell.style.width=container.style.width/cellNum;
            gridRow[j].appendChild(cell).className="cell";
        }
       
    }
}
let modifiable=Array.from(cells);
console.log(modifiable)

function rainbowizer(){
    modifiable.forEach(element => 
    element.addEventListener('mouseover',function(){
        element.style.backgroundColor=getRandomColor();
    }));
}

function eraser(){
    modifiable.forEach(element => 
        element.addEventListener('mouseover',function(){
            element.style.backgroundColor="";
        }));
    
}   
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
function clearCells(){
    modifiable.forEach(element => 
         element.style.backgroundColor=""
        )
};

function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(container);
    makeRow(val);
    makeCol(val);
    rainbowizer();
})


 
rainbow.addEventListener('click', rainbowizer)  
clear.addEventListener('click', clearCells);
erase.addEventListener('click', eraser);