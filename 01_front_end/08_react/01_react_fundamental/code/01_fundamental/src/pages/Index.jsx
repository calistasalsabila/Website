import posts from "../posts.json"
import Article from "../componennts/Article"


function Homepage(){
    return(
        <>
            <h1>Simple Blog</h1>
            {
                posts.map(({title, tags, aka})=>(
                    <Article title={title} tags={tags} aka={aka} />
                ))
            }
        </>
    )
}

export default Homepage