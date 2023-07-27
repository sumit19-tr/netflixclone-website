import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="height">
                        <center>
                            <div className="h1 col-12- col-sm-12 col-md-12 col-lg-12 col-xl-12  text-white">
                                Unlimited movies,TV shows and more.
                            </div>
                            <div className="h3 text-white py-3">
                                Watch anywhere. Cancel anytime.{" "}
                            </div>
                            <div className="h5 text-white">
                                Ready to watch? Enter your email to create or restart your membership.
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="w-50 p-3 rounded-4 bg-transparent border border-dark text-white"
                                    placeholder="Email Address"
                                />
                                <button
                                    type="submit"
                                    style={{ position: "absolute" }}
                                    className=" rounded-4 btn btn-danger ml-1 p-3"
                                >
                                    Get Started &gt;
                                </button>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="card m-2  maxwidth padding-extra bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <div className="card-body ml-3">
                                <h5 className="card-title text-white display-4  ">
                                    Enjoy on your TV.
                                </h5>
                                <p className="card-text text-white h3">
                                    start yor day with exclusive breakfast option
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                src='https://i.ibb.co/v3cQBfj/tv.png'
                                style={{ height: "100%", width: "100%" }}
                                alt="breakfast"
                            />
                        </div>
                    </div>
                </div>
                <div className="card m-2  maxwidth padding-extra bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <img
                                src="https://i.ibb.co/7RpzCjp/mobile-0819.jpg"
                                style={{ height: "100%", width: "100%" }}
                                alt="breakfast"
                            />
                        </div>
                        <div className="col-6">
                            <div className="card-body ml-3">
                                <h5 className="card-title text-white display-4  ">
                                    Download your shows to watch offline.
                                </h5>
                                <p className="card-text text-white h3">
                                    Save your favourites easily and always have something to watch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-2  maxwidth padding-extra bg-dark">
                    <div className="row">
                        <div className="col-6">
                            <div className="card-body ml-3">
                                <h5 className="card-title text-white display-4  ">
                                    Enjoy on your TV.
                                </h5>
                                <p className="card-text text-white h3">
                                    start yor day with exclusive breakfast option
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                src="https://i.ibb.co/BTphrKr/device-pile-in.png"
                                style={{ height: "100%", width: "100%" }}
                                alt="breakfast"
                            />
                        </div>
                    </div>
                </div>
                <div className="card m-2 text-center maxwidth padding-extra pt-5 bg-dark ">
                    <h1 className="text-white fw-bolder">Frequently Asked Questions</h1>
                    <div
                        className="card text-white my-1 mt-3"
                        id="hov"
                        style={{ backgroundColor: "black" }}
                    >
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne1"
                        >
                            <div className="text-start h3">What is Netflix</div>
                        </div>
                        <div id="collapseOne1" className="collapse  " data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                Netflix is a streaming service that offers a wide variety of
                                award-winning TV shows, movies, anime, documentaries and more – on
                                thousands of internet-connected devices. <br />
                                <br />
                                You can watch as much as you want, whenever you want, without a single
                                ad – all for one low monthly price. There's always something new to
                                discover, and new TV shows and movies are added every week!
                            </div>
                        </div>
                    </div>
                    <div className="card text-white my-1" style={{ backgroundColor: "black" }}>
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne2"
                        >
                            <div className="text-start h3">How much does Netflix cost?</div>
                        </div>
                        <div id="collapseOne2" className="collapse  " data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                streaming device, all for one fixed monthly fee. Plans range from ₹
                                149 to ₹ 649 a month. No extra costs, no contracts.
                            </div>
                        </div>
                    </div>
                    <div className="card text-white my-1" style={{ backgroundColor: "black" }}>
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne3"
                        >
                            <div className="text-start h3">Where can I watch?</div>
                        </div>
                        <div id="collapseOne3" className="collapse " data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch
                                instantly on the web at netflix.com from your personal computer or on
                                any internet-connected device that offers the Netflix app, including
                                smart TVs, smartphones, tablets, streaming media players and game
                                consoles.
                                <br />
                                <br />
                                You can also download your favourite shows with the iOS, Android, or
                                Windows 10 app. Use downloads to watch while you're on the go and
                                without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div>
                    </div>
                    <div className="card text-white my-1" style={{ backgroundColor: "black" }}>
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne4"
                        >
                            <div className="text-start h3">How do I cancel?</div>
                        </div>
                        <div id="collapseOne4" className="collapse " data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                Watch anywhere, anytime. Sign in with your Netflix account to watch
                                instantly on the web at netflix.com from your personal computer or on
                                any internet-connected device that offers the Netflix app, including
                                smart TVs, smartphones, tablets, streaming media players and game
                                consoles.
                                <br />
                                <br />
                                You can also download your favourite shows with the iOS, Android, or
                                Windows 10 app. Use downloads to watch while you're on the go and
                                without an internet connection. Take Netflix with you anywhere.
                            </div>
                        </div>
                    </div>
                    <div className="card text-white my-1" style={{ backgroundColor: "black" }}>
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne5"
                        >
                            <div className="text-start h3">What can I watch on Netflix?</div>
                        </div>
                        <div id="collapseOne5" className="collapse " data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                WNetflix has an extensive library of feature films, documentaries, TV
                                shows, anime, award-winning Netflix originals, and more. Watch as much
                                as you want, anytime you want.
                            </div>
                        </div>
                    </div>
                    <div className="card text-white my-1" style={{ backgroundColor: "black" }}>
                        <div
                            className="card-header btn "
                            data-bs-toggle="collapse"
                            to="#collapseOne6"
                        >
                            <div className="text-start h3">Is Netflix good for kids?</div>
                        </div>
                        <div id="collapseOne6" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body text-start h5">
                                The Netflix Kids experience is included in your membership to give
                                parents control while kids enjoy family-friendly TV shows and films in
                                their own space.
                                <br />
                                <br />
                                Kids profiles come with PIN-protected parental controls that let you
                                restrict the maturity rating of content kids can watch and block
                                specific titles you don’t want kids to see.
                            </div>
                        </div>
                    </div>
                    <div className="h5 text-white mt-5 ">
                        Ready to watch? Enter your email to create or restart your membership.
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-50 p-3 rounded-4 bg-transparent border border-success text-white"
                            placeholder="Email Address"
                        />
                        <button
                            type="submit"
                            style={{ position: "absolute" }}
                            className=" rounded-4 btn btn-danger ml-1 p-3"
                        >
                            Get Started &gt;
                        </button>
                    </div>
                </div>
                <div className="countainer ps-5 text-white">
                    <footer className="py-5">
                        <div className="row justify-content-between ms-5">
                            <div className="col-2">
                                <h5 style={{ width: "max-content" }}>
                                    Questions? Call 000-800-919-1694
                                </h5>
                                <ul className="nav flex-column ">
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted ">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Account
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Jobs
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Only on Netflix
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-2">
                                
                                <ul className="nav flex-column mt-5">
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Gift Card Terms
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Media Centre
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Ways to Watch
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Cookie Preferences
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Speed Test
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-2">
                                
                                <ul className="nav flex-column mt-5">
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Features
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            FAQs
                                        </Link>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <Link to="#" className="nav-link p-0 text-muted">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 my-4 border-top">
                            {/* <p>© Sumit mehra, Edureka at Intern.</p> */}
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <Link className="link-dark" to="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#twitter" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="ms-3">
                                    <Link className="link-dark" to="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </Link>
                                </li>
                                <li className="ms-3">
                                    <Link className="link-dark" to="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Home;