import { Window } from "./Window.js"

export class App extends Window {

    constructor (options) {

        super();
        this.options = options;

    }

    openApp (hasOpenAppList) {
        // let {appName, backgroundColor, userInterface} = this;
        this.renderOpen(this.options, hasOpenAppList);
        console.log(this.options);
    }

    closeApp () {

    }


    iconClickEvent () {
        this.openApp ();
    }


    // open (wrapper, openAppList, template) {
    //     let window = new Window(this.name)
    //     openAppList.push(window);
    //     window.render(this.name, wrapper, openAppList, template)
    // }
}