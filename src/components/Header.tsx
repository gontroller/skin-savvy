function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h1>Skin Savvy</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button className="btn-cart">
                        <span>0</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;