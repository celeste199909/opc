export class Window {
    constructor (applicationName, width = 600, height = 400) {
        this.wrapper = document.querySelector("#main");
        this.applicationName = applicationName;
        this.width = width;
        this.height = height;

        this.closeBtn = null;
    }

    open () {
        this.render(this.wrapper, windowTemplate)
        return this;
    }

    close (openAppList) {
        console.log(1);
        openAppList = null;
    }

    render (wrapper, template) {
        let el = document.createElement("div");
        el.innerHTML = template;

        wrapper.appendChild(el);

        this.closeBtn = el;

    }
}

let windowTemplate = 
`<div class="window">
    <div class="tools-bar">
        <div>一</div>
        <div>ロ</div>
        <div class="close">X</div>
    </div>
</div>`