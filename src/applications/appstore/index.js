import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "应用商店";
let icon = "../../images/applications/appstore.png";
let appTemplate = `<div class="template-main">应用商店</div>`;

export let appstore = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start () {
      
        let hasOpenThisApp = opc.hasOpenAppList.filter( (item) => {
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
        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}