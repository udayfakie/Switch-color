const div = document.querySelector("#div");
const red_btn = document.querySelector("#red_btn");
const green_btn = document.querySelector("#green_btn");
const blue_btn = document.querySelector("#blue_btn");
const color = document.querySelector("#color");

red_btn.addEventListener('click', function(){

    const myRed = document.querySelector('#div').style.background = "red"
    document.querySelector('#color').style.color ='yellow'
    
});
green_btn.addEventListener('click', function(){
    const myGreen = document.querySelector('#div').style.background = "green"
    document.querySelector('#color').style.color ='purple'
});
blue_btn.addEventListener('click', function(){
    const myBlue = document.querySelector('#div').style.background = "blue"
    document.querySelector('#color').style.color ='maroon'
});


