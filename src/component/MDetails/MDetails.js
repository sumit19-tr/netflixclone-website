import React, { useEffect, useState } from "react";
import './MDetails.css';
import axios from "axios";
import UpcomingMovies from "../Movies/UpcomingMovies";
import { Link } from "react-router-dom";

const MDetails = () => {

    const murl = "https://netflixclone-api-iwcc.onrender.com/movies";

    const [MDetails, setMDetails] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        let movieId = params.get('movieId')
        // console.log("movieId>>>>", movieId); 
        axios.get(`${murl}/${movieId}`)
            .then((res) => {
                setMDetails(res.data)
            })
    }, [MDetails])


    const renderMDetails = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <>
                        <div className="Movie-banner">
                            <img src={item.banner} alt="Movie-poster" className="Responsive-img col-12"
                                width="auto" height="400" />
                            <div class="col-6- col-sm-8 col-md-8 col-lg-4 bottom-left">
                                <div className="Movie-title fs-1 fs-sm-3 fs-md-2 fs-lg-1 fw-bolder text-capitalize">{item.title}</div>
                                <div className="Movie-sub-heading1 fs-6 fw-bold">{item.Availability}</div>
                                <div className="Movie-sub-heading1 fs-6">{item.synopsis}</div>
                                <div className="detail-btn ">
                                    <Link to={`/play?movie_name=${item.title}`}>
                                        <button className="Movie-banner-btn mt-2" > <i class="fa fa-play mbtn"></i>Play</button>
                                    </Link>
                                    <button className="Movie-banner-btn mt-2 ">more info</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    return (
        <>
            {renderMDetails(MDetails)}
            <div style={{ backgroundColor: 'black' }}>
            </div>
            <UpcomingMovies />

        </>
    )
}

export default MDetails