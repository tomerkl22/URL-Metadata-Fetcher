import {Link} from "react-router-dom";
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Header() {

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ms-2" to="/">
                            <div className="fs-2 fw-bold text-black title">
                            URL Metadata Fetcher
                            </div>
                        </Link>

                    </nav>
                </div>
            </div>
        </header>
    );
}


