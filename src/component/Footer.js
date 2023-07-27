import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:"black"}}>
                <center>
                <footer className="pt-5">
                    <div className="row text-white ">
                        <div className="col-sm-12 col-md-4 col-lg-2 display-flex">
                            <img className="NetflixIcon-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMzSxYl9xnoq9SaJqu24GtHPdBYMdjhYSBNfLtLHuSvUmGjn89Stod-LR6iAcVw0sRs0&usqp=CAU"
                                alt="footer_image" width="50px" height="40px" /><span className="h2 text-white">Neflix</span>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-2">
                            <h5 className="text-white">Netflix</h5>
                            <ul className="netflix-menu">
                                <li className="netflix-menu-item"><Link href="#" className="item">Home</Link></li>
                                <li className="netflix-menu-item"><Link href="#" className="item">Movies</Link></li>
                                <li className="netflix-menu-item"><Link href="#" className="item">TV Shows</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-2">
                            <h5 className="text-white">Support</h5>
                            <ul className="netflix-menu">
                                <li className="netflix-menu-item"><Link href="#" className="item">Help Center</Link></li>
                                <li className="netflix-menu-item"><Link href="#" className="item">Terms Of Use</Link></li>
                                <li className="netflix-menu-item"><Link href="#" className="item">Content Complaints</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <form>
                                <h2>Connect With Us</h2>
                                <ul className="netflix-icon">
                                    <li className="netflix-icon-item"><Link href="#" className="icons fa fa-facebook"></Link></li>
                                    <li className="netflix-icon-item"><Link href="#" className="icons fa fa-twitter"></Link></li>
                                    <li className="netflix-icon-item"><Link href="#" className="icons fa fa-linkedin"></Link></li>
                                </ul>
                            </form>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3">
                            <form>
                                <h2>Download the App</h2>
                                <ul className="netflix-icon">
                                    <li className="netflix-icon-item"><Link href="#" className="icons fa fa-google"></Link></li>
                                    <li className="netflix-icon-item"><Link href="#" className="img-icons "><img className="playStore-img" alt="footer_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZFiD6XIgJz4NmX6PICRpBzlRwUPAGmZmUZRvCNsdLc3_RoYT3NnfcgUGqjdVpkNTBbI&usqp=CAU" /></Link></li>
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