import Link from "next/link";

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-4">
                <Link href="/">
                    Index
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/about">
                    About
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navigation;