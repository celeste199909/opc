import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";
let appTemplate = `<div class="template-main">设置</div>`;

export let setting = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start (hasOpenAppList) {
      
        // console.log(hasOpenAppList);
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
            // console.log(item);
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                width: 800,
                height: 500,
                appName: appName,
                appTemplate: appTemplate
            });
            hasOpenAppList.push(app)
            app.openApp(hasOpenAppList)
            // console.log("music start", hasOpenAppList);
        } else {
            return;
        }

    }
}