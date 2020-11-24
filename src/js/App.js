import { Window } from "./Window.js"

// let { mainEl, desktopEl, dockEl, launchpadAppsEl,
//     hasOpenAppList, customContextMenu} = opc;

export class App extends Window {

    constructor (options) {
        super();
        this.options = options;
    }

    openApp (app) {
        // 调用的是 Window 的render方法
        opc.hasOpenAppList.push(app);
        this.renderOpen(this.options);
    }

    iconClickEvent () {
        this.openApp ();
    }
}