let nav = opc.createNode("nav", "nav")
let navLeft = opc.createNode("div", "left")

// opc
let navItemOpcTemplate = `
    <div class="item-name">系统</div>
    <ul class="menu">
        <li>偏好设置</li>
        <li>锁屏</li>
    </ul>`;
let navItemOpc = opc.createNode("div", "nav-item")
navItemOpc.innerHTML = navItemOpcTemplate;

navLeft.appendChild(navItemOpc)
// 帮助
let navItemHelpTemplate = `<div class="item-name">帮助</div>`;
let navItemHelp = opc.createNode("div", "nav-item")
navItemHelp.innerHTML = navItemHelpTemplate;
navLeft.appendChild(navItemHelp)
// 关于
let navItemAboutTemplate = `<div class="item-name">关于</div>`;
let navItemAbout = opc.createNode("div", "nav-item")
navItemAbout.innerHTML = navItemAboutTemplate;
navLeft.appendChild(navItemAbout)

// 插入左侧导航
nav.appendChild(navLeft)

opc.mainEl.appendChild(nav)