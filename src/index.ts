import { init as initHeader } from "./components/header";
import { init as initInbox } from "./components/inbox";
import { init as initText } from "./components/text";
import { init as initTodoItem } from "./components/todo-items";
import { initHomePage } from "./pages/homePage";
import { state } from "./state";

function main(){
    state.init()
    initHeader()
    initInbox()
    initText()
    initTodoItem()
    const root = document.querySelector(".root")
    initHomePage(root)
}
main()