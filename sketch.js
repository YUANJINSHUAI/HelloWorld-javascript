function setup(){
    createCanvas(200, 200);
    loadJSON("http://127.0.0.1:8080/books", gotData);
    
}

function gotData(data){
    println(data);
}

function draw(){
    background(0);
}