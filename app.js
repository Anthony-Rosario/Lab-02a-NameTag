const userInput = document.getElementById('user-input');
const input1 = document.getElementById('user-name-input');
const inputButton = document.getElementById('input-button');
const counterBox = document.getElementById('counter-box');
const myColor = document.getElementById('nametag');
const fontChange = document.getElementById('fontC');
const fontButton = document.getElementById('button3')
const myButton2 = document.getElementById('button2');
const myColor2 = document.getElementById('nametag');
const userPronouns = document.getElementById('pronouns');
const pronounInput = document.getElementById('pronoun-input');


let counter = 0;


inputButton.addEventListener('click', () => {
    console.log(input1.innerHTML);
    const newName = userInput.value;
    let oldName = input1.innerHTML;
    if(newName !== oldName){
        counter ++;
        counterBox.textContent = counter;
        input1.textContent = newName;
        
    }
});
    




//User text Input/Pronoun Text
inputButton.addEventListener('click', () => {
    input1.textContent = userInput.value;
    userPronouns.textContent = pronounInput.value;
});


//Color Generator
function color() { 
    return Math.floor(Math.random() * 256); 
};
function generator() {
    let colorGenerator = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    myColor.style.backgroundColor = colorGenerator;
};
myColor.addEventListener('click', generator);


//Change Font button
let prevF = false;
const basicF = input1.style.fontFamily;
const basicF2 = userPronouns.style.fontFamily;
fontButton.addEventListener('click', () => {
    if(!prevF){
        input1.style.fontFamily = 'true_liesregular';
        userPronouns.style.fontFamily = 'true_liesregular';
        prevF = true;
    }
    else{
        input1.style.fontFamily = basicF;
        userPronouns.style.fontFamily = basicF2;
        prevF = false;
    }
});

