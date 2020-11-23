import { Window } from "../../js/Window.js"
import { App } from "../../js/App.js"

let appName = "设置";
let icon = "../../images/applications/setting.png";
let appTemplate = `
    <div class="template-main">
        <input placeholder="搜索" class="search"></input>
        <div class="setting-list">
            <div class="setting">账户</div>
            <div class="setting">外观</div>
            <div class="setting">语言</div>
            <div class="setting">关于</div>
            <div class="setting">帮助</div>
        </div>
    </div>`;

export let setting = {
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