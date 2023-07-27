import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"black"}}>
                <center>
                <footer className="pt-5">
                    <div className="row text-white ">
                        <div className="col-sm-12 col-md-4 col-lg-2 display-flex">
                            <img className="NetflixIcon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMzSxYl9xnoq9SaJqu24GtHPdBYMdjhYSBNfLtLHuSvUmGjn89Stod-LR6iAcVw0sRs0&usqp=CAU"
                                width="50px" height="40px" /><span className="h2 text-white">Neflix</span>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-2">
                            <h5 className="text-white">Netflix</h5>
                            <ul className="netflix-menu">
                                <li className="netflix-menu-item"><a href="" className="item">Home</a></li>
                                <li className="netflix-menu-item"><a href="" className="item">Movies</a></li>
                                <li className="netflix-menu-item"><a href="" className="item">TV Shows</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-2">
                            <h5 className="text-white">Support</h5>
                            <ul className="netflix-menu">
                                <li className="netflix-menu-item"><a href="" className="item">Help Center</a></li>
                                <li className="netflix-menu-item"><a href="" className="item">Terms Of Use</a></li>
                                <li className="netflix-menu-item"><a href="" className="item">Content Complaints</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <form>
                                <h2>Connect With Us</h2>
                                <ul className="netflix-icon">
                                    <li className="netflix-icon-item"><a href="" className="icons fa fa-facebook"></a></li>
                                    <li className="netflix-icon-item"><a href="" className="icons fa fa-twitter"></a></li>
                                    <li className="netflix-icon-item"><a href="" className="icons fa fa-linkedin"></a></li>
                                </ul>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <form>
                                <h2>Download the App</h2>
                                <ul className="netflix-icon">
                                    <li className="netflix-icon-item"><a href="" className="icons fa fa-google"></a></li>
                                    <li className="netflix-icon-item"><a href="" className="img-icons "><img className="playStore-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZFiD6XIgJz4NmX6PICRpBzlRwUPAGmZmUZRvCNsdLc3_RoYT3NnfcgUGqjdVpkNTBbI&usqp=CAU" /></a></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </footer>
                </center>
            </div>
        </>
    )
}
export default Footer