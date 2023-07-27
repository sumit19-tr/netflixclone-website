import React, { Component } from "react";
import Carousel from "./Carousel";
import TrendingMovies from "./TrendingMovies";
import CoreClub from "./CoreClub";
import UpcomingMovies from "./UpcomingMovies";
import './Movies.css'
// import axios from "axios";

// const murl = "http://localhost:9090/moviesCategory/1";

class Movies extends Component {

    // constructor(props){
    //     super(props)

    //     this.state={
    //         movieList:''
    //     }

    // }

    render() {
        return (
            <>
                <div className="container-fluid" style={{backgroundColor:"black"}}>
                    <Carousel/>
                    <TrendingMovies/>
                    <CoreClub/>
                    <UpcomingMovies/>
                </div>
            </>
        )
    }

    // api calling through axios
    
    // componentDidMount(){
    //     axios.get(${murl})
    // }
}
export default Movies;