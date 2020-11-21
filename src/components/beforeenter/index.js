window.onload = function () {
    let mainArea = document.querySelector("#main");
    let beforeEnterEl = document.createElement("div");
    beforeEnterEl.classList.add("before-enter");

    beforeEnterEl.innerHTML = `
        <div>
            <input type="password"></input>
            <div>按 enter 进入</div>
        </div>
    `

    mainArea.appendChild(beforeEnterEl)

    // setTimeout(() => {
    //     mainArea.removeChild(beforeEnterEl)
    // }, 2000);
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {
            console.log("enter");
            mainArea.requestFullscreen();
            mainArea.removeChild(beforeEnterEl)
        }
    };
}

