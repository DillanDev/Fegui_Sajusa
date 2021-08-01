import { App } from "./config/server";

async function main(){
    const APP: App = new App(4000);

    await APP.listen();
}

main();