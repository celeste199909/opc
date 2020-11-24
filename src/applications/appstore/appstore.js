import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "应用商店";
let icon = "../../images/applications/appstore.png";

export let appstore = {
    name: appName,
    icon: icon,

    start () {
      
        let hasOpenThisApp = opc.hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            let app = new App({
                appName: appName,
            });
            app.openApp(app)
        } else {
            console.log(`${appName}已经打开！`);
        }

    }
}