
// default nya get
fetch('https://catfact.ninja/fact')
    .then((res)=>{
        if(!res.ok){
            throw Error('could not fetch the data')
        }
        return res.json();
    })

    .then((data)=>{
        console.log('json', data);
    })

    .catch((err)=>{
        console.log('error', err)
    });


// addition 
// bisa juga return fetch lagi, then lagi, catch lagi

fetch('https://catfact.ninja/fact')
    .then((res)=>{
        if(!res.ok){
            throw Error('could not fetch the data')
        }
        return res.json();
    })
    .then((data) => {
        console.log('json 1', data);
        return fetch('https://swapi.dev/api/people/2');
    })
    .then((res) => {
        console.log('request 2');
        if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log('error', err);
    });


// gambarannya gini , then itu ngambil dari yang sebelumnya
// const res = await fetch(url);  // res = Response object
// const data = await res.json(); // data = hasil parsing JSON dari res
// console.log(data);             // sekarang baru bisa pakai data



const loadFact = async ()=> {
    try {
        const res = await fetch('https://catfact.ninja/fact');
        const data = await res.json();
        console.log(data);
        // bisa lebih dari satu juga
        const res2 = await fetch('https://catfact.ninja/facts');
        const data2 = await res2.json();
        console.log(data2); 
    } catch (err) {
        console.log('error', err);
    }
    
}




loadFact();