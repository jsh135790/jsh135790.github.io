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
1. 本主页基于现代布局进行设计编写 仅使用原生HTML CSS JS.
2. 本主页完全开源 欢迎你进行任何的修改以及更新 但是我不建议你:
    1)未经本人允许私自售卖本主页源码或进行任何形式的商业行为
    2)对外宣称是你自己写的东西
特别鸣谢: 小米字体(Misans).
🏠官网:  ${offiUrl}
Copyright @ 2024 by Pilot1337[飞行员]
`;

var lines = content.trim().split('\n');
var gradientColors = generateGradientColors('#1e98ff', '#ff68bb', lines.length);

console.log(`%c${title_heading} %c${title_sub}`, style_heading, style_subtitle);

lines.forEach((line, index) => {
    console.log(`%c${line}`, `color: ${gradientColors[index]}; font-family: "Misans", sans-serif;`);
});

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


function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var tcMainElement = document.querySelector(".popup-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".popup-main", "active");
    toggleClass(".popup-container", "active");
}

var popup = document.getElementsByClassName('popup-container');
var popup_main = document.getElementsByClassName('popup-main');
popup[0].addEventListener('click', function (event) {
    pop();
});
popup_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.getElementById('toggle-switch');
    var snk = document.getElementById("profile-snake");

    // 检查本地存储以查看上次的主题设置
    if (localStorage.getItem('theme') === 'dark') {
        toggleSwitch.checked = true;
        enableDarkTheme();
    } else {
        toggleSwitch.checked = false;
        disableDarkTheme();
    }

    // 添加事件监听器
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            enableDarkTheme();
            localStorage.setItem('theme', 'dark');
        } else {
            disableDarkTheme();
            localStorage.setItem('theme', 'light');
        }
    });

    function enableDarkTheme() {
        document.documentElement.setAttribute('data-theme', 'dark');
        // 这里可以添加更多切换到暗主题的代码，例如更改CSS变量或类
        snk.src = "https://raw.githubusercontent.com/jsh135790/jsh135790/output/github-contribution-grid-snake-dark.svg";
    }

    function disableDarkTheme() {
        document.documentElement.setAttribute('data-theme', 'light');
        // 这里可以添加更多切换到亮主题的代码，例如更改CSS变量或类
        snk.src = "https://raw.githubusercontent.com/jsh135790/jsh135790/output/github-contribution-grid-snake.svg";
    }
});

var on_load = document.querySelector("#html-loading");
window.addEventListener('load', function() {
    setTimeout(function () {
        on_load.style.opacity = '0';
    }, 100);
});