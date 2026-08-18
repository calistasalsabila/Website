const ArticleStatus = ({isNew}) => {
    return isNew && <span>-- baruu!</span> 
}

const NewArticle = () => {
    return <span>-- baru from article status 2</span>
}

function Article(props){
    return(
        <>
            <h3>{props.title}</h3>

            <small>aka: {props.aka}, tags: {props.tags.join(", ")} {" "}
                {props.isNew ? 'baru' : 'lama'}{" "}
                {/* conditional rendering */}
                {props.isNew && 'baruuu'}
                <ArticleStatus isNew={props.isNew} />
                {props.isNew && <NewArticle/>}
            </small>
        </>
    )
}

export default Article