const TheMain = ({children}) => {
    return (
        <main className="flex flex-grow flex-col p-3">
            {children}
        </main>
    );
};

export default TheMain;