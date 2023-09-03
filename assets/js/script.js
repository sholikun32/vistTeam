var url= 'https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=1303fcd9a1d54663a773a1c601f18dae';

var req= new Request(url);
fetch(req).then(function(response) {
    console.log(response.json());
})