import { createRoot } from "react-dom/client";
import {MyHeader} from "./components/my-header"
import {MyFooter} from "./components/my-footer"
import {Page} from "./components/page"

createRoot(document.getElementById('root')).render(
    <>
        <MyHeader />
        <Page />
        <MyFooter/>
    </>
)