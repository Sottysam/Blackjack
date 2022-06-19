const text = document.querySelector(".text")
const cards = document.querySelector(".cards")
const sum = document.querySelector(".sum")
const startBtn = document.querySelector(".start")
const newBtn = document.querySelector(".new")

let Num1;
let Num2;
let Total;

startBtn.addEventListener("click", ()=>{
  reset()
  Num1 = randomNumber()
  Num2 = randomNumber() 
  cards.textContent += ` ${Num1} ${Num2}`
  Total = Num1 + Num2
  sum.textContent += ` ${Total}`
  displayText()
})

newBtn.addEventListener("click", (e)=>{
  let Num3 = randomNumber()
  cards.textContent += ` ${Num3}`
  Total += Num3
  sum.textContent = `Sum: ${Total}`
  displayText()
})

function randomNumber(){
  return Math.floor(Math.random() * 10) 
}

function displayText(){
  if(Total < 21){
    text.textContent = `Do you want to draw another card?`
    newBtn.classList.add("display")
  } else{
    text.textContent = `You're out of the game!`
    setTimeout(function(){
    cards.textContent = `Cards:`
    sum.textContent = `Sum:`
    newBtn.classList.remove("display")
    text.textContent = `want to play a round?`
    }, 2000)
  }
}

function reset(){
  cards.textContent = `Cards: `
  Total;
  sum.textContent = `Sum: `
}
