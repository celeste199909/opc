import { Window } from "./Window.js"

export class App extends Window {

    constructor (options) {
        super();
        this.options = options;

    }
    openApp (hasOpenAppList) {
        // 调用的是 Window 的render方法
        this.renderOpen(this.options, hasOpenAppList);
    }

    closeApp (hasOpenAppList) {
        console.log("closeApp",hasOpenAppList);
    }

    iconClickEvent () {
        this.openApp ();
    }
}