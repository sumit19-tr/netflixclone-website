import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const TrendingMovies = () => {

    const murl = "https://incredible-chimera-548b35.netlify.app/moviesCategory/1";

    const [TrendingMoviesList,setTrendingMoviesList] = useState('');

    useEffect(()=> {
        axios.get(murl)
        .then((res) => {            
            setTrendingMoviesList(res.data)
        }) 
    },[])

    console.log("setmovieList",TrendingMoviesList);

    const renderMovie = (TrendingMoviesList) => {
        console.log("renderMOvie >>>>> ",TrendingMoviesList);
        if(TrendingMoviesList){
            return TrendingMoviesList.map((item) => {
                return(
                    <Link to={`/DetailsOfMovies?movieId=${item.id}`}>
                        <div className="Horizontal-scrollBar-content" style={{ backgroundImage: `url(${item.title_img})` }}></div>
                    </Link>
                )
            })
        }

    }

    return (
        <>
            <div className="Horizontal-scrollbar-main ">
                <h3 className="text-capitalized">Trending Movies</h3>
                {/* <div>
                    <button className="icon1" ><i class="fa fa-angle-left" style={{fontSize:'36px'}}></i></button>
                </div> */}
                <div className="Horizontal-scrollbar-0 ">
                    <div className="Horizontal-scrollbar ">
                        {renderMovie(TrendingMoviesList)}   
                    </div>
                </div>
                {/* <div>
                    <button className="icon2"><i class="fa fa-angle-right" style={{fontSize:'36px'}}></i></button>
                </div> */}
            </div>
        </>
    )
}
export default TrendingMovies