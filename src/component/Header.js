import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import Searchbar from "./searchbar";
import SearchResultList from "./SearchResultList";

const Header = () => {

    const [result,setResult] = useState([]);

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase display-1 Logo" href="#">Netflix</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link" href="javascript:void(0)">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="javascript:void(0)">Movies</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Link</a>
                            </li> */}
                        </ul>
                        <div className="d-flex flex-column my-auto">
                            <Searchbar setResult={setResult}/>
                            <SearchResultList result={result}/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header