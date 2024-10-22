import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const UpcomingMovies = () => {

    const murl = "https://incredible-chimera-548b35.netlify.app/moviesCategory/3";

    const [UpcomingMoviesList,setUpcomingMovies] = useState('');

    useEffect(()=> {
        axios.get(murl)
        .then((res) => {            
            setUpcomingMovies(res.data)
        }) 
    },[])

    // console.log("setmovieList",UpcomingMoviesList);

    const renderMovie = (UpcomingMoviesList) => {
        // console.log("renderMOvie >>>>> ",UpcomingMoviesList);

        const scrollToTop = () => {
            window.scrollTo({
                top:'10px',
                behavior:'smooth'
            })
        }
        if(UpcomingMoviesList){
            return UpcomingMoviesList.map((item) => {
                return(
                    <Link to={`/DetailsOfMovies?movieId=${item.id}`} onClick={scrollToTop}>
                        <div className="Horizontal-scrollBar-content" style={{ backgroundImage: `url(${item.title_img})` }}></div>
                    </Link>
                )
            })
        }

    }

    return (
        <>
            <div className="Horizontal-scrollbar-main ">
                <h3 className="text-capitalized">Upcoming Movies</h3>
                
                <div className="Horizontal-scrollbar-0 ">
                    <div className="Horizontal-scrollbar ">
                    {renderMovie(UpcomingMoviesList)}   
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpcomingMovies