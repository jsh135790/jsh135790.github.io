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
当前版本: Release - 1.3.0
更新日期: 2024-7-22
版权声明：
1. 本主页基于现代布局进行设计编写 仅使用原生HTML CSS JS.
2. 本主页完全开源 欢迎你进行任何的修改以及更新 但是我不建议你:
    1)未经本人允许私自售卖本主页源码或进行任何形式的商业行为
    2)对外宣称是你自己写的东西
特别鸣谢: 小米字体(Misans) Zyyo个人主页.
🏠官网:  ${offiUrl}
Copyright @ 2024 by Pilot1337[飞行员]
备忘录: 更新双语模式.
`;

var lines = content.trim().split('\n');
var gradientColors = generateGradientColors('#1e98ff', '#ff68bb', lines.length);

console.log(`%c${title_heading} %c${title_sub}`, style_heading, style_subtitle);

lines.forEach((line, index) => {
    console.log(`%c${line}`, `color: ${gradientColors[index]}; font-family: "Misans", sans-serif;`);
});

document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popup-queue');

    function getCurrentGreeting() {
        const hours = new Date().getHours();
        if (hours < 12) {
            return { message: '早上好！', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>' };
        } else if (hours < 18) {
            return { message: '下午好！', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>' };
        } else {
            return { message: '晚上好！', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>' };
        }
    }

    function showPopup(popup) {
        const popupElement = document.createElement('div');
        popupElement.classList.add('popup');
        popupElement.innerHTML = `
            ${popup.icon}
            <strong>${popup.message}</strong> ${popup.content}`;
        popupContainer.appendChild(popupElement);

        // Show the popup with animation
        setTimeout(() => {
            popupElement.classList.add('show');

            // Hide the popup after the duration
            setTimeout(() => {
                popupElement.classList.add('hide');
                popupElement.classList.remove('show');

                // Remove the popup from the DOM after the animation
                setTimeout(() => {
                    popupContainer.removeChild(popupElement);
                }, 500);
            }, popup.duration);
        }, popup.delay);
    }

    function addPopup(message, content = '', icon, delay = 0, duration = 3000) {
        const popup = { message, content, icon, delay, duration };
        showPopup(popup);
    }

    addPopup('', '欢迎来到我的个人主页', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>', 1000, 4000);
    
    // Show initial greeting popup
    const greeting = getCurrentGreeting();
    
    setTimeout(() => {
        addPopup(greeting.message, '今天也要快乐哦！', greeting.icon, 1000, 4000);
    }, 2000);
    // Expose addPopup function to the global scope for testing
    window.addPopup = addPopup;
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
    cover.classList.remove('expanded');
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
        </svg>`;
    cover.classList.add('expanded');
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