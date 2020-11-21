import { Window } from "./Window.js"

export class App extends Window {

    constructor (options) {
        super();
        this.options = options;

    }
    openApp (app) {
        // 调用的是 Window 的render方法
        hasOpenAppList.push(app);
        this.renderOpen(this.options);
        // console.log(hasOpenAppList);
    }

    iconClickEvent () {
        this.openApp ();
    }
}