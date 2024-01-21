

const slider = document.querySelector(".slider");
const displaySliderValue = document.querySelector(".range");
const parentDiv = document.querySelector('.parentDiv');
let  childDivs=null;
let buttonPress = null;
let rainbow = document.querySelector(".RainbowButton");
rainbow.addEventListener("click",()=> {buttonPress = 1;setColor(buttonPress);})
let color = document.querySelector("#colorpicker")
color.addEventListener("click",()=>{buttonPress=2;setColor(buttonPress)});






function getSliderValue(){
    const sliderValue = document.querySelector(".slider").value;
    displaySliderValue.textContent = `${sliderValue}*${sliderValue}`;
    return sliderValue;
}

function checkRainbowButton(){
    let buttonPress = false;
    rainbow.addEventListener('click',()=>{buttonPress= true;});
    return buttonPress;

}

document.querySelector(".slider").addEventListener('input',()=>{setParentDiv();})

function setColor(buttonValue) {
    childDivs.forEach((childDiv) => {
        childDiv.removeEventListener("mouseover", ()=>{childDiv.style.backgroundColor = `${color.value}`; });
        childDiv.removeEventListener("mouseover", setRandomColor(childDiv));});
    if(buttonValue==2)
    {
        childDivs.forEach((childDiv)=>{
        childDiv.addEventListener("mouseover",()=>{childDiv.style.backgroundColor = `${color.value}`; })})
    }
    else{
        childDivs.forEach((childDiv)=>{
        childDiv.addEventListener("mouseover",()=>{setRandomColor(childDiv)})})
    }
    
}

function setParentDiv() {
    sliderValue= getSliderValue();
    const CHILDDIVDIMENSIONS = (parentDiv.clientWidth / sliderValue);
    console.log(CHILDDIVDIMENSIONS);
    if (parentDiv.hasChildNodes()) {
        removeAllChildNodes(parentDiv);
    }
    const numChildDivs = Math.pow(sliderValue, 2);
    for (let i = 1; i <= numChildDivs; i++) {
        const div1 = document.createElement('div');
        // div1.style.width =`${CHILDDIVDIMENSIONS}px`;
        // div1.style.height =`${CHILDDIVDIMENSIONS}px`;
        // div1.addEventListener("mouseover", () => { div1.style.backgroundColor = `${setColor()}`; })
        div1.classList.add('childDiv');  
        parentDiv.appendChild(div1);
    }
    childDivs = document.querySelectorAll(".childDiv");
    setConstraints(childDivs,CHILDDIVDIMENSIONS);
    // checkRainbowButton()?setRandomColor(childDiv):setColor(childDiv);
    setColor(2);
     
}

function setRandomColor(childDiv){
    let randomRed = Math.floor(Math.random()*256);
    let randomGreen = Math.floor(Math.random()*256);
    let randomBlue = Math.floor(Math.random()*256);
    childDiv.addEventListener("mouseover", () => { childDiv.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`; })
    // childDiv.style.backgroundColor=`rgb(${randomRed},${randomGreen},${randomBlue});`
}   


function setConstraints(childDivs,dimensions){
    childDivs.forEach((childDiv)=>{
        childDiv.style.width =`${dimensions}px`;
        childDiv.style.height =`${dimensions}px`;
        //checkRainbowButton()?setRandomColor(childDiv):setColor(childDiv);
        //childDiv.addEventListener("mouseover",()=>{childDiv.style.backgroundColor = `${color.value}`; })
    })};



document.querySelector(".clearButton").addEventListener('click', () => {
    // childDivs = document.querySelectorAll(".childDiv");
    childDivs.forEach((element) => {
        element.style.backgroundColor = `${'white'}`;
    })
});





function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


window.onload= function(){ setParentDiv();}





