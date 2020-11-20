import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"


let appName = "计算器";
let icon = "../../images/applications/calculator.png";
let appTemplate = `<div class="template-main">计算器</div>`;

export let calculator = {
    name: appName,
    icon: icon,
    appTemplate: appTemplate,

    start (hasOpenAppList) {
      
        let hasOpenThisApp = hasOpenAppList.filter( (item) => {
            return item.options.appName == appName;
        })

        if (hasOpenThisApp.length === 0) {
            console.log(hasOpenThisApp);
            let app = new App({
                width: 400,
                height: 600,
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