// 阻止默认事件

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  createCustomContextMenu(e);
})

document.addEventListener("mousedown", (e) => {
  let mainArea = document.querySelector("#main");
  // console.log(customContextMenu);
  // 鼠标位置
  if (customContextMenu) {
    mainArea.removeChild(customContextMenu);
    customContextMenu = null;
    return;
  }
})
// 自定义右键菜单

function createCustomContextMenu(e) {

  let mainArea = document.querySelector("#main");
  // 鼠标位置
  let { clientX, clientY } = e;
  if (customContextMenu) {
    mainArea.removeChild(customContextMenu);
    customContextMenu = null;
    return;
  }
  // 创建元素
  let customContextMenuEl = document.createElement("div");
  customContextMenuEl.classList.add("custom-context-menu");
  customContextMenuEl.innerHTML = createMenuTemplate();
  customContextMenuEl.style.left = clientX + "px";
  customContextMenuEl.style.top = clientY + "px";

  mainArea.appendChild(customContextMenuEl);

  customContextMenu = customContextMenuEl;
}

function createMenuTemplate() {
  return `
  <div>
      <ul>
        <li>新建文件夹</li>
        <li>新建文件</li>
      </ul>
      <div class="line"></div>
      <ul>
        <li>设置</li>
        <li>退出登录</li>
        <li>锁定屏幕</li>
        <li>重启</li>
        <li>关机</li>
      </ul>
      <div class="line"></div>
      <ul>
        <li>更改桌面背景</li>
        <li>隐藏状态栏</li>
        <li>一键整理桌面</li>
      </ul>
  </div>
`
}