import { Window } from "./Window.js"
import { desktopApp, dockApp } from "../data/applications.js"
import { App } from "./App.js"

import "./animation.js"

(function (doc) {
    let main = doc.querySelector("#main");
    let fullScreenBtn = doc.querySelector("#full-screen-btn");
    let desktopArea = doc.querySelector("#desktop");
    let dockArea = doc.querySelector(".dock");
    // 用来保存以打开的应用程序
    let openAppList = [];

    // 初始化
    ( function init () {
        fullScreen(fullScreenBtn, main);
        loadingApplications (desktopArea, desktopApp);
        loadingApplications (dockArea, dockApp);
    })();

    // 全屏(触发全屏的按钮, 要全屏的元素)
    function fullScreen (triggerBtn, targetEl) {
        triggerBtn.addEventListener("click", () => {
            if (!doc.fullscreenElement) {
                targetEl.requestFullscreen();
            } else {
                doc.exitFullscreen();
            }
        })
    }

    // 应用程序列表 打开/关闭
    // applicationBtn.addEventListener("click", () => {
    //     if (!applicationList.classList.length) {
    //         console.log(1);
    //         applicationList.classList.add("active");
    //         desktopArea.style.display = "none";
    //     } else {
    //         applicationList.classList.remove("active");
    //         desktopArea.style.display = "grid";
    //     }
    // })
    // 应用程序的打开方法，参数 应用程序的名字
    function openApplication (name) {

        let hasOpenThisApp = openAppList.filter( (item) => {
            return item.applicationName === name;
        })

        if (hasOpenThisApp.length === 0) {
            // let newWindow = new Window(name);
            // openAppList.push(newWindow);
            // newWindow.open(openAppList);

            let app = new App(name);
            let template = document.createElement("div");
            template.classList.add("template-wrapper");
            template.innerHTML = `<div class="window-main">${name}</div>`;
            app.open(main, openAppList, template);
        }


    }
    // 加载应用列表(加载的区域，应用列表)
    function loadingApplications (area, applications) {

        applications.forEach(element => {

            let app = document.createElement("div");
            app.classList.add("app-icon");
            app.innerHTML = `<img src="./images/applications/${element.icon}">`;
            // 绑定打开事件
            app.addEventListener("click", () => {
                openApplication (element.name);
            })
            area.appendChild(app);
        });
    }
})(document);






