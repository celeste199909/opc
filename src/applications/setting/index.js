import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";
let appTemplate = `<div class="template-main">设置</div>`;

export let setting = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start () {
      
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                width: 900,
                height: 600,
                appName: appName,
                appTemplate: appTemplate,
            });

            app.openApp(app)
            console.log("打开了设置", hasOpenAppList);

        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}