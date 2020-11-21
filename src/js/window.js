
export class Window {
    constructor() {
        this.wrapper = document.querySelector("#main");
    }

    renderOpen(options) {
        // 如果是在启动台打开的 需要把遮罩层去掉
        let startupWrapper = document.querySelector("#app")
        startupWrapper.classList.remove("active");
        // console.log(options);
        let { width, height, appName, appTemplate } = options;
        // 创建 window
        let window = document.createElement("div");
        window.classList.add("window");
        window.classList.add(appName);
        // 宽高
        window.style.width = width + "px";
        window.style.height = height + "px";
        // 创建 window 的工具栏
        let toolsBar = document.createElement("div");
        toolsBar.classList.add("tools-bar");
        // 创建应用名
        let appNameEl = document.createElement("div");
        appNameEl.classList.add("app-name");
        appNameEl.innerHTML = `${appName}`;
        // 创建 window的工具栏的 关闭按钮
        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close");
        closeBtn.innerText = "×";
        // 创建 App 内容
        let appTemplateWrapper = document.createElement("div");
        appTemplateWrapper.classList.add("template-wrapper");
        appTemplateWrapper.innerHTML = appTemplate;

        // 依次 插入元素
        toolsBar.appendChild(appNameEl);
        toolsBar.appendChild(closeBtn);
        window.appendChild(toolsBar);
        window.appendChild(appTemplateWrapper);
        this.wrapper.appendChild(window);

        // 给关闭按钮绑定事件
        closeBtn.addEventListener("mousedown", (e) => {
            this.closeApp();
        })
        // 给工具栏绑定拖拽事件
        toolsBar.addEventListener("mousedown", this.drag(toolsBar, window))
    }

    renderClose() {
        // 在视图上移出 窗口
        let theAppWindow = document.querySelector(`.${this.options.appName}`);
        this.wrapper.removeChild(theAppWindow)
    }
    // 使用关闭按钮关闭 window
    closeApp() {
        this.renderClose();
        // 从已开应用列表中把应用删除
        hasOpenAppList = hasOpenAppList.filter((item) => {
            return item.options.appName !== this.options.appName;
        })
    }
    // 拖拽(可拖拽区域，窗口)
    drag(dragAbleArea, window) {
        let isOnDraging = false;
        // 鼠标与元素的距离
        let distanceFromWindowTop = 0;
        let distanceFromWindowLeft = 0;
        // 鼠标与视口的距离
        let distanceFromViewTop = 0;
        let distanceFromViewLeft = 0;

        function mousemoveCallback(e) {
            if (isOnDraging) {
                let top = distanceFromViewTop - distanceFromWindowTop;
                let left = distanceFromViewLeft - distanceFromWindowLeft;
                window.style.top = top + "px";
                window.style.left = left + "px";

                distanceFromViewLeft = e.clientX;

                if (top < 0) {
                    window.style.top = 0;
                    distanceFromViewTop = distanceFromWindowTop;
                } else {
                    distanceFromViewTop = e.clientY;
                }
            }
        }

        dragAbleArea.addEventListener("mousedown", (e) => {
            
            isOnDraging = true;
            distanceFromWindowTop = e.offsetY;
            distanceFromWindowLeft = e.offsetX;

            distanceFromViewTop = e.clientY;
            distanceFromViewLeft = e.clientX;

            document.body.addEventListener("mousemove", mousemoveCallback)

        })

        dragAbleArea.addEventListener("mouseup", (e) => {
            isOnDraging = false;
            document.body.removeEventListener("mousemove", mousemoveCallback, true)
        })
    }

}
