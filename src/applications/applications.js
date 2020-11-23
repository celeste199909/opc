import { startup } from "./startup/index.js"
import { music } from "./music/index.js";
import { appstore } from "./appstore/index.js";
import { calculator } from "./calculator/index.js";
import { setting } from "./setting/setting.js";
import { trash } from "./trash/index.js";


export let desktopApps = [
    music,
    calculator,
    setting,
    appstore,
]

export let dockApps = [
    setting,
    startup,
    trash
]

export let launchpadApps = [
    music,
    appstore,
    calculator,
    setting,
    trash
]