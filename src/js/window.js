export class Window {
    constructor (applicationName, width = 600, height = 400) {
        this.wrapper = document.querySelector("#main");
        this.applicationName = applicationName;
        this.width = width;
        this.height = height;
    }

    open (openAppList) {
        this.render(this.wrapper, openAppList)
    }

    close (wrapper, openAppList) {
        let appIndex;

        openAppList.forEach( (item, index) => {
            if (item.applicationName === this.applicationName) {
                appIndex = index;
                return;
            }
        })

        let window = document.querySelector(`.${this.applicationName}`);
        wrapper.removeChild(window)

        openAppList.splice(appIndex, 1)
    }

    render (wrapper, openAppList) {
        // 创建 window
        let window = document.createElement("div");
        window.classList.add("window");
        window.classList.add(this.applicationName);
         // 宽高
        window.style.width = this.width + "px";
        window.style.height = this.height + "px";
        // 创建 window 的工具栏
        let toolsBar = document.createElement("div");
        toolsBar.classList.add("tools-bar");
        // 创建 window的工具栏的 关闭按钮
        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close");
        closeBtn.innerText = "X";
        // 依次 插入元素
        toolsBar.appendChild(closeBtn);
        window.appendChild(toolsBar);
        wrapper.appendChild(window);

        // 给关闭按钮绑定事件
        closeBtn.addEventListener("click", () => {
            this.close(wrapper, openAppList)
        })

    }
}
