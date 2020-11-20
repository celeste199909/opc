import { startup } from "./startup/index.js"
import { music } from "./music/index.js";
import { appstore } from "./appstore/index.js";
import { calculator } from "./calculator/index.js";
import { setting } from "./setting/index.js";
import { trash } from "./trash/index.js";

export let desktopApp = [
    music,
    appstore,
    calculator,
    setting,
]

export let dockApp = [
    startup,
    setting,
    trash
]

export let appList = [
    music,
    appstore,
    calculator,
    setting,
    startup,
    setting,
    trash
]