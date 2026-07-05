function Article(props){
    return(
        <>
            <h3>{props.title}</h3>

            <small>aka: {props.aka}, tags: {props.tags.join(", ")}</small>
        </>
    )
}

export default Article