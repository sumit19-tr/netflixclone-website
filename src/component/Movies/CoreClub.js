import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const CoreClub = () => {

    const murl = "http://localhost:9090/moviesCategory/2";

    const [movieList,setmovieList] = useState('');

    useEffect(()=> {
        axios.get(murl)
        .then((res) => {            
            setmovieList(res.data)
        }) 
    },[])

    const renderMovie = (movieList) => {
        console.log("renderMOvie >>>>> ",movieList);
        if(movieList){
            return movieList.map((item) => {
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
            <div className="Horizontal-scrollbar-main">
                <h3 className="text-capitalized">100 Core Club</h3>
                <div className="Horizontal-scrollbar-0">
                    <div className="Horizontal-scrollbar">
                        {renderMovie(movieList)} 
                    </div>
                </div>
            </div>
        </>
    )
}
export default CoreClub