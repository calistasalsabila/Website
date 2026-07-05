function Article(props){
    return(
        <>
            <div>{props.name}</div>
            <div>
                {props.titles.map((titles) => {
                    return <div>{titles}</div>
                })}
            </div>
        </>
    )
}

export default Article