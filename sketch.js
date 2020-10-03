async function getData(){
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
    const response = await fetch(api_url);
    const data = await response.json();

    const {latitude, longitude} = data;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    console.log(data);

}

getData();