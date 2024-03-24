import inquirer from "inquirer";
const randomNumber: number = Math.floor(Math.random()* 10 +1);

let tries:number = 5;
while(tries>=0){
   tries--;
     const answer = await inquirer.prompt([
        {
            name: "numberinput",
            type: "number",
            message: "please guess a number: ",
        },
     ]);
     if (answer.numberinput === randomNumber){
        console.log("congratulation your guess number absolutely correct");
      } else{
     console.log("sorry you guess wrong number try again");
      }   
     
}