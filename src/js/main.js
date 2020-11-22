import { desktopApp, dockApp, appList } from "../applications/applications.js"

import "../animation/animation.js"
import "../components/components.js"

let main = document.querySelector("#main");
let fullScreenBtn = document.querySelector("#full-screen-btn");
let desktopArea = document.querySelector("#desktop");
let dockArea = document.querySelector(".dock");
let startupListArea = document.querySelector(".app");

// 已打开的应用的列表
window.hasOpenAppList = [];
// 右键菜单
window.customContextMenu = null;

// 初始化
(function init() {
    desktopFullScreen(fullScreenBtn, main);
    loadingApplications(desktopArea, desktopApp);
    loadingApplications(dockArea, dockApp);
    loadingApplications(startupListArea, appList);
})();
// 全屏(触发全屏的按钮, 要全屏的元素)
function desktopFullScreen(triggerBtn, targetEl) {
    triggerBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            targetEl.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
}
// 加载应用列表(加载的区域，应用列表)
function loadingApplications(area, applications) {
    applications.forEach((element,index) => {
        renderIcon(area, element, index);
    });
}
// 渲染图标
function renderIcon(area, element, index) {
    let { icon, name } = element;
    let iconEl = document.createElement("div");
    iconEl.classList.add("app-icon-wrapper");
    iconEl.style.left = index * 90 + "px";
    // 可拖拽
    iconEl.setAttribute("draggable", "true");

    iconEl.addEventListener("dragstart", handleDragStart);
    iconEl.addEventListener("dragend", handleDragEnd);
    area.addEventListener("dragover", handleDragOver);

    // box
    let offsetX = 0;
    let offsetY = 0;
    function handleDragStart(e) {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    }
    function handleDragEnd(e) {
        e.preventDefault()
        let left = e.clientX - offsetX - 16 - 30;
        let top = e.clientY - offsetY - 16 - 5;

        e.path[1].style.left = left + "px";
        e.path[1].style.top = top + "px";
    }
    // target
    function handleDragOver(e) {
        e.preventDefault()
    }
    // 
    iconEl.innerHTML = 
    `
        <img class="app-icon" src="./images/applications/${icon}">
        <span>${name}</span>
    `;
    // 加载dock 的应用不需要应用名
    if (area.classList[0] === "dock") {
        iconEl.innerHTML = `<img class="app-icon" src="./images/applications/${icon}">`;
    }
    // 给图标绑定点击事件
    iconEl.addEventListener("click", () => {
        element.start();
    })
    area.appendChild(iconEl);
}
// 回到开始页面
// 屏保 10 秒自动锁屏
// setTimeout( () => {
//     enterBeforeEnter()
// }, 1000)





// let appIcon = document.createElement("img");

//     appIcon.setAttribute("draggable", "true");
//     appIcon.classList.add("app-icon")
//     appIcon.setAttribute("src", `./images/applications/${icon}`);

//     iconEl.appendChild(appIcon);

//     let appName = document.createElement("span");
//     appName.innerHTML = `${name}`
//     iconEl.appendChild(appName);

//     // 可拖拽

//     appIcon.addEventListener("dragstart", handleDragStart);
//     appIcon.addEventListener("dragend", handleDragEnd);
//     area.addEventListener("dragover", handleDragOver);

    // box
    let offsetX = 0;
    let offsetY = 0;
    function handleDragStart(e) {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        // console.log(e.DataTransfer);
    }
    function handleDragEnd(e) {
        let left = e.clientX - offsetX - 7;
        let top = e.clientY - offsetY - 7;

        e.target.style.left = left + "px";
        e.target.style.top = top + "px";
    }
    // target
    function handleDragOver(e) {
        e.preventDefault()
    }




