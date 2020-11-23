import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";

function loadingSettingPad() {

    // 设置面板
    let settingPad = opc.createNode("div", "template-main");
    // 工具
    let toolsEl = opc.createNode("div", "tools");
    toolsEl.innerHTML = `<img src="./images/applications/left.png"></img>
                    <img src="./images/applications/right.png"></img>`;

    settingPad.appendChild(toolsEl)
    // 搜索框
    let searchEl = opc.createNode("input", "search");
    searchEl.setAttribute("placeholder", "搜索");
    settingPad.appendChild(searchEl)

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
            console.log(1);
            settingItem.addEventListener("mousedown", (e) => {
                let settingWindow = document.querySelector(".设置 .template-wrapper .setting-list")
                setTimeout(() => {
                    settingWindow.innerHTML = ""
                    settingWindow.append(toAppearanceSetting())
                }, 100)
            })
        }

        opc.inTurnInsertNode(settingItem, imgEl, settingItemName)
        settingList.appendChild(settingItem)
    })
    settingPad.appendChild(settingList)

    return settingPad

}

function toAppearanceSetting() {

    let appearanceTemplate = opc.createNode("div", "template-main");
    appearanceTemplate.innerHTML = `
        <div>更换桌面背景</div>
        <div>隐藏状态栏</div>
        <div>隐藏 dock 栏</div>
        <div>更换桌面背景</div>
`;
    return appearanceTemplate;
}



// function toAppearance () {
//     let appearanceItem = document.querySelector(".setting-item .appearance")
//     console.log(appearanceItem);
// };

// opc.setting.toAppearance = toAppearance;

// opc.setting.toAppearance()

export let setting = {
    name: appName,
    icon: icon,
    appTemplate: "",

    start() {

        let hasOpenThisApp = opc.hasOpenAppList.filter((item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                width: 900,
                height: 600,
                appName: appName,
                appTemplate: "",
            });

            app.openApp(app)

            let settingWindow = document.querySelector(".设置 .template-wrapper")
            setTimeout(() => {
                settingWindow.append(loadingSettingPad())
            }, 100)
        } else {
            console.log(`${appName}已经打开！`);
        }
    },

}





let appTemplatellll = `
    <div class="template-main">
        <div class="tools">
            <img src="./images/applications/left.png"></img>
            <img src="./images/applications/right.png"></img>
        </div>
        <input placeholder="搜索" class="search"></input>
        <div class="setting-list">
            <div class="setting-item">
                <img class="icon" src="./images/applications/acount.png" />
                <span>账户</span>
            </div>
            <div class="setting-item appearance">
                <img class="icon" src="./images/applications/appearance.png" />
                <span>外观</span>
            </div>
            <div class="setting-item">
                <img class="icon" src="./images/applications/language.png" />
                <span>语言</span>
            </div>
            <div class="setting-item">
                <img class="icon" src="./images/applications/about.png" />
                <span>关于</span>
            </div>
             <div class="setting-item">
                <img class="icon" src="./images/applications/help.png" />
                <span>帮助</span>
            </div>
        </div>
    </div>`;