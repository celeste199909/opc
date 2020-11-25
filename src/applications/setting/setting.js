import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";

export let setting = {
    name: appName,
    icon: icon,

    start() {

        let hasOpenThisApp = opc.hasOpenAppList.filter((item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                appName: appName,
            });

            app.openApp(app)

            let settingWindow = document.querySelector(".设置")
            settingWindow.append(loadingSettingPad())
        } else {
            console.log(`${appName}已经打开！`);
        }
    },

}

// 加载设置面板

function loadingSettingPad() {
    // 设置面板
    let settingPad = opc.createNode("div", "main");
    // // 工具
    loadingToolsbar ();

    // 设置项
    let settingList = opc.createNode("div", "setting-list");

    let settingListData = [
        { icon: "acount.png", name: "账户" },
        { icon: "appearance.png", name: "外观" },
        { icon: "language.png", name: "语言" },
        { icon: "about.png", name: "关于" },
        { icon: "help.png", name: "帮助" },
    ];

    settingListData.forEach((item) => {

        let settingItem = opc.createNode("div", "setting-item")
        let imgEl = opc.createNode("img", "icon")
        imgEl.setAttribute("src", `./images/applications/${item.icon}`)
        let settingItemName = opc.createNode("span", "name", `${item.name}`)

        // 外观
        if (item.name == "外观") {
            settingItem.addEventListener("mousedown", (e) => {
                let templateMain = document.querySelector(".设置 .main")
                let settingList = document.querySelector(".设置 .setting-list")
                templateMain.removeChild(settingList)
                templateMain.append(toAppearanceSetting())
            })
        }

        opc.inTurnInsertNode(settingItem, imgEl, settingItemName)
        settingList.appendChild(settingItem)
    })
    settingPad.appendChild(settingList)

    return settingPad

}
// 加载工具栏
function loadingToolsbar () {
    // 工具
    let toolsEl = opc.createNode("div", "tools");
    // 回到设置面板首页
    let toSettingHome = opc.createNode("img", "setting-home");
    toSettingHome.src = `./images/applications/setting-home.png`;
    toSettingHome.addEventListener("mousedown", (e) => {
        let settingWindow = document.querySelector(".设置")
        let main = document.querySelector(".设置 .main")

        settingWindow.removeChild(main)
        settingWindow.append(loadingSettingPad())
    })
    // 回到上一页
    // let back = opc.createNode("img", "back");
    // back.src = `./images/applications/left.png`;

    opc.inTurnInsertNode(toolsEl, toSettingHome)

    // 搜索框
    let searchEl = opc.createNode("input", "search");
    searchEl.setAttribute("placeholder", "搜索");

    let toolsBar = document.querySelector(".设置 .tools-bar")

    opc.inTurnInsertNode(toolsBar, toolsEl, searchEl)
}
    // 返回上一级
    // 返回设置面板首页


// 加载 外观设置
    // 切换壁纸
    // 隐藏状态栏
    // 隐藏dock
function toAppearanceSetting() {

    let appearanceTemplate = opc.createNode("div", "appearance");
    let changeWallpaper = opc.createNode("div", "wallpaper");

    changeWallpaper.innerHTML = "<div>更换桌面背景</div>";

    let wallpaperWrapper = document.createElement("div");
    let img1 = document.createElement("img");
    img1.src = `./images/wallpapers/wallpaper1.jpg`;
    let img2 = document.createElement("img");
    img2.src = `./images/wallpapers/wallpaper2.jpg`;
    let img3 = document.createElement("img");
    img3.src = `./images/wallpapers/wallpaper3.jpg`;
    opc.inTurnInsertNode(wallpaperWrapper, img1, img2, img3);

    // 修改壁纸
    img1.addEventListener("mousedown", () => {
        opc.mainEl.style.backgroundImage = `url(./images/wallpapers/wallpaper1.jpg)`
    })
    img2.addEventListener("mousedown", () => {
        opc.mainEl.style.backgroundImage = `url(./images/wallpapers/wallpaper2.jpg)`
    })
    img3.addEventListener("mousedown", () => {
        opc.mainEl.style.backgroundImage = `url(./images/wallpapers/wallpaper3.jpg)`
    })

    changeWallpaper.appendChild(wallpaperWrapper);

    appearanceTemplate.appendChild(changeWallpaper);

    let hideNav = document.createElement("div");
    hideNav.innerHTML = `<div>隐藏状态栏</div>
    <div>开 / 关</div>`;

    let hideDock = document.createElement("div");
    hideDock.innerHTML = `<div>隐藏 dock </div>
    <div>开 / 关</div>`;

    let autoLockScreen = document.createElement("div");
    autoLockScreen.innerHTML = `
        <div>自动锁屏</div>
        <div>
            <span>开 / 关</span>
            <span>30秒</span>
            <span>1分钟</span>
        </div>
    `;

    opc.inTurnInsertNode(appearanceTemplate, hideNav, hideDock, autoLockScreen)
    
    return appearanceTemplate;
}

