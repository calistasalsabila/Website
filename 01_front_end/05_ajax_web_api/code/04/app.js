// axios.get('https://catfact.ninja/fact').then((res) => {
//     console.log(res);
//     // kalau misal mau langsung ambil data
//     console.log(res.data);
// }).catch((err) =>{
//     console.log('error', err);
//     alert(err.message);
// })



const getFact = async()=>{
    try{
        const res = axios.get('https://catfact.ninja/fact')
        .then((res)=>{
            console.log(res.data);
        }
        )
    } catch(error) {
        console.log(error);
        console.log(error.message);
        console.log(error.respone.status);
        console.log(error.respone.data);
    }
}


getFact();