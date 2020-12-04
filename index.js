const readline = require('readline-sync');
const chalk = require('chalk');

var username = readline.question("Enter your username ");

console.log();
console.log(chalk.green("------------ Welcome to the F.R.I.E.N.D.S quiz " + username +"! ---------------"));


// variables
var score = 0;
var questions = [];
var options = [];
var q, answer;

//add function
function addQuestion(question, option, a, m) {
  var obj = {};
  obj.question = question;
  obj.options = option;
  obj.answer = a;
  obj.marks = m;
  questions.push(obj);  
}

//quiz function
function quiz() {
  for(var i = 0; i < questions.length; i++) {
    console.log();
    console.log("Q. " + questions[i].question);
    for(var j = 0; j < questions[i].options.length; j++) {
      console.log(j + 1 + ". " + questions[i].options[j]);
    }
    var select = readline.question(chalk.blueBright("Enter your answer: "));
    if(select == questions[i].answer) {
      score += questions[i].marks;
      console.log();
      console.log(chalk.blue("Spot on! " + "Your score is " + score));
    }
    else {
      console.log();
      console.log(chalk.red("Wrong!" + " Your score is " + score));
    }
  }
  console.log();
  console.log(chalk.green(username +" Your final score is " + score));
  console.log(chalk.green("Thanks for having a go. Have a nice one!"));
} 

//questions1
q = "What is my favourite sport?"
options = ["Cricket", "Football"];
answer = 2;
marks = 1;
addQuestion(q, options, answer, marks);



//questions2
q = "Which Football club I suppport?";
options = ["Manchester United", "Liverpool"];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);

//questions3
q = "Where do I live?";
options = ["Pune", "Aurangabad"];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);

////questions4
q = "Do I know how to cook?";
options = ["Yes", "No"];
answer = 2;
marks = 1;
addQuestion(q, options, answer, marks);




//questions5
q = "My favourite food?";
options = ["Maa ke hat ki Khichadi", "Pizza"];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);




quiz();

