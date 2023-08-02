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

//2. Create a random quote generator that displays a new quote from an array of quotes when a "Generate Quote" button is clicked.

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

//3. Create a form with name and email fields. Display an error message if the name is empty or the email format is invalid when a "Submit" button is clicked.
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
//4. Create a typing speed tester that displays a random sentence and calculates the typing speed (words per minute) when the user finishes typing.

const randomSentences = [
  "She liked stripes, on her clothes, her wall art, even her cutlery.",
  "I'm cutting down on sweets.",
  "He had always thought that the back of cars looked like faces.",
  "My hands are too big to fit into these gloves.",
  "I am the biggest Ariana Grande fan on the planet.",
  "Every child likes an ice cream.",
  "She found an old piece of paper under the fridge that had writing all over it.",
  "We took refuge behind a tree.",
  "São Paulo is the biggest producer of eggs in the country.",
  "She forgot to water the plant for two months.",
  "I was scared to go to a monster movie, but my dad said he would sit with me, so we went last night.",
  "The giant worm terrified him.",
  "I think you need to make a few different choices to get yourself where you want to be.",
  "It’s as dry as a bone.",
  "In Chicago, in December, it got dark at 4 pm.",
  "Your neighbor cut down my trees.",
  "Get away from me, you slimy little worm!",
  "Don’t open the door!",
  "Where do you come from?",
  "Why didn't you just call the police?",
];

function calculateTypingSpeed() {
  const userInput = document.getElementById("userInput");
  const typingSpeed = document.getElementById("typingSpeed");
  const text = userInput.value;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const timeInMinutes = text.length / 4 / 60;
  const wpm = Math.round(words / timeInMinutes);
  typingSpeed.textContent = `Typing Speed: ${wpm} WPM`;
}

document.addEventListener("DOMContentLoaded", function () {
  const randomSentenceInternal = document.getElementById("randomSentence");

  function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * randomSentences.length);
    return randomSentences[randomIndex];
  }

  const randomQuote = getRandomSentence();
  randomSentenceInternal.innerText = randomQuote;
});

//5. Create a password strength meter that evaluates the strength of a password and provides feedback as the user types.
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
  const symbolCheck = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  return symbolCheck.test(password);
}

//6. Create an image slider with previous and next buttons for manual navigation. The slider should also have an auto-play feature.
let initialImageIndex = 0;
let isAutoPlayActive = true;
function nextSlide() {
  const images = document.querySelectorAll(".image");
  images[initialImageIndex].style.display = "none";
  initialImageIndex = (initialImageIndex + 1) % images.length;
  images[initialImageIndex].style.display = "block";
}

function prevSlide() {
  const images = document.querySelectorAll(".image");
  images[initialImageIndex].style.display = "none";
  initialImageIndex = (initialImageIndex - 1 + images.length) % images.length;
  images[initialImageIndex].style.display = "block";
}

let slideInterval;
function toggleAutoPlay() {
  function startAutomaticSlideshow(intervalTime) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutomaticSlideshow() {
    clearInterval(slideInterval);
  }

  function stopAutomaticSlideshow() {
    clearInterval(slideInterval);
  }

  startAutomaticSlideshow(1200);
}

//7. Create a "Scroll to Top" button that appears when the user scrolls down and takes them to the top of the page when clicked.

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//8. Create a countdown timer that starts from a specified time and updates in real-time until it reaches zero.

function startTimer() {
  let minutesInput = document.getElementById("minutes");
  let secondsInput = document.getElementById("seconds");
  let timerDisplay = document.getElementById("timer");

  let minutes = Number(minutesInput.value) || 0;
  let seconds = Number(secondsInput.value) || 0;

  let totalTime = minutes * 60 + seconds;

  let interval = setInterval(function () {
    if (totalTime <= 0) {
      clearInterval(interval);
      timerDisplay.textContent = "Time's up!";
      return;
    }

    let displayMinutes = Math.floor(totalTime / 60);
    let displaySeconds = totalTime % 60;

    timerDisplay.textContent = `${displayMinutes}:${displaySeconds
      .toString()
      .padStart(2, "0")}`;

    totalTime--;
  }, 1000);
}
//9. Write a JavaScript function that accepts a row, column (to identify a particular cell) and a string to update the cell's contents.
function changeContent() {
  const row = Number(prompt("Enter row number (starting from 1):")) - 1;
  const column = Number(prompt("Enter column number (starting from 1):")) - 1;
  const content = prompt("Enter new content:");

  const table = document.getElementById("myTable");
  const rows = table.getElementsByTagName("tr");

  if (row >= 0 && row < rows.length) {
    const cells = rows[row].getElementsByTagName("td");
    if (column >= 0 && column < cells.length) {
      cells[column].textContent = content;
    } else {
      alert("Invalid column number");
    }
  } else {
    alert("Invalid row number");
  }
}
// 10. Write a JavaScript function to parameterize a string.

function stringParameterize(inputString) {
  return inputString
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
console.log(stringParameterize("Robin Singh from USA."));
