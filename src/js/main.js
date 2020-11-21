import { Window } from "./Window.js"
import { desktopApp, dockApp, appList } from "../applications/applications.js"
import { App } from "./App.js"

import "./animation/animation.js"

let main = document.querySelector("#main");
let fullScreenBtn = document.querySelector("#full-screen-btn");
let desktopArea = document.querySelector("#desktop");
let dockArea = document.querySelector(".dock");
let startupListArea = document.querySelector(".app");

window.hasOpenAppList = [];

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
            doc.exitFullscreen();
        }
    })
}
// 加载应用列表(加载的区域，应用列表)
function loadingApplications(area, applications) {
    applications.forEach(element => {
        renderIcon(area, element);
    });
}
// 渲染图标
function renderIcon(area, element) {
    let { icon, name } = element;
    let iconEl = document.createElement("div");
    iconEl.classList.add("app-icon-wrapper");
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






