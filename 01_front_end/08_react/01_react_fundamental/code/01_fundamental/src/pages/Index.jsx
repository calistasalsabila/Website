import { useState } from "react";
import posts from "../posts.json"
import Article from "../componennts/Article"


function Homepage(){

    const [search, setSearch] = useState("");
    const changeSearch = (event) => {
        setSearch(event.target.value);
    }
    return(
        <>
            <h1>Simple Blog</h1>
            <div>Cari Article : <input onChange={changeSearch}></input></div>
            <small>ditemukan 0 data dengan pencarian kata {search}</small>
            {
                posts.map(({title, tags, aka}, index)=>(
                    // <Article title={title} tags={tags} aka={aka} />
                    <Article {...{title, tags, aka}} key={index} />
                ))
            }
        </>
    )
}

export default Homepage