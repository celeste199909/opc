let { customContextMenu } = opc;
(function () {
  // 自定义 右键菜单
  document.addEventListener("contextmenu", (e) => {
    // 阻止默认事件
    e.preventDefault()
    // 创建自定义菜单
    createCustomContextMenu(e)
  })

  // 鼠标点击时删除菜单
  document.addEventListener("mousedown", (e) => {
    let mainArea = document.querySelector("#main")

    if (customContextMenu) {
      mainArea.removeChild(customContextMenu)
      customContextMenu = null
    }
  })
})();

// 自定义右键菜单
function createCustomContextMenu(e) {

  let mainArea = document.querySelector("#main")
  // 鼠标位置
  let { clientX, clientY } = e
  if (customContextMenu) {
    mainArea.removeChild(customContextMenu)
    customContextMenu = null
    return
  }
  // 创建 contextMenu 元素
  let customContextMenuEl = opc.createNode("div", "custom-context-menu")
  customContextMenuEl.style.left = clientX + "px"
  customContextMenuEl.style.top = clientY + "px"

  // 创建 ul
  let ul = opc.createNode("ul")
  // 创建 li
  let changeWallpaper = opc.createNode("li", "menu-wallpaper", "修改桌面背景")

  let lockScreen;
  opc.enterLockScreen && (lockScreen = opc.createNode("li", "menu-lock-screen", "锁定屏幕", opc.enterLockScreen))

  ul.appendChild(changeWallpaper)
  opc.enterLockScreen && ul.appendChild(lockScreen)


  customContextMenuEl.appendChild(ul)
  // 插入菜单元素
  mainArea.appendChild(customContextMenuEl)

  customContextMenu = customContextMenuEl
}



