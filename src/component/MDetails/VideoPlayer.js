import React, { useEffect, useState } from "react";
import UpcomingMovies from "../Movies/UpcomingMovies";

const VideoPlayer = () => {

    // const murl = "http://localhost:9090/movies";

    const [movieName, setmovieName] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        let movieId = params.get('movie_name')
        // console.log("movieId>>>>", movieId);
        setmovieName(movieId);
    }, [])
    // console.log("movieName",movieName);

    const renderVideoPlayer = (movieName) => {
        if (movieName) {
            return (
                <center>
                    <div style={{height:'auto',width:'90vw'}}>
                        <video id="videoRef" width='100%' height='550vw' controls autoPlay >
                            <source src={`https://netflixclone-api-iwcc.onrender.com/video1/${movieName}`} type='video/mp4'></source>
                            Your browser does not support this video tag
                        </video>
                    </div>
                </center>
            )

        }


    }

    return (
        <>
            {renderVideoPlayer(movieName)}
            <UpcomingMovies/>
        </>
    )
}


export default VideoPlayer;