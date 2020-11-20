import { Window } from "./Window.js"
import { desktopApp, dockApp } from "../applications/applications.js"
import { App } from "./App.js"

import "./animation.js"

(function (doc) {
    let main = doc.querySelector("#main");
    let fullScreenBtn = doc.querySelector("#full-screen-btn");
    let desktopArea = doc.querySelector("#desktop");
    let dockArea = doc.querySelector(".dock");
    // 用来保存以打开的应用程序
    let hasOpenAppList = [];

    // 初始化
    ( function init () {
        desktopFullScreen(fullScreenBtn, main);
        loadingApplications (desktopArea, desktopApp);
        loadingApplications (dockArea, dockApp);
    })();
    // 全屏(触发全屏的按钮, 要全屏的元素)
    function desktopFullScreen (triggerBtn, targetEl) {
        triggerBtn.addEventListener("click", () => {
            if (!doc.fullscreenElement) {
                targetEl.requestFullscreen();
            } else {
                doc.exitFullscreen();
            }
        })
    }

    // 加载应用列表(加载的区域，应用列表)
    function loadingApplications (area, applications) {

        applications.forEach(element => {
            // let app = new App(element.appName);
            renderIcon(area, element);
            // console.log(element);
        });
    }
    // 渲染图标
    function renderIcon (area, element) {
        let { icon, name } = element;
        let iconEl = document.createElement("div");
        iconEl.classList.add("app-icon-wrapper");
        iconEl.innerHTML = `<img class="app-icon" src="./images/applications/${icon}">${name}`;
        // 加载dock 的应用不需要应用名
        if (area.classList[0] === "dock") {
            iconEl.innerHTML = `<img class="app-icon" src="./images/applications/${icon}">`;
        }
        // 给图标绑定点击事件
        iconEl.addEventListener ("click", () => {
            // this.iconClickEvent ();
            element.start(hasOpenAppList);
            // hasOpenAppList.push(element);
        })
        area.appendChild(iconEl);
    }
})(document);






