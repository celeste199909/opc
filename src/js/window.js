
export class Window {
    constructor(applicationName, width = 600, height = 400) {
        this.wrapper = document.querySelector("#main");
        this.applicationName = applicationName;
        this.width = width;
        this.height = height;
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
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.close(wrapper, openAppList);
        })
        // 给工具栏绑定拖拽事件
        toolsBar.addEventListener("click", this.drag(toolsBar, window))
        // 拖拽
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
    // 拖拽(可拖拽区域，窗口)
    drag (dragAbleArea, window) {
        let isOnDraging = false;
        // 鼠标与元素的距离
        let distanceFromWindowTop = 0;
        let distanceFromWindowLeft = 0;
        // 鼠标与视口的距离
        let distanceFromViewTop = 0;
        let distanceFromViewLeft = 0;

        function mousemoveCallback (e) {
       
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
            document.body.removeEventListener("mousemove", mousemoveCallback)
        })

        // dragAbleArea.addEventListener("mouseleave", (e) => {
        //     document.removeEventListener("mousemove", mousemoveCallback)
        //     isOnDraging = false;
        // })
    }
    
}
