(function () {
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
    // 创建 contextMenu 元素
    let customContextMenuEl = document.createElement("div");
    customContextMenuEl.classList.add("custom-context-menu");
    customContextMenuEl.innerHTML = createMenuTemplate();
    customContextMenuEl.style.left = clientX + "px";
    customContextMenuEl.style.top = clientY + "px";

    let line = document.createElement("div");
    line.classList.add("line")

    // 创建 菜单的文件部分
    let filePart = document.createElement("ul");
    filePart.classList.add("file");
    filePart.innerHTML = `<li>新建文件夹</li>
                          <li>新建文件</li>`;
    customContextMenuEl.appendChild(filePart);
    customContextMenuEl.appendChild(line);

    customContextMenuEl.appendChild(line);
    // 创建 菜单的美化部分
    let beautifyPart = document.createElement("ul");
    beautifyPart.classList.add("beautify");
    beautifyPart.innerHTML = `<li>更改桌面背景</li>
                              <li>隐藏状态栏</li>
                              <li>一键整理桌面</li>`;
    customContextMenuEl.appendChild(beautifyPart);

    // 创建 菜单的系统部分
    let systemePart = document.createElement("ul");
    systemePart.classList.add("system");
    systemePart.innerHTML = ` <li>设置</li>
                              <li>重启</li>
                              <li>关机</li>`;
    //
    let lockScreen = document.createElement("li");
    lockScreen.innerHTML = `锁定屏幕`;
    lockScreen.addEventListener("mousedown", (e) => {
      enterBeforeEnter();
    })
    systemePart.appendChild(lockScreen);
    customContextMenuEl.appendChild(systemePart);
    // 插入菜单元素
    mainArea.appendChild(customContextMenuEl);

    customContextMenu = customContextMenuEl;
  }

  function createMenuTemplate() {
    return `
      <ul calss="file">

      </ul>
      <ul class="system">

      </ul>
      <div class="line"></div>
      <ul class="beautify">
        
      </ul>
`
  }
})();


