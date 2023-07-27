import React, { useState } from "react";
import './SearchResultList.css'
import SearchResult from "./SearchResult";

const SearchResultList = ({result}) => {
    const [hideList,sethideList] = useState(
        {display:'block'}
    );
    
    return(
        <div className="result-list" style={hideList}>
           {result.map((result,id) => {
            return <SearchResult result={result} key={id} sethideList={sethideList}/>
           })} 
        </div>
    )
}
export default SearchResultList;