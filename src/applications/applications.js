import { startup } from "./start-up/startup.js"
import { music } from "./music/music.js";

export let desktopApp = [
    startup,
    music
]

// export let desktopApp = [
//     {name: "音乐", icon: "music.png"},
//     {name: "设置", icon: "setting.png"},
//     {name: "应用商店", icon: "app-shop.png"},
//     {name: "启动台", icon: "start-up.png"},
//     {name: "计算器", icon: "calculator.png"},
//     {name: "短信", icon: "duanxin.png"}
// ]

export let dockApp = [
    startup
]