(function (doc) {
    let main = doc.querySelector("#main");
    let fullScreenBtn = doc.querySelector("#full-screen-btn");
    let desktopArea = doc.querySelector("#desktop");
    let applicationBtn = doc.querySelector(".application-list-btn");
    let applicationList = doc.querySelector("#app");

    // 初始化
    ( function init () {
        fullScreen(fullScreenBtn, main);
    })();

    // 全屏(触发全屏的按钮, 要全屏的元素)
    function fullScreen (triggerEl, targetEl) {
        triggerEl.addEventListener("click", () => {
            if (!doc.fullscreenElement) {
                targetEl.requestFullscreen();
                triggerEl.classList.add("active");
            } else {
                doc.exitFullscreen();
                triggerEl.classList.remove("active");
            }
        })
    }

    // 应用程序列表 打开/关闭
    applicationBtn.addEventListener("click", () => {
        if (!applicationList.classList.length) {
            applicationList.classList.add("active");
            desktopArea.style.display = "none";
        } else {
            applicationList.classList.remove("active");
            desktopArea.style.display = "grid";
        }
    })

    // 音乐
    let desktopEl = document.querySelector("#desktop");
    let desktopIcons = desktopEl.getElementsByTagName("i")
    console.log(desktopIcons);

    let instanceMusic = null;
    let instanceWindow = null;

    let wapper = document.querySelector("#main");
    desktopIcons[0].addEventListener("click", () => {

        // console.log("音乐");
        if (!instanceMusic) {
            instanceMusic = new Window();
        } 
        if (instanceMusic.isOpen) {
            instanceMusic.close(instanceMusic, instanceWindow);
        } else {
            instanceWindow = instanceMusic.open(wapper);
        }
    })
    
})(document);

class Window {
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




