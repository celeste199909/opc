let { mainEl, desktopEl, dockEl, launchpadEl, launchpadAppsEl } = opc;

export class Window {
    constructor() {

    }

    renderOpen(options) {
        // 如果是在启动台打开的 需要把遮罩层去掉
        launchpadEl.classList.remove("active");
        let { width, height, appName, appTemplate } = options;
        // 创建 window 元素
        let window = opc.createNode("div", `window ${appName}`)
        // 宽高
        window.style.width = width + "px";
        window.style.height = height + "px";

        // 创建 window 的工具栏
        let toolsBar = opc.createNode("div", "tools-bar")
        // 创建应用名
        let appNameEl = opc.createNode("div", "app-name", `${appName}`)
        // 创建 window的工具栏的 关闭按钮
        let closeBtn = opc.createNode("div", "close", "×")

        // 创建 App 内容
        let appTemplateWrapper = opc.createNode("div", "template-wrapper")
        appTemplateWrapper.innerHTML = appTemplate;

        // 依次插入元素
        opc.inTurnInsertNode(toolsBar, appNameEl, closeBtn)
        opc.inTurnInsertNode(window, toolsBar, appTemplateWrapper)
        mainEl.appendChild(window);

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
        mainEl.removeChild(theAppWindow)
        // opc.fullScreen(theAppWindow)
    }
    // 使用关闭按钮关闭 window
    closeApp() {
        this.renderClose();
        // 从已开应用列表中把应用删除
        opc.hasOpenAppList = opc.hasOpenAppList.filter((item) => {
            return item.options.appName !== this.options.appName;
        })
        console.log(opc.hasOpenAppList);
    }
    // 窗口拖拽(可拖拽区域，窗口)
    drag(dragagbleArea, window) {
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

        dragagbleArea.addEventListener("mousedown", (e) => {
            
            isOnDraging = true;
            distanceFromWindowTop = e.offsetY;
            distanceFromWindowLeft = e.offsetX;

            distanceFromViewTop = e.clientY;
            distanceFromViewLeft = e.clientX;

            document.body.addEventListener("mousemove", mousemoveCallback)

        })

        dragagbleArea.addEventListener("mouseup", (e) => {
            isOnDraging = false;
            document.body.removeEventListener("mousemove", mousemoveCallback)
        })

        document.body.addEventListener("mouseleave", (e) => {
            isOnDraging = false;
            document.body.removeEventListener("mousemove", mousemoveCallback)
        })
    }

}
