const getJokes = async()=>{
    const config = {
        // bisa juga berupa params, timeout, dst
        headers : {
            Accept: 'application/json',
        },
    };

    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
}


getJokes()



// addition , syntax nya emang gini ya ges
// axios.get(url, config)

