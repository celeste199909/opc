
let opc = {
    mainEl: document.querySelector("#main"),
    navEl: document.querySelector("#nav"),
    desktopEl: document.querySelector("#desktop"),
    dockWrapperEl: document.querySelector("#dock-wrapper"),
    dockEl: document.querySelector("#dock"),
    launchpadEl: document.querySelector("#launchpad"),
    launchpadAppsEl: document.querySelector(".launch-pad-apps"),

    // 以打开的应用 列表
    hasOpenAppList: [],
    // 自定义右键菜单
    customContextMenu: null,

    // 全屏 (targetEl) targetEl: 要全屏的元素
    fullScreen,
    // 退出全屏 (targetEl) targetEl: 要退出全屏的元素
    exitFullScreen,
    // 全屏触发器 (targetEl)，如果已有元素全屏，那么退出全屏，否则将该元素全屏
    triggerFullScreen,
    // 创建节点 （tagName, className, innerText, mousedownEvent）
    createNode,
    // 依次 插入节点 (wrapperEl, ...items) (容器节点， 依次要插入的节点)
    inTurnInsertNode
}

window.opc = opc

// 全屏
function fullScreen (targetEl) {
    if (!document.fullscreenEnabled) {
        alert("您的环境不支持全屏！Your environment does not support full screen !")
    }
    targetEl.requestFullscreen();
}

// 退出全屏
function exitFullScreen (targetEl) {
    targetEl.exitFullscreen();
}

// 全屏触发器
function triggerFullScreen (targetEl) {
    if (!document.fullscreenElement) {
        fullScreen(targetEl)
    } else {
        exitFullScreen(targetEl)
    }
}

// 创建节点 function
function createNode (tagName, className, innerText, mousedownEvent) {
    let el = document.createElement(tagName)

    // 添加多个类名 以空格隔开
    let classNameList = [];
    className && (classNameList = className.split(" "))
    if (classNameList.length > 1) {
        classNameList.forEach(element => {
            el.classList.add(element)
        });
    } else {
        el.classList.add(className)
    }

    innerText && (el.innerText = innerText)
    mousedownEvent && el.addEventListener("mousedown", mousedownEvent)
    return el
}

// 依次 插入节点 (容器节点， 依次要插入的节点)
function inTurnInsertNode (wrapperEl, ...items) {
    [...items].forEach( (item) => {
        wrapperEl.appendChild(item)
    })
}
