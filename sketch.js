async function getData(){
    // const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
    // const api_url = "http://180.76.147.17:8080/test"
    // const response = await fetch(api_url);
    // const data = await response.json();


    
    // console.log(request)
    // console.log(data);
    // const {latitude, longitude} = data;
    // document.getElementById('lat').textContent = latitude;
    // document.getElementById('lon').textContent = longitude;
    
    // document.getElementById('res').textContent = data;

    var request = new Request('http://180.76.147.17:8080/test');
    const response  = await fetch(request, {mode: 'no-cors'});
    const data = response;
    console.log(data);  
    // console.log(request);
    // const response = await fetch(request);
    // console.log("now print response")
    // console.log(response);

    // const data = await response;
    // console.log("data" + data);
    // console.log(data);
    // document.getElementById('res').textContent = data;
    
}

getData();