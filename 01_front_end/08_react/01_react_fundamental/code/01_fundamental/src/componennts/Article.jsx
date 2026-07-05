function Article(){
    const name = "Caltherion";
    const title = ["orv", "kp", "tog"];

    // title.map(item => item);

    return(
        <>
            <div>{name}</div>
            <div>{title.map((title => {
                return (
                    <>
                    <div>{title}</div>
                    <div>{title}</div>
                    </>   
                )
            }
            
            ))}</div>
        </>
    )
}

export default Article