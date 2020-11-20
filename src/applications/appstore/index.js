import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "应用商店";
let icon = "../../images/applications/appstore.png";
let appTemplate = `<div class="template-main">应用商店</div>`;


export let appstore = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start (hasOpenAppList) {
      
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                width: 600,
                height: 400,
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