
// 鼠标点击动画
document.addEventListener("click", (e) => {
    let mian = document.querySelector("#main")
    let canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.position = "absolute"
    canvas.style.top = e.clientY - 50 + "px";
    canvas.style.left = e.clientX - 50 + "px";
    canvas.style.transition = "all ease-in-out 1s"

    mian.appendChild(canvas)

    let ctx = canvas.getContext("2d")
    ctx.save()
    ctx.fillStyle = "#ffffff11";
    // ctx.fillRect(0,0,100,100);
    ctx.arc(50,50,10,0,Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.fillStyle = "#ffffff33";
    // ctx.fillRect(0,0,100,100);
    ctx.arc(50,50,15,0,Math.PI * 2)
    ctx.fill()
    ctx.restore()

    setTimeout(() => {
        ctx.clearRect(0,0,100,100)
        mian.removeChild(canvas)
    },100)

})