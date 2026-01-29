let roll = document.getElementById("roll");
let message = document.getElementById("diceResult");
let input = document.getElementById("input");
let imgs = document.getElementById("diceImage")

function rollDice(){
    let result = [];
    let images = [];
    let dicenum = input.value;
    if(!Boolean(dicenum)){
        message.textContent = `Please select a number of dice!`
    }
    else{
        for(let i = 1; i <=Number(dicenum); i++){
            let num = Math.floor(Math.random()*6) + 1;
            result.push(num);
            images.push(`<img src="dice_images/dice${num}.png">`)
        }
        let dicerolls = [...result].join(", ")
        message.textContent = `Dice rolls: ${dicerolls}`
        imgs.innerHTML = images.join("")
        
    }
    
}