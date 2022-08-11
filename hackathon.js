
var summary = {};


const learningSteps = { //key[0] is description, key[1] is points value, key[2] is time zone (for live workshops/classes only)
    A: ["Intro to JavaScript Workshops", 5, "EST and PST"],
    B: ["CSX Precourse: Parts 1 and 2", 5],
    C: ["JavaScript For Beginners", 10, "EST"],
    D: ["CSX: Functions & Execution Context, Callbacks & Higher Order Functions, and Pair Programming", 15],
    E: ["CS Prep", 25, "EST and PST"],
    F: ["JavaScript the Hard Parts Workshops", 15, "EST and PST"],
    G: ["CSX: Closure/Scope/Execution Context and Recursion", 15],
    H: ["CSX: Asynchronous JavaScript and Object Oriented Programming", 10]
  }
  
  const userData = { //defaults if user doesn't enter info
    name: "Friend",
    location: "Earth", // Consider asking for timezone rather than location? - T
    xp: 0
  }
  
  function pointsCalculator (points){
    userData.xp += points;
  }
  
  function codesmithLive (program, timeZones) {
    alert(`Visit codesmith.io for more info on upcoming dates for ${program} in ${timeZones} to see what will work best for you in ${userData.location}!`);
  }
  
  function welcome(){
    let name = prompt("Welcome future Codesmither! Please tell us your name... ");
    if(name) userData.name = name; //re-assigning value from default
    let location = prompt("Where do you currently live?");
    if(location) userData.location = location;
    //console.log(userData); //un-comment to test if data is saved in userData correctly
    stepsQuestions(pointsCalculator); //calling next function in game sequence, passing in a callback function
  }
  
  
  function stepsQuestions(callback){ //higher order function
    for (let key in learningSteps){ //iterates through each key in our learningSteps object
      let confirmation = confirm(`Have you completed ${learningSteps[key][0]}?
  If so, press 'OK'. If not, press 'Cancel'.`);
      if(confirmation){
        callback(learningSteps[key][1]);
      } else {
        alert(`${userData.name}, you currently have ${userData.xp} XP!
  Please complete ${learningSteps[key][0]} to gain more XP.`);
        switch(key){ //switch statement with 'cases'
          case "A": //if key matches any of these values
          case "C":    //we will give them info about
          case "E":    //codesmith workshops in different
          case "F":    //times zones w/ codesmithLive func
            codesmithLive(learningSteps[key][0], learningSteps[key][2]);
            break;
        }
        return;
      }
    }
    endGame();
  }
  
  function endGame(){
     alert(`Congratulations ${userData.name}, you currently have ${userData.xp} XP! Are you ready to take the technical interview? Let's test your knowledge with a short quiz.`);
    takeQuiz();
  }
  
  function buildQuiz() {
    let qScore = 0;
    const questions = [
      {
        prompt: "Q1: When a function is invoked, this is true: \n\na: The parameters and arguments are paired. \n\nb: There must be a defined return value. \n\nc: The stack frame is pushed onto global memory. \n\nd: Global memory cannot be accessed until we exit the local execution context.",
        answer: "a"
      },
      {
        prompt: "Q2: The difference between spread syntax and rest parameters is: \n\na: Spread - break up your input into the individual bits that represent the data. Rest - Parameters that pause your function for a specified amount of time. \n\nb: Spread - allows you to use a single variable to represent all of the elements in an array or object. Rest - Parameters that pause your function for a specified amount of time. \n\nc: Spread - allows you to use a single variable to represent all of the elements in an array or object. Rest - Allows for the input of an indefinite number of arguments into a function. \n\nd: Spread - break up your input into the individual bits that represent the data. Rest - Allows for the input of an indefinite number of arguments into a function.",
        answer: "c"
      },
      {
        prompt: "Q3: What is recursion?: \n\na: What is recursion? \n\nb: A way to describe any problem solving method that is particularly tedious. \n\nc: An easy way to run out of memory. \n\nd: A problem solving method where a function calls itself to solve smaller instances of the same problem.",
        answer: "d"
      },
      {
        prompt: "Q4: Which Big O notation is generally considered most desireable? : \n\na: n. \n\nb: log(n). \n\nc: n log(n). \n\nd: n!",
        answer: "b"
      },
      {
        prompt: "Q5: What is the main draw of using closure?: \n\na: It gives you access to an outer function's scope from an inner function. \n\nb: It allows for the special operation called \"no scope\". \n\nc: It closes off the function from the global execution context. \n\nd: It has a cool name, but it's otherwise useless.",
        answer: "a"
      },
      ]
    function quiz() {
      // 5 questions total, multiple choice, prompt with answers in prompt, ask for letter (a, b, c, d)
      let dum = " "
      for (let i = 0; i < questions.length; ++i) {
        dum = prompt(questions[i].prompt, "")
        let q = questions[i].prompt.split(":")[1];
        if (dum.toLowerCase() == questions[i].answer) {
          ++qScore;
          summary[q] = true;
        }

        else {
            summary[q] = false;
        }
      }
  
      if (qScore > 3) {
        confirm(`Congratulations! You got a ${qScore*20}% on the quiz. You are well prepared for the technical interview!`)
      }
      else {
        let retake = prompt(`You got a ${qScore*20}% on the quiz. Keep Practicing!`)
        if (retake.toLowerCase() == "y") {
          quiz()
        }
        else {
          confirm("Thank you for taking our quiz.")
        }
      }
    }
    return quiz;
  }
  
  const takeQuiz = buildQuiz()
  
  //
  welcome(); //START GAME by invoking first function


