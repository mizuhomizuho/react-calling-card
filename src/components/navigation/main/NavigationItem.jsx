
const NavigationItem = ({item, currentPage, setCurrentPage}) => {

    const navItem = item
    const Icon = navItem.icon;
    const classes = [
        'flex flex-col items-center p-2 capitalize',
        navItem.page === currentPage.page ? 'bg-zinc-900' : 'hover:bg-zinc-700',
    ];

    return (
        <li className="flex-1" key={navItem.page}>
            <a href={`#${navItem.page}`} onClick={() => setCurrentPage(navItem)}
               className={classes.join(' ')}>
                <Icon/>
                {navItem.text}
            </a>
        </li>
    );
};

export default NavigationItem;