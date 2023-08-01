"use strict";
// 1.Create a simple calculator that takes two numbers and an operator (+, -, *, or /) as input and displays the result when a "Calculate" button is clicked.

function calculate() {
  const numOne = Number(document.getElementById("num1").value);
  const operator = document.getElementById("operator").value;
  const numTwo = Number(document.getElementById("num2").value);

  let result;

  if (operator === "+") {
    result = numOne + numTwo;
  } else if (operator === "-") {
    result = numOne - numTwo;
  } else if (operator === "*") {
    result = numOne * numTwo;
  } else if (operator === "/") {
    result = numOne / numTwo;
  } else {
    console.error("Invalid operator");
    return;
  }
  document.getElementById("result").textContent = result;
}
calculate();

function generateQuote() {
  const quote = document.getElementById("quote");
  const famousQuotes = [
    "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. - Carl Sagan",
    "Everything is theoretically impossible until it is done. - Robert A. Heinlein",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. - Isaac Asimov",
    "If we knew what it was we were doing, it would not be called research, would it? - Albert Einstein",
    "There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance. - Hippocrates",
    "Science is magic that works. - Kurt Vonnegut",
    "Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge. - Thomas Edison",
    "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual. - Galileo Galilei",
    "The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists. - Erwin Schrödinger",
    "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence. - Nikola Tesla",
    "Hindu Dharma is like a boundless ocean teeming with priceless gems. The deeper you dive the more treasures you find. ~ Mahatma Gandhi",
  ];
  const randomIndex = Math.floor(Math.random() * famousQuotes.length);
  const randomQuote = famousQuotes[randomIndex];
  quote.innerText = randomQuote;
}
generateQuote();

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("error");

  if (name === "") {
    errorMessage.innerText = "Enter your username";
  } else if (email === "") {
    errorMessage.innerText = "Enter your email";
  } else if (!email.includes("@")) {
    errorMessage.innerText = "Enter a valid email";
  } else {
    errorMessage.innerText = "Success";
  }
}

// const randomSentences = [
//   "She liked stripes, on her clothes, her wall art, even her cutlery.",
//   "I'm cutting down on sweets.",
//   "He had always thought that the back of cars looked like faces.",
//   "My hands are too big to fit into these gloves.",
//   "I am the biggest Ariana Grande fan on the planet.",
//   "Every child likes an ice cream.",
//   "She found an old piece of paper under the fridge that had writing all over it.",
//   "We took refuge behind a tree.",
//   "São Paulo is the biggest producer of eggs in the country.",
//   "She forgot to water the plant for two months.",
//   "I was scared to go to a monster movie, but my dad said he would sit with me, so we went last night.",
//   "The giant worm terrified him.",
//   "I think you need to make a few different choices to get yourself where you want to be.",
//   "It’s as dry as a bone.",
//   "In Chicago, in December, it got dark at 4 pm.",
//   "Your neighbor cut down my trees.",
//   "Get away from me, you slimy little worm!",
//   "Don’t open the door!",
//   "Where do you come from?",
//   "Why didn't you just call the police?",
// ];

// function calculateTypingSpeed() {
//   const randomSentenceInternal = document.getElementById("randomSentence");
//   const textArea = document.getElementById("userInput");
//   const typingSpeed = document.getElementById("typingSpeed");

//   const randomIndex = Math.floor(Math.random() * randomSentences.length);
//   const randomQuote = randomSentences[randomIndex];
//   randomSentenceInternal.innerText = randomQuote;
// }

function checkPasswordStrength() {
  const passEle = document.getElementById("password").value;
  const passStrength = document.getElementById("passwordStrength");
  if (passEle.length >= 8) {
    if (containsSymbols(passEle)) {
      passStrength.textContent =
        "Password strength: Very good (contains symbols)";
    } else {
      passStrength.textContent =
        "Password strength: Good (more than 8 characters)";
    }
  } else {
    passStrength.textContent =
      "Password strength: Negative feedback (less than 8 characters)";
  }
}

function containsSymbols(password) {
  const symbolPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  return symbolPattern.test(password);
}

