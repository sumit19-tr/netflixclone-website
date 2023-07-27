import React, { useState } from "react";

const Searchbar = ({setResult}) => {
    const [input,setInput] = useState("");
    
    const fetchData = (value) => {
        fetch("https://netflixclone-api-iwcc.onrender.com/movies")
        .then((Response) => Response.json())
        .then((json) => {
            const result = json.filter((user) => {
                return value && user && user.title && user.title.toLowerCase().includes(value)
            });
            setResult(result)
        })
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return(
        <>
            <input className="form-control me-2 rounded-pill" type="text" placeholder="Search" 
            value={input} onChange={(e)=> handleChange(e.target.value)} />
        </>
    )
}
export default Searchbar;