
const TheHeader = ({currentPage}) => {
    return (
        <header
            className="sticky top-0 z-20 flex items-center justify-between border-b bg-zinc-800 border-zinc-700 p-4"
        >
            <h1 className="text-xl">Developer</h1>
            <span className="text-zinc-600">[ {currentPage.page} ]</span>
        </header>
    );
};

export default TheHeader;