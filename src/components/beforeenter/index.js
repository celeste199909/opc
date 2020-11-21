(function () {
    window.onload = enterBeforeEnter();
})();
window.enterBeforeEnter = enterBeforeEnter;

function enterBeforeEnter() {
    let mainArea = document.querySelector("#main");
    let beforeEnterEl = document.createElement("div");
    beforeEnterEl.classList.add("before-enter");

    beforeEnterEl.innerHTML = `
        <div class="wrapper">
            <div class="header">
                <div class="name">opc</div>
            </div>
            <input autofocus="autofocus" type="password" placeholder="请给我焦点"/>
            <div>按 <span>[ 空格 ]</span> 开启全屏模式</div>
            <div>按 <span>[ Enter ]</span> 进入桌面</div>
        </div>
        <div class="footer">
            <div class="description">一个 [ 个人电脑 ] 模拟器</div>
            <div class="description">A personal computer simulator</div>
            <div>created by <a href="https://github.com/iceream" target="_blank">iceream</a></div>
        </div>
    `

    mainArea.appendChild(beforeEnterEl)


    beforeEnterEl.addEventListener("keypress", fullScreen)
    beforeEnterEl.addEventListener("keypress", fullScreenEnterDesktop)

    function fullScreen (e) {
        if (e.code == "Space") {
            mainArea.requestFullscreen();
        }
    }
    
    function fullScreenEnterDesktop (e) {
        if (e.code == "Enter") {
            mainArea.requestFullscreen();
            mainArea.removeChild(beforeEnterEl)
        }
    }
}


