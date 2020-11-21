import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "废纸篓";
let icon = "../../images/applications/trash.png";
let appTemplate = `<div class="template-main">${appName}</div>`;

export let trash = {
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
            console.log("打开了废纸篓",hasOpenAppList);

        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}