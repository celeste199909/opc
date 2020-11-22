let { mainEl } = opc

let lockscreenEl = document.createElement("div")

// 把`进入锁屏`function 挂载到 window 上 方便使用
window.opc.enterLockScreen = enterLockScreen;

function enterLockScreen() {
    createLockScreenEl ()
    lockscreenEl.addEventListener("keypress", spaceTofullScreen)
    lockscreenEl.addEventListener("keypress", fullScreenEnterDesktop)
}

// 创建 锁屏界面（元素）
function createLockScreenEl () {
    lockscreenEl.classList.add("lock-screen")
    lockscreenEl.innerHTML = lockscreenTemplate
    mainEl.appendChild(lockscreenEl)
}

// 按空格开启全屏模式
function spaceTofullScreen(e) {
    if (e.code == "Space") {
        opc.fullScreen(mainEl)
    }
}

// 按 Enter 开启全屏模式并进入桌面
function fullScreenEnterDesktop(e) {
    if (e.code == "Enter") {
        opc.fullScreen(mainEl)
        mainEl.removeChild(lockscreenEl)
    }
}

let lockscreenTemplate = `
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
`;

