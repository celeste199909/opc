export class Window {
    constructor(applicationName, width = 600, height = 400) {
        this.wrapper = document.querySelector("#main");
        this.applicationName = applicationName;
        this.width = width;
        this.height = height;
    }
    // 打开 window
    open(openAppList) {
        this.render(this.wrapper, openAppList)
    }
    // 使用关闭按钮关闭 window
    close(wrapper, openAppList) {
        let appIndex;

        openAppList.forEach((item, index) => {
            if (item.applicationName === this.applicationName) {
                appIndex = index;
                return;
            }
        })

        let window = document.querySelector(`.${this.applicationName}`);
        wrapper.removeChild(window)

        openAppList.splice(appIndex, 1)
    }
    // 渲染 window
    render(wrapper, openAppList) {
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
        closeBtn.innerText = "×";
        // 依次 插入元素
        toolsBar.appendChild(closeBtn);
        window.appendChild(toolsBar);
        wrapper.appendChild(window);



        // 给关闭按钮绑定事件
        closeBtn.addEventListener("click", () => {
            this.close(wrapper, openAppList)
        })
        // 给工具栏绑定拖拽事件
        toolsBar.addEventListener("click", () => {
            console.log("拖拽");
        })
        // let nav = document.querySelector(".nav");

        let isOnDraging = false;

        let mouseLeft = 0;
        let mouseTop = 0;

        let mouseX = 0;
        let mouseY = 0;

        toolsBar.addEventListener("mousedown", (e) => {
            isOnDraging = true;
            console.log("现在处于拖动状态");
            mouseTop = e.offsetY;
            mouseLeft = e.offsetX;
            console.log(mouseLeft, mouseTop);
        })
        toolsBar.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // console.log(mouseX, mouseY);
            if (isOnDraging) {
                window.style.left = (mouseX - mouseLeft) + "px";
                window.style.top = (mouseY - mouseTop) + "px";
            }
        })

        toolsBar.addEventListener("mouseup", (e) => {
            isOnDraging = false;
            console.log("现在已经离开拖动状态");
        })

        toolsBar.addEventListener("mouseleave", (e) => {
            isOnDraging = false;
            console.log("现在已经离开拖动状态");
        })

    }
}
