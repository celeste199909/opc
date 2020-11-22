import { startup } from "./startup/index.js"
import { music } from "./music/index.js";
import { appstore } from "./appstore/index.js";
import { calculator } from "./calculator/index.js";
import { setting } from "./setting/index.js";
import { trash } from "./trash/index.js";

export let desktopApp = [
    music,
    calculator,
    setting,
    appstore,
]

export let dockApp = [
    setting,
    startup,
    trash
]

export let appList = [
    music,
    appstore,
    calculator,
    setting,
    trash
]