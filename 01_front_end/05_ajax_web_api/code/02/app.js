const req = new XMLHttpRequest();
let data;

req.onload = function(){
    data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function(){
    console.log(this);
}


req.open('GET', 'https://catfact.ninja/fact');
req.send();