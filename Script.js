let count = 0;

const countdisplay = document.querySelector("#count");
const increaseButton = document.querySelector("#increaseButton");
const resetButton = document.querySelector("#resetButton");
const decreaseButton = document.querySelector("#decreaseButton");
increaseButton.addEventListener("click", function () {
    count = count + 1;
    countdisplay.textContent = count;
});
resetButton.addEventListener("click", function () {
    count = 0;
    countdisplay.textContent = count;
});
decreaseButton.addEventListener("click", function () {
    count = count - 1;
    countdisplay.textContent = count;
}); 





// conditional statement

// let age = 17;
// let text = 'I am a child'
// let text2 = 'I can vote'

// if  (age > = 18) {
//     console.log(text2);}
// }else
// {console.log(text);}

// CLASSWORK
// Comment
// let age = 12;
// let text ="You can not drive!";

// if (age >= 18) {
//     text = "You can drive";
// }
// document.getElementById("demo").innerHTML = text

//Ternary.operator
let gender = 'female';
let text = gender === 'female' ?  'I am a woman' : "I am not a woman";
document.getElementById('demo').textContent = text;
