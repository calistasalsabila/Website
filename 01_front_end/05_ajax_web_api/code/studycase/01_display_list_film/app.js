const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // biar kalau misal ada img sebelumnya bisa clear
    document.querySelectorAll('img').forEach((img)=> img.remove());
    
    const keyword = form.elements.query.value;
    const config = {
        params: {
            q: keyword, 
        },
    }

    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    getImage(res.data);
    // kalo udah dapat datanya 
    form.elements.query.value = '';
})


const getImage = (shows)=>{
    for(let result of shows){
        const img = document.createElement('img');
        // show itu respone tv maze yg mau di ambil
        img.src = result.show.image.medium;
        document.body.append(img);
    }

}


// ex show
// [
//   {
//     "score": 17.5,
//     "show": {
//       "id": 1,
//       "name": "Under the Dome",
//       "image": {
//         "medium": "https://...medium.jpg",
//         "original": "https://...original.jpg"
//       }
//     }
//   },
//   {
//     "score": 15.2,
//     "show": { ... }
//   }
// ]

// addition res.data , data nya itu properti resmi dari axios
