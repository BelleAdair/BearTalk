/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
// const btn = document.querySelector("button"); // Get the button from the page
// if (btn) { // Detect clicks on the button
//   btn.onclick = function () {
//     // The 'dipped' class in style.css changes the appearance on click
//     btn.classList.toggle("dipped");
//   };
// }

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
// let goto = (file, line) => {
//   window.parent.postMessage(
//     { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
//   );
// };
// Get the file opening button from its class name
// const filer = document.querySelectorAll(".fileopener");
// filer.forEach((f) => {
//   f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
// });

// const form1 = document.querySelector("#Textbox");
// const input1 = document.querySelector("#input1");
// const list_el1 = document.querySelector("#task1");

// form1.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const task1 = input1.value;

//   const task_el1 = document.createElement("div");
//   task_el1.classList.add("Task");

//   const task_content_el1 = document.createElement("div");
//   task_content_el1.classList.add("content");

//   task_el1.appendChild(task_content_el1);

//   const task_input_el1 = document.createElement("input");
//   task_input_el1.classList.add("text");
//   task_input_el1.type = "text";
//   task_input_el1.value = task1;
//   task_input_el1.setAttribute("readonly", "readonly");

//   task_content_el1.appendChild(task_input_el1);

//   const task_actions_el1 = document.createElement("div");
//   task_actions_el1.classList.add("actions");
// });

let enterbutton = document.getElementById("enter");
let Textbox = document.getElementById("Textbox");
let Input = document.getElementById("Input1");

enterbutton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = Input.value;
  Textbox.appendChild(paragraph);
  Input.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    Textbox.removeChild(paragraph);
  });
});

function speak() {
  const text = document.getElementById("Input1").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function pause(){
  speechSynthesis.pause();
}

function resume(){
  speechSynthesis.resume();
}

function stop(){
  speechSynthesis.cancel();
  
}




