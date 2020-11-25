import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";

function loadingSettingPad() {

    // 设置面板
    let settingPad = opc.createNode("div", "main");
    // 工具
    let toolsEl = opc.createNode("div", "tools");
    toolsEl.innerHTML = `<img src="./images/applications/left.png"></img>
                    <img src="./images/applications/right.png"></img>`;

    // 搜索框
    let searchEl = opc.createNode("input", "search");
    searchEl.setAttribute("placeholder", "搜索");

    let toolsBar = document.querySelector(".设置 .tools-bar")

    opc.inTurnInsertNode(toolsBar, toolsEl, searchEl)

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

function toAppearanceSetting() {

    let appearanceTemplate = opc.createNode("div", "appearance");
    appearanceTemplate.innerHTML = `
        <div>更换桌面背景</div>
        <div>隐藏状态栏</div>
        <div>隐藏 dock 栏</div>
        <div>更换桌面背景</div>
`;
    return appearanceTemplate;
}

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
