import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "废纸篓";
let icon = "../../images/applications/trash.png";
let appTemplate = `<div>${appName}</div>`;

export let trash = {
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