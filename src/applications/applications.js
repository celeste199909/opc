import { launch } from "./launch/launch.js"

import { music } from "./music/music.js";
import { appstore } from "./appstore/appstore.js";
import { setting } from "./setting/setting.js";
import { trash } from "./trash/trash.js";


export let desktopApps = [
    music,
    setting,
    appstore,
]

export let dockApps = [
    setting,
    launch,
    trash
]

export let launchpadApps = [
    music,
    appstore,
    setting,
    trash
]