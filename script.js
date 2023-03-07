//Code challenge 1
// const teamDolpinScore = [97, 112, 101]
// const teamKoalasScore = [ 109, 95, 106]

// const averageScoreDolphin = (teamKoalasScore[0] + teamKoalasScore[1] + teamKoalasScore[2])/3;
// const averageScoreKoalas = (teamKoalasScore[0] + teamKoalasScore[1] + teamKoalasScore[2])/3;
// console.log(`team dolphin average score ${averageScoreDolphin}`);
// console.log(`team koalas average score ${averageScoreKoalas}`)

// if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100) console.log(
//     `team dolphin is the winner of the competition`
// );
// else if (averageScoreKoalas > averageScoreDolphin && averageScoreKoalas >= 100) console.log(`team Koalas is the winner of this competition`);
// else if (averageScoreDolphin === averageScoreKoalas && averageScoreDolphin >= 100 && averageScoreKoalas >= 100)
// console.log(`both team are in a draw`);
// else console.log(`no team wins the competition`);

//switch statement

// const day = 'Tuesday';

// switch (day){
//     case 'Monday': console.log('your calss starts at 11am'); break
//     case 'Tuesday': console.log('Professor usman class begins at 8am wake up early Daniel');
//     break
//     case 'Wednesday': console.log('you have to get things ready for jeremaihs class 🍷'); break
// }

// const age = 80;

// age >= 18 ? console.log('you are eligible to drink alcohol'): console.log('you can oly drink water')

// code challenge 4

// let bill = 275;

// const tip = bill <= 300  &&  bill >= 50 ? (bill * 15)/100 :(bill * 20)/100;

// console.log(`your bill for eating in this resturant is ${bill} your tip is ${tip} the total payment is ${bill + tip}`)

// const calcAverage = (a,b,c) => {
//     return (a+b+c)/3;
// }

// const averageScoreDolphin = calcAverage(44,23,71);
// const averageScoreKoalas = calcAverage(65,54,49);

// console.log(averageScoreDolphin);
// console.log(averageScoreKoalas);

// function checkWinner (){
// if (averageScoreDolphin >= averageScoreKoalas*2){
//     console.log(`Dolpin wins (${averageScoreDolphin} vs ${averageScoreKoalas})`);
// }else if (averageScoreKoalas >= 2*averageScoreDolphin){
//     console.log(`koalas wins (${averageScoreKoalas} vs ${averageScoreDolphin})`);
// }else {
//     console.log(`no team wins the competition`);
// }

// }
// checkWinner()

// const friends = new Array('modupe', 'timothy', 'odinaka')

// console.log(friends)

// function calcTip (bill){
//     if (bill >= 50 && bill <= 300) {
//        let tip =  (bill * 15)/100;
//        return tip;
//     }else {
//         let tip = (bill * 20)/100;
//         return tip
//     }
// }

// const bills = [125, 555, 44];

// const tip = new Array (calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

// console.log (tip)

// const info = {
//     firstName: 'Daniel',
//     lastName: 'Jacob',
//     job: 'Teacher',
//     age: 2023-2000,
//     course : 'chemical engineering',
//     bestCourse : 'Process analysis',
//     hisOnFirstClass: true
// }

// console.log(info['course'])

// console.log(`${info.firstName} loves ${info.bestCourse}, sometimes he finds it difficult
// , but his professor makes it simple.`)

// const verify = ()=> {
//     if(info.hisOnFirstClass){
//         return console.log(`First class`)
//     }else{
//         console.log(`he is on the part to true freedom`)
//     }
// }

// console.log(`${info.firstName} loves ${info.bestCourse}, ${info.hisOnFirstClass? 'he is even on first class':'he is trying'}`)

//code challenge
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     let tip = (bill * 15) / 100;
//     return tip;
//   } else {
//     let tip = (bill * 20) / 100;
//     return tip;
//   }
// }
// for (i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   let result = tip + bills[i];
//   totals.push(result);
// }

// console.log(totals);
// console.log(tips);

// function calcAverage(arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return average;
// }

// console.log(calcAverage(totals));

// code challenge
// const arr = [17, 21, 23]
// const data2 = [12,5,-5,0,4]

// function printForeCast (arr){
//   for (i=0; i<arr.length; i++){
//     console.log(`it is ${arr[i]}°C on day ${i+1}`) ;
//   }

// }

// printForeCast(arr)
// printForeCast(data2)

// project one code challenge
// Guess my number

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector(".top").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No Number input");
  } else if (guess > number) {
    if (score > 1) {
      displayMessage("📈 too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = "0";
    }
  } else if (guess < number) {
    if (score > 1) {
      displayMessage("📉 too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = "0";
    }
  } else if (guess === number) {
    displayMessage("🏆 correct you guessed right ");
    
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".number").textContent = guess;
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("html").style.backgroundColor = "green";
    if (score > highScore){
      highScore = score
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing....");
  document.querySelector(".number").textContent = "?";
  document.querySelector("html").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "12rem";
  document.querySelector(".guess").value = "";
});
