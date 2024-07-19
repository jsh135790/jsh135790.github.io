console.clear();

// 样式代码
var style_heading = `
font-size: 20px;
font-weight: 600;
color: deeppink;
`;
var style_subtitle = `
font-family: "Misans", sans-serif;
font-size:14px;
color: deeppink;
font-weight: 400;
`;

// 渐变颜色生成函数
function generateGradientColors(startColor, endColor, steps) {
    let start = parseInt(startColor.slice(1), 16);
    let end = parseInt(endColor.slice(1), 16);
    let start_r = (start >> 16) & 0xff;
    let start_g = (start >> 8) & 0xff;
    let start_b = start & 0xff;
    let end_r = (end >> 16) & 0xff;
    let end_g = (end >> 8) & 0xff;
    let end_b = end & 0xff;
    let step_r = (end_r - start_r) / (steps - 1);
    let step_g = (end_g - start_g) / (steps - 1);
    let step_b = (end_b - start_b) / (steps - 1);

    let colors = [];
    for (let i = 0; i < steps; i++) {
        let r = Math.round(start_r + step_r * i);
        let g = Math.round(start_g + step_g * i);
        let b = Math.round(start_b + step_b * i);
        colors.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`);
    }
    return colors;
}

// 内容代码
var title_heading = '👀 Pilot1337 ';
var title_sub = '关于本页的说明';
var offiUrl = 'https://nightmare.plus';
var content = `
当前版本: Release - 1.0.0
更新日期: 2024-7-19
版权声明：
1. 本主页基于Zyyo主页进行优化与设计 仅使用原生HTML CSS JS.
2. 本主页完全开源 欢迎你进行任何的修改以及更新 但是我不建议你:
    1)未经本人允许私自售卖本主页源码或进行任何形式的商业行为
    2)对外宣称是你自己写的东西
特别鸣谢: Zyyo 小米字体(Misans).
🏠官网:  ${offiUrl}
Copyright @ 2024 by Pilot1337[飞行员]
`;

var lines = content.trim().split('\n');
var gradientColors = generateGradientColors('#1e98ff', '#ff68bb', lines.length);

console.log(`%c${title_heading} %c${title_sub}`, style_heading, style_subtitle);

lines.forEach((line, index) => {
    console.log(`%c${line}`, `color: ${gradientColors[index]}; font-family: "Misans", sans-serif;`);
});

// console.log('%cCopyright @ 2024 by Pilot1337',
//     `background-color: ${gradientColors[lines.length - 1]}; color: white; font-size: 14px; font-weight: bold; padding: 10px;`
// );

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

class ButtonHandler {
    constructor(button) {
        this.button = button;
        this.handlePress = this.handlePress.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.addEventListeners();
    }

    handlePress(event) {
        this.button.classList.add('pressed');
    }

    handleRelease(event) {
        this.button.classList.remove('pressed');
    }

    handleCancel(event) {
        this.button.classList.remove('pressed');
    }

    addEventListeners() {
        const events = ['mousedown', 'mouseup', 'mouseleave', 'touchstart', 'touchend', 'touchcancel'];
        events.forEach(event => {
            if(event === 'mousedown' || event === 'touchstart'){
                this.button.addEventListener(event, this.handlePress);
            }
            if(event === 'mouseup' || event === 'touchend'){
                this.button.addEventListener(event, this.handleRelease);
            }
            if(event === 'mouseleave' || event === 'touchcancel'){
                this.button.addEventListener(event, this.handleCancel);
            }
        });
    }
}

document.querySelectorAll('.display-item').forEach(button => new ButtonHandler(button));


// function toggleClass(selector, className) {
//     var elements = document.querySelectorAll(selector);
//     elements.forEach(function (element) {
//         element.classList.toggle(className);
//     });
// }

// function pop(imageURL) {
//     var tcMainElement = document.querySelector(".tc-img");
//     if (imageURL) {
//         tcMainElement.src = imageURL;
//     }
//     toggleClass(".tc-main", "active");
//     toggleClass(".tc", "active");
// }

// var tc = document.getElementsByClassName('tc');
// var tc_main = document.getElementsByClassName('tc-main');
// tc[0].addEventListener('click', function (event) {
//     pop();
// });
// tc_main[0].addEventListener('click', function (event) {
//     event.stopPropagation();
// });



// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
// }

// function getCookie(name) {
//     var nameEQ = name + "=";
//     var cookies = document.cookie.split(';');
//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i];
//         while (cookie.charAt(0) == ' ') {
//             cookie = cookie.substring(1, cookie.length);
//         }
//         if (cookie.indexOf(nameEQ) == 0) {
//             return cookie.substring(nameEQ.length, cookie.length);
//         }
//     }
//     return null;
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var html = document.querySelector('html');
//     var themeState = getCookie("themeState") || "Light";
//     var tanChiShe = document.getElementById("tanChiShe");

//     function changeTheme(theme) {
//         tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
//         html.dataset.theme = theme;
//         setCookie("themeState", theme, 365);
//         themeState = theme;
//     }

//     var Checkbox = document.getElementById('myonoffswitch')
//     Checkbox.addEventListener('change', function () {
//         if (themeState == "Dark") {
//             changeTheme("Light");
//         } else if (themeState == "Light") {
//             changeTheme("Dark");
//         } else {
//             changeTheme("Dark");
//         }
//     });

//     if (themeState == "Dark") {
//         Checkbox.checked = false;
//     }

//     changeTheme(themeState);

//     var fpsElement = document.createElement('div');
//     fpsElement.id = 'fps';
//     fpsElement.style.zIndex = '10000';
//     fpsElement.style.position = 'fixed';
//     fpsElement.style.left = '0';
//     document.body.insertBefore(fpsElement, document.body.firstChild);

//     var showFPS = (function () {
//         var requestAnimationFrame = window.requestAnimationFrame ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame ||
//             window.oRequestAnimationFrame ||
//             window.msRequestAnimationFrame ||
//             function (callback) {
//                 window.setTimeout(callback, 1000 / 60);
//             };

//         var fps = 0,
//             last = Date.now(),
//             offset, step, appendFps;

//         step = function () {
//             offset = Date.now() - last;
//             fps += 1;

//             if (offset >= 1000) {
//                 last += offset;
//                 appendFps(fps);
//                 fps = 0;
//             }

//             requestAnimationFrame(step);
//         };

//         appendFps = function (fpsValue) {
//             fpsElement.textContent = 'FPS: ' + fpsValue;
//         };

//         step();
//     })();
// });

// var pageLoading = document.querySelector("#zyyo-loading");
// window.addEventListener('load', function() {
//     setTimeout(function () {
//         pageLoading.style.opacity = '0';
//     }, 100);
// });

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
