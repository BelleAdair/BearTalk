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


const words = document.querySelector("Textbox")
const input = document.querySelector("input1")

form.addEventListener('submit', (e) => {
      e.preventDefault();
      
   const 
})
// const form1 = document.querySelector("#new-task-form1");
// const input1 = document.querySelector('#new-task-input1');
// const list_el1 = document.querySelector("#tasks1");

//  form1.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const task1 = input1.value;

//         //I added a notification for the urgent list
//         if(task1){
//           alert("Please complete your" + " "+ task1)
//         }

//         // (notification if there's no input from user)
//         if (!task1){
//           alert("Please fill out your task!");
//           return;
//         }
        
//         const task_el1 = document.createElement("div");
//         task_el1.classList.add("task");

//         const task_content_el1 = document.createElement("div");
//         task_content_el1.classList.add("content");
        

//         task_el1.appendChild(task_content_el1);

//         const task_input_el1 = document.createElement("input");
//         task_input_el1.classList.add("text");
//         task_input_el1.type = "text";
//         task_input_el1.value = task1;
//         task_input_el1.setAttribute("readonly", "readonly");

//         task_content_el1.appendChild(task_input_el1);

//         const task_actions_el1 = document.createElement("div");
//         task_actions_el1.classList.add("actions");

//         const task_delete_el1 = document.createElement("button");
//         task_delete_el1.classList.add("delete");
//         task_delete_el1.innerHTML = "Delete";

//         task_actions_el1.appendChild(task_delete_el1);

//         task_el1.appendChild(task_actions_el1);
//         list_el1.appendChild(task_el1);

//         input4.value = "";

//         task_delete_el1.addEventListener('click', (e) => {
// 			list_el1.removeChild(task_el1);
// 		});
//     })
