export class Window {
    constructor (width = 900, height = 600) {
        this.width = width;
        this.height = height;
        this.isOpen = false;
    }

    open (wrapper) {
        let window = document.createElement("div");
        window.classList.add("window");
        wrapper.appendChild(window)
        this.isOpen = true;
        console.log("打开");
        return window;
    }

    close (instanceMusic, instanceWindow) {
        console.log("关闭");
        instanceWindow.style.display = "none";
        this.isOpen = false;
        instanceMusic = null;
    }
}