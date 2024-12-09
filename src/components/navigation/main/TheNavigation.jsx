import {NAV_ITEMS} from "../../../constants.jsx";
import NavigationItem from "./NavigationItem.jsx";

const TheNavigation = ({currentPage, setCurrentPage}) => {

    return (
        <nav className="sticky bottom-0 z-10 border-t border-zinc-700 bg-zinc-800">
            <ul className="flex items-center justify-around">
                {NAV_ITEMS.map((item) => (
                    <NavigationItem
                        key={item.page}
                        item={item}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
                ))}
            </ul>
        </nav>
    );
};

export default TheNavigation;