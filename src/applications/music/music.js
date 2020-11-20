import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "音乐";
let icon = "../../images/applications/music.png";
let appTemplate = `<div>${appName}</div>`;

export let music = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start (hasOpenAppList) {
      
        // console.log(hasOpenAppList);
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == "音乐";
            // console.log(item);
        })

        if (hasOpenThisApp.length === 0) {

            let app = new App({
                width: 400,
                height: 600,
                appName: appName,
                appTemplate: appTemplate
            });
            hasOpenAppList.push(app)
            app.openApp(hasOpenAppList)
            console.log("music start", hasOpenAppList);
        } else {
            return;
        }

    }
}