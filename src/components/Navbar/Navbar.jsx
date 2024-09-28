import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style['navbar']}>
            <div className={style.logo}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo"/>
                 <h1 className={style.title}>FavFood</h1>
            </div>
            
            <ul className={style.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/quote">Quote</a></li>
                <li><a href="/resturant">Resturants</a></li>
                <li><a href="/food ">Food</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            
            <div className={style["user-account"]}>
                <a href="#"><i className="fa-solid fa-user"></i> Get started</a>
                <div className={style.hamburger}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;