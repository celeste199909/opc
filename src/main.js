// 全局方法
import "./js/opc.js"
// 应用
import { desktopApps, dockApps, launchpadApps } from "./applications/applications.js";
// 动画
import "./animation/animation.js";
// 组件
import "./components/components.js";

let { mainEl, desktopEl, dockEl, launchpadAppsEl} = opc;

// console.log(dockEl);

// 初始化
(function init() {
    // 如果存在锁屏组件，则在一开始时进入锁屏页面；
    opc.enterLockScreen && opc.enterLockScreen();
    // 加载 桌面，dock，启动台的应用
    loadingApplications(desktopEl, desktopApps);
    loadingApplications(dockEl, dockApps);
    loadingApplications(launchpadAppsEl, launchpadApps);
})();

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
    iconEl.classList.add("icon-wrapper");
    iconEl.style.left = index * 90 + "px";


    // 可拖拽

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
        let left = e.clientX - offsetX - 48;
        let top = e.clientY - offsetY;

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
        <span class="app-name" draggable="false">${name}</span>
    `;
    // 给图标绑定点击事件
    iconEl.addEventListener("click", () => {
        element.start();
    })
    area.appendChild(iconEl);
}



