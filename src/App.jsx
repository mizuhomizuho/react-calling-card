import './assest/main.css'
import React from "react";
import {NAV_ITEMS, PAGE_HOME} from "./constants.jsx";
import TheNavigation from "./components/navigation/main/TheNavigation.jsx";
import TheHeader from "./components/header/TheHeader.jsx";
import TheMain from "./components/content/TheMain.jsx";

const App = () => {

    const [currentPage, setCurrentPage] = React.useState(normalizePage());

    function normalizePage() {
        const pageHash = location.hash.slice(1);
        if (isPageHashValid(pageHash)) {
            return NAV_ITEMS.find(({page}) => page === pageHash);
        }
        location.hash = PAGE_HOME;
        return NAV_ITEMS.find(({page}) => page === PAGE_HOME);
    }

    function isPageHashValid(pageHash) {
        return NAV_ITEMS.some((navItem) => navItem.page === pageHash);
    }

    const Page = currentPage.component;

    return (<>
        <TheHeader currentPage={currentPage}/>
        <TheMain>
            <Page/>
        </TheMain>
        <TheNavigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>);
};

export default App;
