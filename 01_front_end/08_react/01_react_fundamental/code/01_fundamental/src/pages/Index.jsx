import { useState } from "react";
import postsData from "../posts.json"
import Article from "../componennts/Article"
import Search from "../componennts/Search";


function Homepage(){

    const [posts, setPosts] = useState(postsData)

    const onSearchChange = (value) => {
        console.log(value)
        const filteredPost = postsData.filter(item => item.title.includes(value)) 
        // ini ga assign karena use state termasuk ke dalam function bukan variable
        setPosts(filteredPost)
    }
    return(
        <>
            <h1>Simple Blog</h1>
            // function dari props nya
            <Search onSearchChange={onSearchChange}/>
            {
                posts.map((props, index)=>(
                    // <Article title={title} tags={tags} aka={aka} />
                    <Article {...props} key={index} />
                ))
            }
        </>
    )
}

export default Homepage