import { useContext } from "react"
import { GlobalContext } from "../context"

const ArticleStatus = ({isNew}) => {
    return isNew && <span>-- baruu!</span> 
}


function Article(props){
    const user = useContext(GlobalContext)
    return(
        <>
            <h3>{props.title}</h3>
            
            <small>aka: {props.aka}, tags: {props.tags.join(", ")} {" "}
                <ArticleStatus isNew={props.isNew} />
            </small>
            <div>
                 <small>
                    write by {user.username}
                 </small>
            </div>
           
        </>
    )
}

export default Article