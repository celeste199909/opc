import { Window } from "./window.js"
(function (doc) {
    let main = doc.querySelector("#main");
    let fullScreenBtn = doc.querySelector("#full-screen-btn");
    let desktopArea = doc.querySelector("#desktop");
    let applicationBtn = doc.querySelector(".application-list-btn");
    let applicationList = doc.querySelector("#app");

    // 初始化
    ( function init () {
        fullScreen(fullScreenBtn, main);
    })();

    // 全屏(触发全屏的按钮, 要全屏的元素)
    function fullScreen (triggerEl, targetEl) {
        triggerEl.addEventListener("click", () => {
            if (!doc.fullscreenElement) {
                targetEl.requestFullscreen();
                triggerEl.classList.add("active");
            } else {
                doc.exitFullscreen();
                triggerEl.classList.remove("active");
            }
        })
    }

    // 应用程序列表 打开/关闭
    applicationBtn.addEventListener("click", () => {
        if (!applicationList.classList.length) {
            applicationList.classList.add("active");
            desktopArea.style.display = "none";
        } else {
            applicationList.classList.remove("active");
            desktopArea.style.display = "grid";
        }
    })

    // 用来保存以打开的应用程序
    let openAppList = [];

    // 获取桌面上应用程序列表
    let desktopEl = document.querySelector("#desktop");
    let desktopIcons = desktopEl.getElementsByTagName("i");

    // 关闭
   

    desktopIcons[0].addEventListener("click", () => {
        openApplication ("音乐");
    })

    desktopIcons[1].addEventListener("click", () => {
        openApplication ("应用商店");
    })

    // 应用程序的打开方法，参数 应用程序的名字
    function openApplication (name) {

        let hasOpenThisApp = openAppList.filter( (item) => {
            return item.applicationName === name;
        })

        if (hasOpenThisApp.length === 0) {
            let musicWindow = new Window(name);
            openAppList.push(musicWindow)
            musicWindow.open(openAppList);
        }
    }

})(document);






