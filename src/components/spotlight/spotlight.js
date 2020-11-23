(function () {
    document.onkeydown = function (e) {
        if (e.code === "Space") {
            let lockscreenEl = document.querySelector(".lock-screen")
            !lockscreenEl && console.log("spotlight")
        }
    }
})();