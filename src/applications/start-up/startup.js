import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"


let appName = "启动台";
let icon = "../../images/applications/start-up.png";
let appTemplate = `<div class="template-main">启动</div>`;

export let startup = {
    name: appName,
    icon: icon,
    start(hasOpenAppList) {
        // 应用程序列表 打开/关闭
        let app = document.querySelector("#app");
        console.log(app.classList[0] === "active");
        if (app.classList[0] === "active") {
            app.classList.remove("active");
        } else {
            app.classList.add('active');
        }
    }
}