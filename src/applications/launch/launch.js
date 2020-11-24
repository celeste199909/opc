import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "启动台";
let icon = "../../images/applications/launch.png";
let appTemplate = `<div class="template-main">启动</div>`;

export let launch = {
    name: appName,
    icon: icon,
    start() {
        // 应用程序列表 打开/关闭
        let app = document.querySelector("#launchpad");
        // console.log(app.classList[0] === "active");
        if (app.classList[0] === "active") {
            app.classList.remove("active");
        } else {
            app.classList.add('active');
        }
    }
}