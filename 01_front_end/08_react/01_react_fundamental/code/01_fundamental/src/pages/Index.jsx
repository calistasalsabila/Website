import posts from "../posts.json"
import Article from "../componennts/Article"


function Homepage(){
    return(
        <>
            <h1>Simple Blog</h1>
            {
                posts.map((blog)=>(
                    <Article title={blog.title} tags={blog.tags} aka={blog.aka} />
                ))
            }
        </>
    )
}

export default Homepage