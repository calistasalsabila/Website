import { useEffect, useState } from "react";
import postsData from "../posts.json"
import Article from "../componennts/Article"
import Search from "../componennts/Search";


function Homepage(){

    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        console.log(value)
        const filteredPost = postsData.filter(item => item.title.includes(value)) 
        // ini ga assign karena use state termasuk ke dalam function bukan variable
        setPosts(filteredPost)
        setTotalPosts(filteredPost.length);
    }

    // useEffect(() => {
    //     console.log("render");

    //     return () => {
    //         console.log("clean up");
    //     }
    // }, [posts]) // dikasi array kosong biar cuma berjalan sekali saat pertama kali di render ; intinya apa yang berubah dari di dalam kurung

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setExternalPosts (json))

    }, [])

    return(
        <>
            <h1>Simple Blog</h1>
            // function dari props nya
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {
                posts.map((props, index)=>(
                    // <Article title={title} tags={tags} aka={aka} />
                    <Article {...props} key={index} />
                ))
            }

            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))}
        </>
    )
}

export default Homepage