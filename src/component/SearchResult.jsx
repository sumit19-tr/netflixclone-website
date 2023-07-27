import React from "react";
import './SearchResult.css'
import { Link } from "react-router-dom";
const SearchResult = ({result},{sethideList}) => {
    const handleClick = (value) => {
           const style = {display:'none'}
           sethideList(style);
           console.log(">>>> handleClick value ",value );
    }
    return(
        <>
            <div className="search-result">
                <Link to={`/DetailsOfMovies?movieId=${result.id}`} onClick={(e)=> handleClick(e.target.value)}>{result.title}</Link>
            </div>
        </>
    )
}
export default SearchResult;