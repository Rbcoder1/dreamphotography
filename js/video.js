let cont = document.getElementById("cont");


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3c05e5717fmshb9cb14ced90af95p16376fjsn703abfabb9f2',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UC3gv1IOtt09-MjFMzZjgLIA&part=snippet%2Cid&order=date&maxResults=50', options)
    .then(response => response.json())
    .then((response) => {
        let str = "";

        for (item of response.items) {
            let vid = item.id.videoId;
            let strcp = `<div class="col">
                            <div class="card">
                            <img src="${item.snippet.thumbnails.high.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.snippet.title}</h5>
                                <p class="card-text">${item.snippet.description}</p>
                                <a href="https://www.youtube.com/watch?v=${vid}">Watch Now</a>
                            </div>
                            </div>
                        </div>`
        
          str += strcp;
          
        }
        cont.innerHTML = str
        
    })
    .catch(err => console.error(err));



