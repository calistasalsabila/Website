function Article(props){
    return(
        <>
            <h3>{props.title}</h3>

            <small>aka: {props.aka}, tags: {props.tags.join(", ")} {" "}
                {props.isNew ? 'baru' : 'lama'}{" "}
                {/* conditional rendering */}
                {props.isNew && 'baruuu'}
            </small>
        </>
    )
}

export default Article