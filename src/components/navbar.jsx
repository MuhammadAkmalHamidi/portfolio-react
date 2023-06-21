import "../style.css"
function Navbar() {
    return(
    <div>
        <nav className="wrapper">
            <div className="brand">
                <div className="mal">mal</div>
                <div className="unyu">UNYU</div>
            </div>
            <ul className="navigation">
                <li className="home"><a href="#index">home</a></li>
                <li className="portfolio"><a href="#about">About Me</a></li>
                <li className="locatio"><a href="#gmaps">Location</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar