import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "废纸篓";
let icon = "../../images/applications/trash.png";

export let trash = {
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