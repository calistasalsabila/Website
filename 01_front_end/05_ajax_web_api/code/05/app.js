const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// nambahi joke ke tampilan (list)
const addJoke = async()=>{
    const jokeText = await getJokes();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}


const getJokes = async()=>{
    try{

         const config = {
        // bisa juga berupa params, timeout, dst
        headers : {
            Accept: 'application/json',
        },
    };

        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;

    }catch (error) {
        return 'no joke available'
    }
   
}

// addition , syntax nya emang gini ya ges
// axios.get(url, config)


button.addEventListener('click', addJoke);

