import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "计算器";
let icon = "../../images/applications/calculator.png";
let appTemplate = `<div class="template-main">计算器</div>`;

export let calculator = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start () {
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                width: 400,
                height: 600,
                appName: appName,
                appTemplate: appTemplate
            });
            app.openApp(app)
            console.log("打开了计算器", hasOpenAppList);
        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}