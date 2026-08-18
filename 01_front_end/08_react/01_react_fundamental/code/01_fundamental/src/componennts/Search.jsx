import { useState } from "react";

function Search (props){
    const [search, setSearch] = useState("");
    const onSearchChange = (event) => {
        setSearch(event.target.value)
        // namanya ga harus sama kayak onSearchChange (karena beda props sama function atasnya)
        // function props itu harus sama kayak yg di homepage (index.jsx)
        props.onSearchChange(event.target.value)
    }

    return (
        <> 
            <div>Cari Article : <input onChange={onSearchChange}></input></div>
            <small>ditemukan {props.totalPosts} data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search