import { useState } from "react";

function Search (props){
    const [search, setSearch] = useState("");
    const onSearchChange = () => {
        // setSearch(event.target.value) , karena udah di e => setSearch ...
        // namanya ga harus sama kayak onSearchChange (karena beda props sama function atasnya)
        // function props itu harus sama kayak yg di homepage (index.jsx)
        // props.onSearchChange(event.target.value) 
        props.onSearchChange(search) 
    }; 

    const searchKeydown = e => {
        if (e.key === "Enter"){
            onSearchChange();
        }
    }
    return (
        <> 
            <div>Cari Article : <input onChange={e => setSearch(e.target.value)} onKeyDown={searchKeydown}></input> 
            {/* Button hanya mengembalikan ke home */}
            <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>ditemukan {props.totalPosts} data dengan pencarian kata {search}</small>
        </>
    )
}

export default Search