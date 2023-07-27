import React from "react";
import "./Carousel.css"
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <>
            {/* <!-- Carousel -->*/}
            <div id="demo" className="cointainer-fluid carousel slide col-12  col-sm-12 col-lg-12" data-bs-ride="carousel" >

                {/* Indicators/dots  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <Link to="/DetailsOfMovies?movieId=18"><img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/08/Pathaan-cover-news.jpg" alt="poster" className="d-block img-responsive" /></Link>
                        <div className="carousel-caption">
                            <h3 className="text-capitalize">Pathaan</h3>
                            <p>Hindi Drama U/A 10 8+</p>
                            <Link to="/DetailsOfMovies?movieId=18"><button className="watch-btn"><i className="fa fa-play">&nbsp;WATCH</i></button></Link>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <Link to="/DetailsOfMovies?movieId=22"><img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg" alt="" className="d-block " style={{ width: '100%', backgroundImage: `url("")` }}/></Link>
                        <div className="carousel-caption">
                            <h3 className="text-capitalize">tu jhoothi main makkar poster</h3>
                            <p>Hindi Drama U/A 10 8+</p>
                            <Link to="/DetailsOfMovies?movieId=22"><button className="watch-btn"> <i className="fa fa-play">&nbsp;WATCH</i></button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="/DetailsOfMovies?movieId=20"><img src="https://www.bollywoodhungama.com/wp-content/uploads/2020/02/Bholaacover-image1.jpg" alt="" className="d-block "/></Link>
                        <div className="carousel-caption">
                            <h3 className="text-capitalize">Bhola</h3>
                            <p>Hindi Drama U/A 10 8+</p>
                            <Link to="/DetailsOfMovies?movieId=20"><button className="watch-btn"> <i className="fa fa-play">&nbsp;WATCH</i></button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <Link to="/DetailsOfMovies?movieId=19"><img src="https://images4.alphacoders.com/126/1262278.jpg" alt="" className="d-block " style={{ width: '100%', backgroundImage: `url("")` }} /></Link>
                        <div className="carousel-caption">
                            <h3 className="text-capitalize">RRR</h3>
                            <p>Hindi Drama U/A 10</p>
                            <Link to="/DetailsOfMovies?movieId=19"><button className="watch-btn"> <i className="fa fa-play">&nbsp;WATCH</i></button></Link>
                        </div>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}

export default Carousel;


