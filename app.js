const userInput = document.getElementById('user-input');
const input1 = document.getElementById('user-name-input');
const inputButton = document.getElementById('input-button');
const myButton = document.getElementById('button');
const myColor = document.getElementById('nametag');
const fontChange = document.getElementById('fontC');
const fontButton = document.getElementById('button3')
const myButton2 = document.getElementById('button2');
const myColor2 = document.getElementById('nametag');
const userPronouns = document.getElementById('pronouns');
const pronounInput = document.getElementById('pronoun-input');

let counter = 0;
let lastName = '';

let prevF = false;
const basicF = input1.style.fontFamily;


//Pronoun Input
inputButton.addEventListener('click', () => {
    pronounInput.textContent = userPronouns.value;
    
})

//User text Input/Pronoun Text
inputButton.addEventListener('click', () => {
    input1.textContent = userInput.value;
    
    pronounInput.textContent = userPronouns.value;
    
    
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
fontButton.addEventListener('click', () => {
    counter ++;
    if(!prevF){
        input1.style.fontFamily = 'true_liesregular';
        userPronouns.fontFamily = 'true_liesregular';
        prevF = true;
    }
    else{
        input1.style.fontFamily = basicF;
        userPronouns.style.fontFamily = basicF;
        prevF = false;
    }

});


// //Change BackgroundColor to Aqua
// myButton.addEventListener('click', () => {
//     myColor.style.backgroundColor = 'aqua';
// });


// //Change Background Color to Green
// myButton2.addEventListener('click', () => {
//     myColor2.style.backgroundColor = 'green';

// });

