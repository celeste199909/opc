import { Window } from "./Window.js"

export class App {
    constructor (name, icon) {
        this.name = name;
        this.icon = icon;
    }

    open (wrapper, openAppList, template) {
        let window = new Window(this.name)
        openAppList.push(window);
        window.render(this.name, wrapper, openAppList, template)
    }
}