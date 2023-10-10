

function Header(){

    return (
        <>
            <header>
                <div className="collapse custom" id="navbarHeader">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-white">
                            Add some information about the album below, the author, or any other
                            background context. Make it a few sentences long so folks can pick
                            up some informative tidbits. Then, link them off to some social
                            networking sites or contact information.
                        </p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                            <li>
                            <a href="#" className="text-white">
                                Follow on Twitter
                            </a>
                            </li>
                            <li>
                            <a href="#" className="text-white">
                                Like on Facebook
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="navbar navbar-dark shadow-sm custom">
                    <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <i className="fa fa-coffee" /> &nbsp;&nbsp;
                        <strong>Restaurant</strong>
                    </a>
                    <a href="index.html" style={{ color: "white" }}>
                        Home
                    </a>
                    <a href="about.html" style={{ color: "white" }}>
                        About Us
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarHeader"
                        aria-controls="navbarHeader"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;