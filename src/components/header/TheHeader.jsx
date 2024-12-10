import config from "../../config.jsx";

const TheHeader = ({currentPage}) => {
    return (
        <header
            className="sticky top-0 z-20 flex gap-3 items-center justify-between border-b bg-zinc-800 border-zinc-700 p-4"
        >
            <h1 className="text-xl">{config.h1}</h1>
            <span className="text-zinc-600 text-nowrap">[ {currentPage.page} ]</span>
        </header>
    );
};

export default TheHeader;