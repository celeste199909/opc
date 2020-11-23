let nav = opc.createNode("nav", "nav")
let navLeft = opc.createNode("div", "left")

let navItemSettingTemplate = `
    <div class="item-name">设置</div>
    <ul class="menu">
        <li>关于本机</li>
        <li>系统偏好设置</li>
        <li>App Store</li>
        <li>睡眠</li>
        <li>关机</li>
        <li>退出登录</li>
    </ul>`;


let navItemSetting = opc.createNode("div", "nav-item")
navItemSetting.innerHTML = navItemSettingTemplate;

navLeft.appendChild(navItemSetting)

nav.appendChild(navLeft)

opc.mainEl.appendChild(nav)