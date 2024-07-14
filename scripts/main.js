// let myImage = document.querySelector("img");

// document.querySelector("img").addEventListener("click", () => {
//     let mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/cisco-png-logo.png") {
//         myImage.setAttribute("src", "images/cisco2.png");
//     } else {
//         myImage.setAttribute("src", "images/cisco-png-logo.png");
//     }
// });
  
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/cisco-png-logo.png") {
//     myImage.setAttribute("src", "images/cisco2.png");
//   } else {
//     myImage.setAttribute("src", "images/cisco-png-logo.png");
//   }
// };

// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// function setUserName() {
//     let myName = prompt("请输入你的名字。");
//     if(!myName){
//         setUserName();
//     }else{
//         localStorage.setItem("name", myName);
//         myHeading.textContent = "Mozilla 酷毙了，" + myName;
//     }
// }
// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "Mozilla 酷毙了，" + storedName;
//   }
// myButton.onclick = function () {
//     setUserName();
// };  
