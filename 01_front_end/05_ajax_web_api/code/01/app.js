// Data dalam format string JSON (belum jadi object)
const animeData = `{
  "animeList": [
    {
      "title": "Attack on Titan",
      "genre": ["Action", "Drama", "Fantasy"],
      "year": 2013,
      "rating": 9.1,
      "status": "Completed"
    },
    {
      "title": "My Hero Academia",
      "genre": ["Action", "Comedy", "Superhero"],
      "year": 2016,
      "rating": 8.5,
      "status": "Ongoing"
    },
    {
      "title": "Demon Slayer",
      "genre": ["Action", "Adventure", "Fantasy"],
      "year": 2019,
      "rating": 8.8,
      "status": "Ongoing"
    },
    {
      "title": "One Piece",
      "genre": ["Action", "Adventure", "Comedy"],
      "year": 1999,
      "rating": 9.0,
      "status": "Ongoing"
    }
  ]
}`;

// Mengubah string JSON menjadi object JS
const animeObj = JSON.parse(animeData);

// Contoh akses data
console.log(animeObj.animeList[0].title); // "Attack on Titan"
console.log(animeObj.animeList[2].genre); // ["Action", "Adventure", "Fantasy"]
