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
当前版本: Release - 1.1.0
更新日期: 2024-7-21
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

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

const songs = [
    {
        title: "Midnight Moonlie",
        artist: "Pilot1337",
        src: "./audios/song1.wav",
        cover: "./images/covers/cover1.jpg"
    },
    {
        title: "天気 / Sunny day",
        artist: "Pilot1337",
        src: "./audios/song2.wav",
        cover: "./images/covers/cover2.jpg"
    },
    {
        title: "Demo 3",
        artist: "Pilot1337",
        src: "./audios/song3.wav",
        cover: "./images/covers/cover3.jpg"
    }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function playSong() {
    audio.play();
    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
        </svg>`;
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
        </svg>`;
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;

    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

// 初始加载歌曲
loadSong(songs[songIndex]);