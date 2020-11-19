
export class App {
    constructor (name, icon) {
        this.name = name;
        this.icon = icon;
    }

    render (window, userInterface) {
        console.log(this.name);
    }
}