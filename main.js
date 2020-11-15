(function (doc) {
    let main = doc.querySelector("#main");
    let fullScreenBtn = doc.querySelector("#full-screen-btn");
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
        } else {
            applicationList.classList.remove("active");
        }
    })


})(document);




